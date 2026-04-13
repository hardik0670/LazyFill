// ─── Constants ────────────────────────────────────────────────────
const MAX_PROFILES = 4;

// ─── DOM references ───────────────────────────────────────────────
const mainView         = document.getElementById('mainView');
const editorView       = document.getElementById('editorView');
const fillFormBtn      = document.getElementById('fillFormBtn');
const scanBtn          = document.getElementById('scanBtn');
const editProfileBtn   = document.getElementById('editProfileBtn');
const saveProfileBtn   = document.getElementById('saveProfileBtn');
const cancelEditBtn    = document.getElementById('cancelEditBtn');
const backBtn          = document.getElementById('backBtn');
const duplicateProfileBtn = document.getElementById('duplicateProfileBtn');
const deleteProfileBtn = document.getElementById('deleteProfileBtn');
const fieldCountNum    = document.getElementById('fieldCountNum');
const fieldCountBadge  = document.getElementById('fieldCountBadge');
const profileSummary   = document.getElementById('profileSummary');
const profileTiles     = document.getElementById('profileTiles');
const profileNameInput = document.getElementById('profileName');
const editorSubtitle   = document.getElementById('editorSubtitle');
const themeToggle      = document.getElementById('themeToggle');
const htmlEl           = document.documentElement;

/* ─── Ripple: track cursor position for radial-gradient origin ─── */
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('mousedown', e => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top)  / r.height) * 100;
        btn.style.setProperty('--ripple-x', x + '%');
        btn.style.setProperty('--ripple-y', y + '%');
    });
});

/* ─── Cursor Glow: Dynamic background glow following mouse ─── */
const cursorGlow = document.getElementById('cursorGlow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            cursorGlow.style.opacity = '1';
        });
    });
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}


const PROFILE_FIELDS = [
    'profileName',
    // Personal — middleName, nationality removed
    'fullName', 'firstName', 'lastName', 'gender', 'dateOfBirth', 'age', 'bloodGroup',
    // Academic — education, subject, interestedDomain, researchInterestArea removed; domainOfInterest added; qualification removed (mirrors course)
    'collegeName', 'course', 'courseOther', 'branch', 'specialization',
    'currentYear', 'currentSemester', 'currentCgpa', 'currentBacklogs', 'passiveBacklogs',
    'graduationYear', 'tenthPercent', 'twelfthPercent',
    'collegeEmail', 'sapId', 'domainOfInterest',
    // Internship — country moved to address; skillLevel moved here
    'internshipProgram', 'duration', 'skillLevel', 'experience',
    'company', 'referralSource', 'aboutMe',
    // Contact
    'email', 'phone', 'whatsappNumber',
    // Links — twitterLink removed
    'githubLink', 'linkedinLink', 'websiteLink',
    // Address — country added here
    'address', 'city', 'state', 'zip', 'country'
];

const REQUIRED_HINT_FIELDS = ['fullName', 'email', 'phone', 'course', 'collegeName', 'internshipProgram'];

let statusTimer = null;
let currentProfiles = [];
let activeProfileId = null;
let editingProfileId = null;

// ─── Status Banner ────────────────────────────────────────────────
function showStatus(message, type = 'info', duration = 3200) {
    clearTimeout(statusTimer);

    // Show the banner in whichever view is active
    const activeBanner = editorView.classList.contains('hidden')
        ? document.getElementById('statusBanner')
        : document.getElementById('editorStatusBanner');

    if (!activeBanner) return;

    activeBanner.textContent = message;
    activeBanner.className = `status-banner ${type}`;
    activeBanner.classList.add('slide-in');

    statusTimer = setTimeout(() => {
        activeBanner.style.opacity = '0';
        activeBanner.style.transform = 'translateY(-4px)';
        setTimeout(() => {
            activeBanner.className = 'status-banner hidden';
            activeBanner.style.opacity = '';
            activeBanner.style.transform = '';
        }, 200);
    }, duration);
}

// ─── View switching ───────────────────────────────────────────────
function showView(show, hide) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
    show.style.animation = 'none';
    requestAnimationFrame(() => {
        show.style.animation = '';
    });
}

// ─── Tab helpers ──────────────────────────────────────────────────
function getActiveTab() {
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            resolve(tabs[0] || null);
        });
    });
}

function sendToContent(tabId, message) {
    return new Promise((resolve) => {
        chrome.tabs.sendMessage(tabId, message, (response) => {
            if (chrome.runtime.lastError) { resolve(null); return; }
            resolve(response);
        });
    });
}

function sendRuntime(message) {
    return new Promise((resolve) => {
        chrome.runtime.sendMessage(message, (response) => {
            resolve(response || null);
        });
    });
}

// ─── Profile helpers ──────────────────────────────────────────────
function createEmptyProfile(name = 'New Profile') {
    const profile = { id: crypto.randomUUID(), profileName: name };
    PROFILE_FIELDS.forEach(key => { if (key !== 'profileName') profile[key] = ''; });
    return profile;
}

function getFilledFieldCount(profile) {
    return PROFILE_FIELDS.filter((key) => key !== 'profileName' && String(profile[key] || '').trim()).length;
}

function getCompletion(profile) {
    const total = PROFILE_FIELDS.length - 1;
    return Math.round((getFilledFieldCount(profile) / total) * 100);
}

function getProfileLabel(profile, index) {
    return profile.profileName || profile.fullName || `Profile ${index + 1}`;
}

function refreshProfileSummary(profile) {
    if (!profile) {
        profileSummary.textContent = 'Tap + to create your first profile.';
        return;
    }
    const missingImportant = REQUIRED_HINT_FIELDS.filter((key) => !String(profile[key] || '').trim());
    if (missingImportant.length === 0) {
        profileSummary.textContent = `${getProfileLabel(profile, 0)} — ready for most forms.`;
    } else {
        profileSummary.textContent = `${getProfileLabel(profile, 0)} — missing ${missingImportant.length} recommended field${missingImportant.length > 1 ? 's' : ''}.`;
    }
}

function renderProfileTiles() {
    profileTiles.innerHTML = '';

    for (let i = 0; i < MAX_PROFILES; i++) {
        const profile = currentProfiles[i] || null;
        const tile = document.createElement('div');

        if (profile) {
            const pct = getCompletion(profile);
            const isActive = profile.id === activeProfileId;
            tile.className = 'profile-tile' + (isActive ? ' active' : '');
            tile.dataset.id = profile.id;

            // Completion arc colour class
            const barClass = pct === 100 ? 'full' : pct >= 50 ? 'good' : '';

            tile.innerHTML = `
                <div class="tile-top">
                    <span class="tile-name">${escapeHtml(getProfileLabel(profile, i))}</span>
                    ${isActive ? '<span class="tile-active-dot" title="Active"></span>' : ''}
                </div>
                <div class="tile-pct">${pct}<span class="tile-pct-unit">%</span></div>
                <div class="tile-bar-track"><div class="tile-bar-fill ${barClass}" style="width:${pct}%"></div></div>
                <div class="tile-actions">
                    <button class="tile-edit-btn" data-id="${profile.id}" title="Edit profile" type="button">
                        <svg viewBox="0 0 16 16" fill="none" width="11" height="11">
                            <path d="M11 2l3 3-9 9H2v-3l9-9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            `;

            tile.addEventListener('click', async (e) => {
                if (e.target.closest('.tile-edit-btn')) return; // handled separately
                activeProfileId = profile.id;
                await sendRuntime({ action: 'setActiveProfile', activeProfileId: profile.id });
                renderProfileTiles();
                refreshProfileSummary(profile);
            });

            tile.querySelector('.tile-edit-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                loadProfileIntoForm(profile, false);
                showView(editorView, mainView);
            });

        } else {
            // Empty slot — "+ New" tile
            tile.className = 'profile-tile empty';
            tile.innerHTML = `
                <div class="tile-new-icon">
                    <svg viewBox="0 0 20 20" fill="none" width="22" height="22">
                        <path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <span class="tile-new-label">New Profile</span>
            `;
            tile.addEventListener('click', () => {
                if (currentProfiles.length >= MAX_PROFILES) {
                    showStatus(`Maximum ${MAX_PROFILES} profiles allowed.`, 'info', 3000);
                    return;
                }
                const profile = createEmptyProfile(`Profile ${currentProfiles.length + 1}`);
                editingProfileId = null;
                loadProfileIntoForm(profile, true);
                showView(editorView, mainView);
            });
        }

        profileTiles.appendChild(tile);
    }

    const activeProfile = currentProfiles.find(p => p.id === activeProfileId) || currentProfiles[0] || null;
    refreshProfileSummary(activeProfile);
}

// Keep alias so other code that calls renderProfileOptions() still works
function renderProfileOptions() { renderProfileTiles(); }

function escapeHtml(str) {
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function loadProfileIntoForm(profile, isDraft = false) {
    const safeProfile = profile || createEmptyProfile();

    PROFILE_FIELDS.forEach((key) => {
        if (key === 'courseOther') return; // handled separately
        const el = document.getElementById(key);
        if (el) el.value = safeProfile[key] || '';
    });

    // Populate domainOfInterest from any of the old aliases if present
    const domainEl = document.getElementById('domainOfInterest');
    if (domainEl && !domainEl.value) {
        domainEl.value = safeProfile.domainOfInterest || safeProfile.interestedDomain || safeProfile.researchInterestArea || safeProfile.subject || '';
    }

    // Handle course dropdown: if stored value isn't in the option list, select "other" and populate the text field
    const courseEl = document.getElementById('course');
    const courseOtherEl = document.getElementById('courseOther');
    if (courseEl && courseOtherEl) {
        const storedCourse = safeProfile.course || '';
        const optionValues = Array.from(courseEl.options).map(o => o.value);
        if (storedCourse && !optionValues.includes(storedCourse)) {
            courseEl.value = 'other';
            courseOtherEl.value = storedCourse;
            courseOtherEl.classList.remove('hidden');
        } else {
            courseEl.value = storedCourse;
            courseOtherEl.value = '';
            courseOtherEl.classList.add('hidden');
        }
    }

    profileNameInput.value = safeProfile.profileName || '';
    editorSubtitle.textContent = isDraft
        ? 'Create accurate saved profiles for certificates and internship forms.'
        : 'Update this saved profile and keep your data organized.';
    editingProfileId = isDraft ? null : (safeProfile.id || null);
}

function getProfileFromForm() {
    // Build profile object directly instead of calling createEmptyProfile()
    // to avoid allocating a UUID that would immediately be overwritten.
    const profile = { id: editingProfileId || crypto.randomUUID() };
    PROFILE_FIELDS.forEach(key => { profile[key] = ''; });

    PROFILE_FIELDS.forEach((key) => {
        if (key === 'courseOther') return; // handled separately below
        const el = document.getElementById(key);
        const value = el ? el.value.trim() : '';
        profile[key] = value;
    });

    // If "other" course selected, use the custom text input as the course value
    if (profile.course === 'other') {
        profile.course = profile.courseOther || '';
    }

    // qualification mirrors course (forms may ask "qualification" for the same data)
    profile.qualification = profile.course;

    // Legacy field aliases kept for backward-compat with old profiles in storage
    profile.interestedDomain = profile.domainOfInterest;
    profile.researchInterestArea = profile.domainOfInterest;
    profile.subject = profile.domainOfInterest;

    if (!profile.fullName && (profile.firstName || profile.lastName)) {
        const parts = [profile.firstName, profile.lastName].filter(Boolean);
        profile.fullName = parts.join(' ').trim();
    }

    if (!profile.profileName) {
        profile.profileName = profile.fullName || profile.internshipProgram || 'Untitled Profile';
    }

    return profile;
}

// ─── Email swap detection ─────────────────────────────────────────
function detectEmailSwap(profile) {
    const personal = (profile.email || '').toLowerCase().trim();
    const college  = (profile.collegeEmail || '').toLowerCase().trim();
    if (!personal && !college) return null;

    const collegePattern = /\.ac\.in|\.edu\.in|\.edu$|@stu\.|@student\.|@stud\.|@college\.|@university\.|@iit|@nit|@bits|@vit|@srm|@amity|@upes|@manipal|@lpu|@kiet|@mnnit|@iiit/;
    const personalPattern = /gmail\.com|outlook\.com|hotmail\.com|yahoo\.com|proton\.me|icloud\.com|rediffmail\.com|ymail\.com|zoho\.com/;

    const personalLooksCollege = personal && collegePattern.test(personal);
    const collegeLooksPersonal  = college  && personalPattern.test(college);

    if (personal && college && personalLooksCollege && collegeLooksPersonal) return 'swap';
    if (personalLooksCollege) return 'personal-is-college';
    if (collegeLooksPersonal)  return 'college-is-personal';
    return null;
}

function applyEmailSwapFix() {
    const emailEl   = document.getElementById('email');
    const collegeEl = document.getElementById('collegeEmail');
    if (!emailEl || !collegeEl) return false;
    const tmp = emailEl.value;
    emailEl.value   = collegeEl.value;
    collegeEl.value = tmp;
    return true;
}

// ─── Validation ───────────────────────────────────────────────────
function validateProfile(profile) {
    if (!profile.profileName) return 'Profile name is required.';
    if (!profile.fullName) return 'Full name is required so certificate forms can be filled accurately.';

    if (profile.phone) {
        const stripped = profile.phone.replace(/[\s\-\(\)\+]/g, '');
        if (!/^\d{7,15}$/.test(stripped)) {
            return 'Contact number must be 7–15 digits (10 digits for Indian numbers).';
        }
    }

    if (profile.whatsappNumber) {
        const stripped = profile.whatsappNumber.replace(/[\s\-\(\)\+]/g, '');
        if (!/^\d{7,15}$/.test(stripped)) {
            return 'WhatsApp number must be 7–15 digits.';
        }
    }

    if (profile.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
        return 'Personal email looks invalid.';
    }

    if (profile.collegeEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.collegeEmail)) {
        return 'College email looks invalid.';
    }

    // Email swap detection — warn before saving
    const swapResult = detectEmailSwap(profile);
    if (swapResult === 'swap') {
        return '⚠ Emails appear swapped — your college email is in the Personal field and vice versa. Please fix or use the Swap button.';
    }
    if (swapResult === 'personal-is-college') {
        return '⚠ Personal Email looks like a college/institutional address. Did you mean to put it in College Email?';
    }
    if (swapResult === 'college-is-personal') {
        return '⚠ College Email looks like a personal address (Gmail/Outlook). Did you mean to put it in Personal Email?';
    }

    if (profile.githubLink) {
        const n = profile.githubLink.toLowerCase();
        if (n !== 'na' && !/^https?:\/\/(www\.)?github\.com\/.+/.test(n)) {
            return 'GitHub link must be a GitHub URL or "NA".';
        }
    }

    if (profile.linkedinLink) {
        const n = profile.linkedinLink.toLowerCase();
        if (n !== 'na' && !/^https?:\/\/(www\.)?linkedin\.com\/.+/.test(n)) {
            return 'LinkedIn link must be a valid LinkedIn URL or "NA".';
        }
    }

    if (profile.websiteLink) {
        const n = profile.websiteLink.toLowerCase();
        if (n !== 'na' && !/^https?:\/\/.+/.test(n)) {
            return 'Portfolio / Website must be a valid URL or "NA".';
        }
    }

    return null;
}

// ─── Data fetching ────────────────────────────────────────────────
async function refreshProfiles() {
    const response = await sendRuntime({ action: 'getProfiles' });
    currentProfiles = response && Array.isArray(response.profiles) ? response.profiles : [];
    activeProfileId = response && response.activeProfileId ? response.activeProfileId : (currentProfiles[0]?.id || null);
    renderProfileOptions();
}

async function saveProfiles(profiles, nextActiveProfileId) {
    const response = await sendRuntime({
        action: 'saveProfiles',
        profiles,
        activeProfileId: nextActiveProfileId
    });

    if (!response || !response.success) {
        showStatus('Failed to save profiles. Please retry.', 'error');
        return false;
    }

    currentProfiles = response.profiles || profiles;
    activeProfileId = response.activeProfileId || nextActiveProfileId;
    renderProfileOptions();
    return true;
}

async function refreshFieldCount() {
    const tab = await getActiveTab();
    if (!tab) return;

    // chrome://, extensions, and file:// pages block content scripts
    const restricted = !tab.url || /^(chrome|chrome-extension|edge|about|file):\/\//i.test(tab.url);
    if (restricted) {
        fieldCountNum.textContent = '—';
        fieldCountBadge.dataset.state = 'restricted';
        fieldCountBadge.title = 'Cannot scan browser or extension pages.';
        return;
    }

    const response = await sendToContent(tab.id, { action: 'getFormFields' });
    if (!response || !response.success) {
        fieldCountNum.textContent = '?';
        fieldCountBadge.dataset.state = '';
        fieldCountBadge.title = 'Could not reach this page — try reloading it.';
        return;
    }

    fieldCountBadge.title = '';
    animateCounter(fieldCountNum, response.count);
    fieldCountBadge.dataset.state = response.count > 0 ? 'ok' : 'none';
}

// Animate a number counter for the field count badge.
// Reads the previous value from data-count (not textContent) so that
// a 5→0 transition animates correctly instead of jumping instantly.
function animateCounter(el, target) {
    const start = parseInt(el.dataset.count ?? el.textContent) || 0;
    el.dataset.count = target;
    if (start === target) { el.textContent = target; return; }
    const diff = target - start;
    const steps = Math.min(Math.abs(diff), 12);
    let step = 0;
    const interval = setInterval(() => {
        step++;
        el.textContent = Math.round(start + (diff * step / steps));
        if (step >= steps) clearInterval(interval);
    }, 30);
}

// ─── Button loading state ─────────────────────────────────────────
function setLoading(btn, loading) {
    if (loading) {
        btn.classList.add('loading');
        btn.disabled = true;
    } else {
        btn.classList.remove('loading');
        btn.disabled = false;
    }
}

// ─── Event listeners ──────────────────────────────────────────────
fillFormBtn.addEventListener('click', async () => {
    const tab = await getActiveTab();
    if (!tab) { showStatus('No active tab found.', 'error'); return; }

    const activeProfile = currentProfiles.find((p) => p.id === activeProfileId);
    if (!activeProfile) { showStatus('No profile saved yet. Create one first.', 'info', 4000); return; }

    setLoading(fillFormBtn, true);
    const response = await sendToContent(tab.id, { action: 'autoFill', userProfile: activeProfile });
    setLoading(fillFormBtn, false);

    if (!response) { showStatus('Could not reach the page. Try reloading it.', 'error'); return; }

    if (response.filledCount > 0) {
        showStatus(`✓ Filled ${response.filledCount} field${response.filledCount > 1 ? 's' : ''} on this page.`, 'success');
        refreshFieldCount();
    } else {
        showStatus('No matching fields found for this profile on the current page.', 'info', 4200);
    }
});

scanBtn.addEventListener('click', async () => {
    const tab = await getActiveTab();
    if (!tab) { showStatus('No active tab found.', 'error'); return; }

    setLoading(scanBtn, true);
    const response = await sendToContent(tab.id, { action: 'getFormFields' });
    setLoading(scanBtn, false);

    if (!response) { showStatus('Could not reach the page. Try reloading it.', 'error'); return; }

    animateCounter(fieldCountNum, response.count);
    fieldCountBadge.dataset.state = response.count > 0 ? 'ok' : 'none';
    showStatus(
        response.count > 0
            ? `Found ${response.count} fillable field${response.count > 1 ? 's' : ''} on this page.`
            : 'No fillable fields detected on this page.',
        response.count > 0 ? 'success' : 'info'
    );
});

editProfileBtn.addEventListener('click', () => {
    const activeProfile = currentProfiles.find((p) => p.id === activeProfileId) || null;
    if (!activeProfile) {
        showStatus('Select a profile first by tapping one of the tiles.', 'info', 3000);
        return;
    }
    loadProfileIntoForm(activeProfile, false);
    showView(editorView, mainView);
});

backBtn.addEventListener('click', () => showView(mainView, editorView));
cancelEditBtn.addEventListener('click', () => showView(mainView, editorView));

saveProfileBtn.addEventListener('click', async () => {
    const profile = getProfileFromForm();
    const validationError = validateProfile(profile);
    if (validationError) { showStatus(validationError, 'error', 4200); return; }

    setLoading(saveProfileBtn, true);
    const existingIndex = currentProfiles.findIndex((item) => item.id === profile.id);
    const nextProfiles = [...currentProfiles];
    if (existingIndex >= 0) {
        nextProfiles[existingIndex] = profile;
    } else {
        if (nextProfiles.length >= MAX_PROFILES) {
            setLoading(saveProfileBtn, false);
            showStatus(`Maximum ${MAX_PROFILES} profiles allowed. Delete one first.`, 'error', 4000);
            return;
        }
        nextProfiles.unshift(profile);
    }

    const saved = await saveProfiles(nextProfiles, profile.id);
    setLoading(saveProfileBtn, false);
    if (!saved) return;

    showView(mainView, editorView);
    showStatus('Profile saved successfully.', 'success');
});

duplicateProfileBtn.addEventListener('click', () => {
    const profile = getProfileFromForm();
    profile.id = crypto.randomUUID();
    profile.profileName = `${profile.profileName || 'Profile'} Copy`;
    editingProfileId = null;
    loadProfileIntoForm(profile, true);
    showStatus('Duplicated into a new profile draft.', 'info');
});

deleteProfileBtn.addEventListener('click', async () => {
    if (!editingProfileId) { showStatus('This draft has not been saved yet.', 'info'); return; }

    const profileToDelete = currentProfiles.find(p => p.id === editingProfileId);
    const profileLabel = profileToDelete ? (profileToDelete.profileName || profileToDelete.fullName || 'this profile') : 'this profile';

    if (!confirm(`Delete "${profileLabel}"? This cannot be undone.`)) return;

    const remainingProfiles = currentProfiles.filter((p) => p.id !== editingProfileId);
    const nextActive = remainingProfiles[0]?.id || null;
    const saved = await saveProfiles(remainingProfiles, nextActive);
    if (!saved) return;

    showView(mainView, editorView);
    showStatus('Profile deleted.', 'success');
});

function updateToggleVisual() {
    const isLight = htmlEl.getAttribute('data-theme') === 'light';
    if (themeToggle) themeToggle.setAttribute('data-checked', isLight ? 'true' : 'false');
}

themeToggle.addEventListener('click', () => {
    const isLight = htmlEl.getAttribute('data-theme') === 'light';
    const nextTheme = isLight ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', nextTheme);
    chrome.storage.local.set({ theme: nextTheme });
    updateToggleVisual();
});

// ─── Init ─────────────────────────────────────────────────────────
async function initTheme() {
    const result = await new Promise(r => chrome.storage.local.get('theme', r));
    htmlEl.setAttribute('data-theme', result.theme || 'dark');
    updateToggleVisual();
}

document.addEventListener('DOMContentLoaded', async () => {
    await initTheme();
    await refreshProfiles();
    await refreshFieldCount();

    if (currentProfiles.length === 0) {
        showStatus('No profile yet. Create one to start filling forms faster.', 'info', 5000);
    }

    // Animate sections on editor load (intersection-based fade in)
    const sections = document.querySelectorAll('.form-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(sec => observer.observe(sec));

    // Live email swap detection
    const emailEl   = document.getElementById('email');
    const collegeEl = document.getElementById('collegeEmail');
    const swapBtn   = document.getElementById('swapEmailsBtn');

    function checkEmailSwapLive() {
        const profile = { email: emailEl?.value || '', collegeEmail: collegeEl?.value || '' };
        const result = detectEmailSwap(profile);
        const warning = document.getElementById('emailSwapWarning');
        if (!warning) return;

        if (result === 'swap' || result === 'personal-is-college' || result === 'college-is-personal') {
            warning.classList.remove('hidden');
            if (swapBtn) swapBtn.style.display = '';
        } else {
            warning.classList.add('hidden');
            if (swapBtn) swapBtn.style.display = 'none';
        }
    }

    if (emailEl)   emailEl.addEventListener('input', checkEmailSwapLive);
    if (collegeEl) collegeEl.addEventListener('input', checkEmailSwapLive);

    if (swapBtn) {
        swapBtn.addEventListener('click', () => {
            if (applyEmailSwapFix()) {
                checkEmailSwapLive();
                showStatus('✓ Emails swapped successfully.', 'success', 2400);
            }
        });
    }

    // Course "Other" toggle
    const courseSelectEl = document.getElementById('course');
    const courseOtherEl  = document.getElementById('courseOther');
    if (courseSelectEl && courseOtherEl) {
        courseSelectEl.addEventListener('change', () => {
            if (courseSelectEl.value === 'other') {
                courseOtherEl.classList.remove('hidden');
                courseOtherEl.focus();
            } else {
                courseOtherEl.classList.add('hidden');
                courseOtherEl.value = '';
            }
        });
    }
});
