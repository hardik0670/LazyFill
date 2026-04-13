chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    switch (request.action) {
        case 'getProfileState':
        case 'getProfiles':
            chrome.storage.local.get(['profiles', 'activeProfileId', 'userProfile'], (result) => {
                migrateLegacyProfileIfNeeded(result, (migrated) => {
                    sendResponse(migrated);
                });
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

// Migrates legacy single-profile storage to the multi-profile format.
// Only runs when no profiles array exists yet. Deletes the legacy key after migration.
// Accepts a callback so the response path is always async-safe.
function migrateLegacyProfileIfNeeded(result, callback) {
    const profiles = Array.isArray(result.profiles) ? result.profiles : [];

    // Already migrated — nothing to do.
    if (profiles.length > 0) {
        callback({
            profiles,
            activeProfileId: result.activeProfileId || profiles[0].id
        });
        return;
    }

    const legacyProfile = result.userProfile;
    if (legacyProfile && Object.keys(legacyProfile).length > 0) {
        const migratedProfile = {
            id: crypto.randomUUID(),
            profileName: legacyProfile.profileName || legacyProfile.fullName || 'Imported Profile',
            ...legacyProfile,
            fullName: legacyProfile.fullName || `${legacyProfile.firstName || ''} ${legacyProfile.lastName || ''}`.trim()
        };

        // Persist new format and remove legacy key in one pass.
        chrome.storage.local.set(
            { profiles: [migratedProfile], activeProfileId: migratedProfile.id },
            () => {
                chrome.storage.local.remove('userProfile');
                callback({
                    profiles: [migratedProfile],
                    activeProfileId: migratedProfile.id
                });
            }
        );
        return;
    }

    // No legacy data — fresh install.
    callback({ profiles: [], activeProfileId: null });
}
