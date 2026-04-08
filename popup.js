const mainView = document.getElementById('mainView');
const editorView = document.getElementById('editorView');
const fillFormBtn = document.getElementById('fillFormBtn');
const scanBtn = document.getElementById('scanBtn');
const editProfileBtn = document.getElementById('editProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const backBtn = document.getElementById('backBtn');
const newProfileBtn = document.getElementById('newProfileBtn');
const duplicateProfileBtn = document.getElementById('duplicateProfileBtn');
const deleteProfileBtn = document.getElementById('deleteProfileBtn');
const fieldCountNum = document.getElementById('fieldCountNum');
const fieldCountBadge = document.getElementById('fieldCountBadge');
const profileSelect = document.getElementById('profileSelect');
const profileSummary = document.getElementById('profileSummary');
const completionStat = document.getElementById('completionStat');
const completionBar = document.getElementById('completionBar');
const fieldReadyStat = document.getElementById('fieldReadyStat');
const profileNameInput = document.getElementById('profileName');
const editorSubtitle = document.getElementById('editorSubtitle');
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

// All banner elements (both views) - fixed: use class query not ID-only
const statusBanners = Array.from(document.querySelectorAll('.status-banner'));

const PROFILE_FIELDS = [
    'profileName',
    'fullName', 'firstName', 'middleName', 'lastName', 'gender', 'dateOfBirth', 'age', 'nationality', 'bloodGroup', 'skillLevel',
    'qualification', 'course', 'currentYear', 'currentCgpa', 'currentBacklogs', 'passiveBacklogs', 'collegeName', 'specialization', 'branch', 'collegeEmail', 'sapId', 'education', 'subject', 'interestedDomain', 'researchInterestArea',
    'internshipProgram', 'duration', 'country', 'locationPreference1', 'locationPreference2', 'experience', 'company', 'referralSource', 'aboutMe',
    'email', 'phone', 'whatsappNumber',
    'githubLink', 'linkedinLink', 'websiteLink', 'twitterLink',
    'address', 'city', 'state', 'zip'
];

const REQUIRED_HINT_FIELDS = ['fullName', 'email', 'phone', 'qualification', 'collegeName', 'internshipProgram'];

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
        profileSummary.textContent = 'Create your first profile to start filling forms.';
        completionStat.textContent = '0%';
        completionBar.style.width = '0%';
        fieldReadyStat.textContent = '0';
        return;
    }

    const pct = getCompletion(profile);
    completionStat.textContent = `${pct}%`;
    completionBar.style.width = `${pct}%`;
    completionBar.className = 'stat-bar-fill' + (pct === 100 ? ' full' : pct >= 50 ? ' good' : '');
    fieldReadyStat.textContent = String(getFilledFieldCount(profile));

    const missingImportant = REQUIRED_HINT_FIELDS.filter((key) => !String(profile[key] || '').trim());
    if (missingImportant.length === 0) {
        profileSummary.textContent = `${getProfileLabel(profile, 0)} is ready for most student and internship forms.`;
    } else {
        profileSummary.textContent = `Missing ${missingImportant.length} recommended field${missingImportant.length > 1 ? 's' : ''} for stronger autofill.`;
    }
}

function renderProfileOptions() {
    profileSelect.innerHTML = '';

    if (currentProfiles.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No saved profiles';
        profileSelect.appendChild(option);
        profileSelect.disabled = true;
        refreshProfileSummary(null);
        return;
    }

    profileSelect.disabled = false;
    currentProfiles.forEach((profile, index) => {
        const option = document.createElement('option');
        option.value = profile.id;
        option.textContent = getProfileLabel(profile, index);
        if (profile.id === activeProfileId) option.selected = true;
        profileSelect.appendChild(option);
    });

    const activeProfile = currentProfiles.find((p) => p.id === activeProfileId) || currentProfiles[0];
    if (activeProfile && activeProfile.id !== activeProfileId) activeProfileId = activeProfile.id;
    refreshProfileSummary(activeProfile || null);
}

function loadProfileIntoForm(profile, isDraft = false) {
    const safeProfile = profile || createEmptyProfile();
    PROFILE_FIELDS.forEach((key) => {
        const el = document.getElementById(key);
        if (el) el.value = safeProfile[key] || '';
    });
    profileNameInput.value = safeProfile.profileName || '';
    editorSubtitle.textContent = isDraft
        ? 'Create accurate saved profiles for certificates and internship forms.'
        : 'Update this saved profile and keep your data organized.';
    editingProfileId = isDraft ? null : (safeProfile.id || null);
}

function getProfileFromForm() {
    const profile = createEmptyProfile();
    profile.id = editingProfileId || crypto.randomUUID();

    PROFILE_FIELDS.forEach((key) => {
        const el = document.getElementById(key);
        const value = el ? el.value.trim() : '';
        profile[key] = value;
    });

    if (!profile.fullName && (profile.firstName || profile.lastName)) {
        const parts = [profile.firstName, profile.middleName, profile.lastName].filter(Boolean);
        profile.fullName = parts.join(' ').trim();
    }

    if (!profile.profileName) {
        profile.profileName = profile.fullName || profile.internshipProgram || 'Untitled Profile';
    }

    return profile;
}

// ─── Validation ───────────────────────────────────────────────────
function validateProfile(profile) {
    if (!profile.profileName) return 'Profile name is required.';
    if (!profile.fullName) return 'Full name is required so certificate forms can be filled accurately.';

    if (profile.phone) {
        // Accept 10-digit (India) or E.164 international formats
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
        return 'Primary email looks invalid.';
    }

    if (profile.collegeEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.collegeEmail)) {
        return 'College email looks invalid.';
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

    const response = await sendToContent(tab.id, { action: 'getFormFields' });
    if (!response || !response.success) {
        fieldCountNum.textContent = '?';
        fieldCountBadge.dataset.state = '';
        return;
    }

    animateCounter(fieldCountNum, response.count);
    fieldCountBadge.dataset.state = response.count > 0 ? 'ok' : 'none';
}

// Animate a number counter for the field count badge
function animateCounter(el, target) {
    const start = parseInt(el.textContent) || 0;
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
    const activeProfile = currentProfiles.find((p) => p.id === activeProfileId) || createEmptyProfile();
    loadProfileIntoForm(activeProfile, false);
    showView(editorView, mainView);
});

newProfileBtn.addEventListener('click', () => {
    const profile = createEmptyProfile(`Profile ${currentProfiles.length + 1}`);
    editingProfileId = null;
    loadProfileIntoForm(profile, true);
    showView(editorView, mainView);
});

profileSelect.addEventListener('change', async (event) => {
    const nextId = event.target.value;
    activeProfileId = nextId;
    const activeProfile = currentProfiles.find((p) => p.id === activeProfileId) || null;
    refreshProfileSummary(activeProfile);
    await sendRuntime({ action: 'setActiveProfile', activeProfileId: nextId });
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
    if (existingIndex >= 0) { nextProfiles[existingIndex] = profile; }
    else { nextProfiles.unshift(profile); }

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

    const remainingProfiles = currentProfiles.filter((p) => p.id !== editingProfileId);
    const nextActive = remainingProfiles[0]?.id || null;
    const saved = await saveProfiles(remainingProfiles, nextActive);
    if (!saved) return;

    showView(mainView, editorView);
    showStatus('Profile deleted.', 'success');
});

themeToggle.addEventListener('click', () => {
    const isLight = htmlEl.getAttribute('data-theme') === 'light';
    const nextTheme = isLight ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', nextTheme);
    chrome.storage.local.set({ theme: nextTheme });
});

// ─── Init ─────────────────────────────────────────────────────────
async function initTheme() {
    const result = await new Promise(r => chrome.storage.local.get('theme', r));
    htmlEl.setAttribute('data-theme', result.theme || 'dark');
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
});
