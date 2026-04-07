chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    switch (request.action) {
        case 'getProfileState':
        case 'getProfiles':
            chrome.storage.local.get(['profiles', 'activeProfileId', 'userProfile'], (result) => {
                const migrated = migrateLegacyProfile(result);
                sendResponse(migrated);
            });
            return true;

        case 'saveProfiles':
            chrome.storage.local.set({
                profiles: request.profiles || [],
                activeProfileId: request.activeProfileId || request.profiles?.[0]?.id || null
            }, () => {
                sendResponse({
                    success: !chrome.runtime.lastError,
                    profiles: request.profiles || [],
                    activeProfileId: request.activeProfileId || request.profiles?.[0]?.id || null
                });
            });
            return true;

        case 'setActiveProfile':
            chrome.storage.local.set({ activeProfileId: request.activeProfileId || null }, () => {
                sendResponse({ success: !chrome.runtime.lastError, activeProfileId: request.activeProfileId || null });
            });
            return true;
    }
});

function migrateLegacyProfile(result) {
    const profiles = Array.isArray(result.profiles) ? result.profiles : [];
    if (profiles.length > 0) {
        return {
            profiles,
            activeProfileId: result.activeProfileId || profiles[0].id
        };
    }

    const legacyProfile = result.userProfile;
    if (legacyProfile && Object.keys(legacyProfile).length > 0) {
        const migratedProfile = {
            id: crypto.randomUUID(),
            profileName: legacyProfile.profileName || legacyProfile.fullName || 'Imported Profile',
            ...legacyProfile,
            fullName: legacyProfile.fullName || `${legacyProfile.firstName || ''} ${legacyProfile.lastName || ''}`.trim()
        };

        chrome.storage.local.set({
            profiles: [migratedProfile],
            activeProfileId: migratedProfile.id
        });

        return {
            profiles: [migratedProfile],
            activeProfileId: migratedProfile.id
        };
    }

    return { profiles: [], activeProfileId: null };
}
