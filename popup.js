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
const statusBanners = Array.from(document.querySelectorAll('.status-banner'));
const fieldCountNum = document.getElementById('fieldCountNum');
const fieldCountBadge = document.getElementById('fieldCountBadge');
const profileSelect = document.getElementById('profileSelect');
const profileSummary = document.getElementById('profileSummary');
const completionStat = document.getElementById('completionStat');
const fieldReadyStat = document.getElementById('fieldReadyStat');
const profileNameInput = document.getElementById('profileName');
const editorSubtitle = document.getElementById('editorSubtitle');
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

const PROFILE_FIELDS = [
    'profileName',
    'fullName', 'firstName', 'lastName', 'gender', 'skillLevel',
    'qualification', 'currentYear', 'collegeName', 'specialization', 'branch', 'collegeEmail', 'sapId', 'education',
    'internshipProgram', 'duration', 'country', 'experience', 'company',
    'email', 'phone', 'whatsappNumber', 'githubLink', 'linkedinLink',
    'address', 'city', 'state', 'zip'
];

const REQUIRED_HINT_FIELDS = ['fullName', 'email', 'phone', 'qualification', 'collegeName', 'internshipProgram'];

let statusTimer = null;
let currentProfiles = [];
let activeProfileId = null;
let editingProfileId = null;

function showStatus(message, type = 'info', duration = 3200) {
    clearTimeout(statusTimer);

    statusBanners.forEach((banner) => {
        banner.textContent = message;
        banner.className = `status-banner ${type}`;
    });

    statusTimer = setTimeout(() => {
        statusBanners.forEach((banner) => {
            banner.className = 'status-banner hidden';
        });
    }, duration);
}

function showView(show, hide) {
    hide.classList.add('hidden');
    show.classList.remove('hidden');
    show.style.animation = 'none';
    requestAnimationFrame(() => {
        show.style.animation = '';
    });
}

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
            if (chrome.runtime.lastError) {
                resolve(null);
                return;
            }
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

function createEmptyProfile(name = 'New Profile') {
    return {
        id: crypto.randomUUID(),
        profileName: name,
        fullName: '',
        firstName: '',
        lastName: '',
        gender: '',
        skillLevel: '',
        qualification: '',
        currentYear: '',
        collegeName: '',
        specialization: '',
        branch: '',
        collegeEmail: '',
        sapId: '',
        education: '',
        internshipProgram: '',
        duration: '',
        country: '',
        experience: '',
        company: '',
        email: '',
        phone: '',
        whatsappNumber: '',
        githubLink: '',
        linkedinLink: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    };
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
        fieldReadyStat.textContent = '0';
        return;
    }

    completionStat.textContent = `${getCompletion(profile)}%`;
    fieldReadyStat.textContent = String(getFilledFieldCount(profile));

    const missingImportant = REQUIRED_HINT_FIELDS.filter((key) => !String(profile[key] || '').trim());
    if (missingImportant.length === 0) {
        profileSummary.textContent = `${getProfileLabel(profile, 0)} is ready for most student and internship forms.`;
    } else {
        profileSummary.textContent = `Missing ${missingImportant.length} recommended field${missingImportant.length > 1 ? 's' : ''} for stronger autofill accuracy.`;
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

    const activeProfile = currentProfiles.find((profile) => profile.id === activeProfileId) || currentProfiles[0];
    if (activeProfile && activeProfile.id !== activeProfileId) {
        activeProfileId = activeProfile.id;
    }
    refreshProfileSummary(activeProfile || null);
}

function loadProfileIntoForm(profile, isDraft = false) {
    const safeProfile = profile || createEmptyProfile();
    PROFILE_FIELDS.forEach((key) => {
        const el = document.getElementById(key);
        if (el) el.value = safeProfile[key] || '';
    });

    profileNameInput.value = safeProfile.profileName || '';
    editorSubtitle.textContent = isDraft ? 'Create accurate saved profiles for certificates and internship forms.' : 'Update this saved profile and keep your internship data organized.';
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
        profile.fullName = `${profile.firstName} ${profile.lastName}`.trim();
    }

    if (!profile.profileName) {
        profile.profileName = profile.fullName || profile.internshipProgram || 'Untitled Profile';
    }

    return profile;
}

function validateProfile(profile) {
    if (!profile.profileName) {
        return 'Profile name is required.';
    }

    if (!profile.fullName) {
        return 'Full name is required so certificate forms can be filled accurately.';
    }

    if (profile.phone && !/^\d{10}$/.test(profile.phone)) {
        return 'Contact number must be exactly 10 digits.';
    }

    if (profile.whatsappNumber && !/^\d{10}$/.test(profile.whatsappNumber)) {
        return 'WhatsApp number must be exactly 10 digits.';
    }

    if (profile.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
        return 'Primary email looks invalid.';
    }

    if (profile.collegeEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.collegeEmail)) {
        return 'College email looks invalid.';
    }

    if (profile.githubLink) {
        const normalized = profile.githubLink.toLowerCase();
        const isAllowed = normalized === 'na' || /^https?:\/\/(www\.)?github\.com\/.+/.test(normalized);
        if (!isAllowed) {
            return 'GitHub link must be a GitHub URL or NA.';
        }
    }

    if (profile.linkedinLink) {
        const normalized = profile.linkedinLink.toLowerCase();
        if (!/^https?:\/\/(www\.)?linkedin\.com\/.+/.test(normalized)) {
            return 'LinkedIn link must be a valid LinkedIn URL.';
        }
    }

    return null;
}

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

    fieldCountNum.textContent = response.count;
    fieldCountBadge.dataset.state = response.count > 0 ? 'ok' : 'none';
}

fillFormBtn.addEventListener('click', async () => {
    const tab = await getActiveTab();
    if (!tab) {
        showStatus('No active tab found.', 'error');
        return;
    }

    const activeProfile = currentProfiles.find((profile) => profile.id === activeProfileId);
    if (!activeProfile) {
        showStatus('No profile saved yet. Create one first.', 'info', 4000);
        return;
    }

    const response = await sendToContent(tab.id, { action: 'autoFill', userProfile: activeProfile });
    if (!response) {
        showStatus('Could not reach the page. Try reloading it.', 'error');
        return;
    }

    if (response.filledCount > 0) {
        showStatus(`Filled ${response.filledCount} field${response.filledCount > 1 ? 's' : ''}.`, 'success');
        refreshFieldCount();
    } else {
        showStatus('No matching fields were found for this profile on the current page.', 'info', 4200);
    }
});

scanBtn.addEventListener('click', async () => {
    const tab = await getActiveTab();
    if (!tab) {
        showStatus('No active tab found.', 'error');
        return;
    }

    const response = await sendToContent(tab.id, { action: 'getFormFields' });
    if (!response) {
        showStatus('Could not reach the page. Try reloading it.', 'error');
        return;
    }

    fieldCountNum.textContent = response.count;
    fieldCountBadge.dataset.state = response.count > 0 ? 'ok' : 'none';
    showStatus(
        response.count > 0
            ? `Found ${response.count} fillable field${response.count > 1 ? 's' : ''} on this page.`
            : 'No fillable fields detected on this page.',
        response.count > 0 ? 'success' : 'info'
    );
});

editProfileBtn.addEventListener('click', () => {
    const activeProfile = currentProfiles.find((profile) => profile.id === activeProfileId) || createEmptyProfile();
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
    const activeProfile = currentProfiles.find((profile) => profile.id === activeProfileId) || null;
    refreshProfileSummary(activeProfile);
    await sendRuntime({ action: 'setActiveProfile', activeProfileId: nextId });
});

backBtn.addEventListener('click', () => {
    showView(mainView, editorView);
});

cancelEditBtn.addEventListener('click', () => {
    showView(mainView, editorView);
});

saveProfileBtn.addEventListener('click', async () => {
    const profile = getProfileFromForm();
    const validationError = validateProfile(profile);
    if (validationError) {
        showStatus(validationError, 'error', 4200);
        return;
    }

    const existingIndex = currentProfiles.findIndex((item) => item.id === profile.id);
    const nextProfiles = [...currentProfiles];
    if (existingIndex >= 0) {
        nextProfiles[existingIndex] = profile;
    } else {
        nextProfiles.unshift(profile);
    }

    const saved = await saveProfiles(nextProfiles, profile.id);
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
    if (!editingProfileId) {
        showStatus('This draft has not been saved yet.', 'info');
        return;
    }

    const remainingProfiles = currentProfiles.filter((profile) => profile.id !== editingProfileId);
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

async function initTheme() {
    const result = await new Promise(r => chrome.storage.local.get('theme', r));
    const theme = result.theme || 'dark';
    htmlEl.setAttribute('data-theme', theme);
}

document.addEventListener('DOMContentLoaded', async () => {
    await initTheme();
    await refreshProfiles();
    await refreshFieldCount();

    if (currentProfiles.length === 0) {
        showStatus('No profile yet. Create one to start filling forms faster.', 'info', 5000);
    }
});
