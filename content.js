const FIELD_MAPPING = {
    profileName: ['profile'],
    fullName: ['full name', 'certificate name', 'name on certificate', 'student name', 'candidate name', 'applicant name', 'name'],
    firstName: ['first name', 'fname', 'given name', 'given'],
    lastName: ['last name', 'lname', 'surname', 'family name'],
    gender: ['gender', 'sex'],
    qualification: ['qualification', 'degree', 'course', 'program', 'education level'],
    currentYear: ['current year', 'year of study', 'academic year', 'semester', 'year'],
    collegeName: ['college', 'university', 'institute', 'institution', 'school', 'org'],
    internshipProgram: ['internship program', 'internship', 'program applied', 'training program', 'position'],
    duration: ['duration', 'internship duration', 'training duration', 'period'],
    country: ['country', 'nation', 'location'],
    skillLevel: ['skill level', 'proficiency', 'experience level'],
    email: ['email', 'e-mail', 'mail', 'email address'],
    collegeEmail: ['college email', 'institutional email', 'university email'],
    phone: ['phone', 'contact number', 'mobile', 'telephone', 'tel', 'contact', 'whatsapp number', 'phone number'],
    whatsappNumber: ['whatsapp', 'whatsapp number', 'wa number'],
    githubLink: ['github', 'github link', 'github profile', 'portfolio'],
    linkedinLink: ['linkedin', 'linkedin profile', 'linkedin url', 'linkedin link'],
    sapId: ['sap id', 'sap', 'student id', 'registration id', 'roll number', 'id number'],
    specialization: ['specialization', 'specialisation', 'major', 'focus area', 'field of study'],
    branch: ['branch', 'department', 'stream'],
    address: ['address', 'street', 'address line', 'line1', 'mailing address'],
    city: ['city', 'town'],
    state: ['state', 'province', 'region'],
    zip: ['zip', 'postal code', 'postcode', 'pin code'],
    company: ['company', 'organization', 'organisation', 'employer'],
    experience: ['experience', 'work experience', 'prior experience', 'years of experience'],
    education: ['education', 'educational qualification', 'academic background']
};

const SKIP_PATTERNS = [
    'password', 'pwd', 'captcha', 'otp', 'token',
    'csrf', 'recaptcha', 'verification', 'confirm', 'search'
];

function normalize(text) {
    return String(text || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function collapse(text) {
    return normalize(text).replace(/\s+/g, '');
}

function getProfileValue(profile, key) {
    if (key === 'fullName' && !profile.fullName) {
        return `${profile.firstName || ''} ${profile.lastName || ''}`.trim();
    }
    if (key === 'whatsappNumber' && !profile.whatsappNumber) {
        return profile.phone || '';
    }
    return profile[key];
}

function getLabelText(el) {
    if (el.id) {
        const label = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
        if (label) return label.textContent.trim();
    }

    const ariaLabelledBy = el.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
        const ids = ariaLabelledBy.split(/\s+/);
        let combinedText = '';
        ids.forEach(id => {
            const labelEl = document.getElementById(id);
            if (labelEl) combinedText += ' ' + labelEl.textContent.trim();
        });
        if (combinedText.trim()) return combinedText.trim();
    }

    const wrappingLabel = el.closest('label');
    if (wrappingLabel) return wrappingLabel.textContent.trim();

    return '';
}

function getNearbyText(el) {
    const texts = [];
    const fieldset = el.closest('fieldset');
    if (fieldset) {
        const legend = fieldset.querySelector('legend');
        if (legend) texts.push(legend.textContent.trim());
    }

    // Search up to 8 levels for a container that might have heading-like text
    let current = el.parentElement;
    let levels = 0;
    while (current && levels < 8) {
        // Look for common label classes or roles
        const labels = current.querySelectorAll('label, .label, .form-label, .input-label, [role="heading"], strong, b');
        labels.forEach(label => {
            const text = label.textContent.trim();
            if (text && text.length < 100) texts.push(text);
        });

        // Special check for Google Forms item container
        if (current.getAttribute('role') === 'listitem' || current.classList.contains('geS5n')) {
            const content = current.textContent.trim();
            // Only take the first chunk of text as the label
            if (content) texts.push(content.substring(0, 50));
            break;
        }

        current = current.parentElement;
        levels++;
    }

    return [...new Set(texts)].filter(Boolean).join(' ');
}

function extractMeta(el) {
    const tagName = el.tagName.toLowerCase();
    const options = tagName === 'select'
        ? Array.from(el.options).map((option) => option.textContent.trim()).filter(Boolean)
        : [];

    return {
        element: el,
        tagName,
        type: (el.getAttribute('type') || tagName).toLowerCase(),
        name: el.name || '',
        id: el.id || '',
        placeholder: el.getAttribute('placeholder') || '',
        ariaLabel: el.getAttribute('aria-label') || '',
        autoComplete: el.getAttribute('autocomplete') || '',
        label: getLabelText(el),
        nearbyText: getNearbyText(el),
        options
    };
}

function shouldSkip(meta) {
    const combined = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel].join(' ').toLowerCase();
    return SKIP_PATTERNS.some((pattern) => combined.includes(pattern));
}

function isVisible(el) {
    return el.offsetParent !== null && !el.disabled && el.type !== 'hidden';
}

function detectFields() {
    const selector = [
        'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not([type="file"])',
        'textarea',
        'select'
    ].join(',');

    return Array.from(document.querySelectorAll(selector))
        .filter((el) => isVisible(el))
        .filter((el) => !(el.value && el.value.length > 3 && el.tagName !== 'SELECT'))
        .map((el) => extractMeta(el));
}

function scoreMatch(meta, profileKey) {
    const sources = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel, meta.autoComplete, meta.nearbyText].filter(Boolean);
    const aliases = FIELD_MAPPING[profileKey] || [];
    const aliasTokens = aliases.map(collapse);
    const keyToken = collapse(profileKey);
    let score = 0;

    for (const source of sources) {
        const normalized = collapse(source);
        if (!normalized) continue;

        if (normalized === keyToken) score += 120;
        if (normalized.includes(keyToken)) score += 65;

        for (const aliasToken of aliasTokens) {
            if (normalized === aliasToken) score += 120;
            else if (normalized.includes(aliasToken)) score += 70;
        }
    }

    if (profileKey === 'collegeEmail' && /college|university|institution/i.test(meta.label + meta.placeholder + meta.name + meta.id)) {
        score += 35;
    }
    if (profileKey === 'githubLink' && /github|portfolio/i.test(meta.label + meta.placeholder + meta.name + meta.id)) {
        score += 35;
    }
    if (profileKey === 'linkedinLink' && /linkedin/i.test(meta.label + meta.placeholder + meta.name + meta.id)) {
        score += 45;
    }
    if (profileKey === 'phone' && meta.type === 'tel') score += 20;
    if (profileKey === 'email' && meta.type === 'email') score += 20;
    if (profileKey === 'gender' && (meta.type === 'radio' || meta.tagName === 'select')) score += 25;

    return score;
}

function matchField(meta, profile) {
    let bestKey = null;
    let bestScore = 45;

    for (const key of Object.keys(profile)) {
        const value = getProfileValue(profile, key);
        if (!String(value || '').trim()) continue;
        const score = scoreMatch(meta, key);
        if (score > bestScore) {
            bestScore = score;
            bestKey = key;
        }
    }

    return bestKey;
}

function setNativeValue(el, value) {
    const prototype = Object.getPrototypeOf(el);
    const descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
    if (descriptor && descriptor.set) {
        descriptor.set.call(el, value);
    } else {
        el.value = value;
    }
}

function findSelectOption(el, value) {
    const normalizedValue = collapse(value);
    return Array.from(el.options).find((option) => {
        return collapse(option.value) === normalizedValue || collapse(option.textContent) === normalizedValue;
    });
}

function fillSelect(el, value) {
    const matchedOption = findSelectOption(el, value);
    if (!matchedOption) return false;
    el.value = matchedOption.value;
    return true;
}

function fillRadio(el, value) {
    const radios = document.querySelectorAll(`input[type="radio"][name="${CSS.escape(el.name)}"]`);
    const target = Array.from(radios).find((radio) => {
        const meta = extractMeta(radio);
        const candidates = [radio.value, meta.label, meta.nearbyText, meta.ariaLabel].map(collapse);
        return candidates.includes(collapse(value));
    });

    if (!target) return false;
    target.checked = true;
    target.dispatchEvent(new Event('input', { bubbles: true }));
    target.dispatchEvent(new Event('change', { bubbles: true }));
    return true;
}

function fillElement(el, meta, value) {
    if (!el || value === undefined || value === null || value === '') return false;

    try {
        if (meta.tagName === 'select') {
            if (!fillSelect(el, value)) return false;
        } else if (meta.type === 'radio') {
            return fillRadio(el, value);
        } else if (meta.type === 'checkbox') {
            el.checked = Boolean(value);
        } else {
            setNativeValue(el, value);
        }

        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
        el.dispatchEvent(new Event('blur', { bubbles: true }));
        return true;
    } catch (_error) {
        return false;
    }
}

function autoFill(profile) {
    const fields = detectFields();
    let filledCount = 0;

    fields.forEach((meta) => {
        if (shouldSkip(meta)) return;
        const profileKey = matchField(meta, profile);
        if (!profileKey) return;

        const value = getProfileValue(profile, profileKey);
        if (fillElement(meta.element, meta, value)) {
            filledCount += 1;
        }
    });

    return { success: true, filledCount, totalFields: fields.length };
}

chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    switch (request.action) {
        case 'autoFill':
            sendResponse(autoFill(request.userProfile || {}));
            break;

        case 'getFormFields': {
            const fields = detectFields();
            sendResponse({
                success: true,
                count: fields.length,
                fields: fields.map((field) => ({
                    type: field.type,
                    name: field.name,
                    id: field.id,
                    placeholder: field.placeholder,
                    label: field.label
                }))
            });
            break;
        }

        case 'highlightFields': {
            const fields = detectFields();
            fields.forEach((field) => {
                field.element.classList.add('qf-field-highlight');
                setTimeout(() => field.element.classList.remove('qf-field-highlight'), 2000);
            });
            sendResponse({ success: true, highlighted: fields.length });
            break;
        }
    }

    return true;
});
