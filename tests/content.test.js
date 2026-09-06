const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
    resolveSemanticIdentifier,
    matchField,
    isValueCompatible
} = require('../content.js');

const profile = {
    fullName: 'Hardik Khatri',
    firstName: 'Hardik',
    lastName: 'Khatri',
    email: 'hardik@example.com',
    phone: '8209992983',
    address: '12 Example Street',
    city: 'Jaipur',
    state: 'Rajasthan',
    zip: '302001',
    country: 'India',
    experience: 'Fresher'
};

function meta(overrides = {}) {
    return {
        tagName: 'input',
        role: '',
        type: 'text',
        name: '',
        id: '',
        value: '',
        placeholder: '',
        ariaLabel: '',
        autoComplete: '',
        inputMode: '',
        pattern: '',
        maxLength: 100,
        readOnly: false,
        label: '',
        nearbyText: '',
        options: [],
        ...overrides
    };
}

test('resolves vendor-prefixed and bracketed semantic identifiers', () => {
    assert.equal(resolveSemanticIdentifier('CandidateFirstName'), 'firstName');
    assert.equal(resolveSemanticIdentifier('CandidateLastName'), 'lastName');
    assert.equal(resolveSemanticIdentifier('applicant[first_name]'), 'firstName');
    assert.equal(resolveSemanticIdentifier('CandidateAddressPostcode'), 'zip');
    assert.equal(resolveSemanticIdentifier('CandidateAddressSuburb'), 'city');
});

test('semantic labels and multi-token autocomplete beat fuzzy ambiguity', () => {
    assert.equal(matchField(meta({
        name: 'r1',
        id: ':r1:',
        label: 'Candidate First Name',
        nearbyText: 'Candidate First Name'
    }), profile), 'firstName');

    assert.equal(matchField(meta({
        name: 'opaque-value',
        autoComplete: 'section-applicant shipping family-name'
    }), profile), 'lastName');
});

test('JobAdder fields map to the correct profile values', () => {
    const cases = [
        ['CandidateFirstName', 'First name', 'firstName'],
        ['CandidateLastName', 'Last name', 'lastName'],
        ['CandidateEmail', 'Email address', 'email'],
        ['CandidateMobile', 'Mobile number', 'phone'],
        ['CandidateAddressLine1', 'Street Address', 'address'],
        ['CandidateAddressPostcode', 'Zip Code', 'zip'],
        ['CandidateAddressSuburb', 'City', 'city'],
        ['CandidateAddressCountry', '', 'country']
    ];

    for (const [name, placeholder, expected] of cases) {
        assert.equal(matchField(meta({ name, id: name, placeholder }), profile), expected, name);
    }
});

test('the captured JobAdder fixture keeps every supported identifier distinct', () => {
    const html = fs.readFileSync(path.join(__dirname, 'fixtures', 'jobadder.html'), 'utf8');
    const identifiers = [...html.matchAll(/<(?:input|select)\b[^>]*\bname="([^"]+)"[^>]*>/gi)]
        .map(match => match[1]);
    const expected = {
        CandidateFirstName: 'firstName',
        CandidateLastName: 'lastName',
        CandidateEmail: 'email',
        CandidateMobile: 'phone',
        CandidateAddressLine1: 'address',
        CandidateAddressPostcode: 'zip',
        CandidateAddressSuburb: 'city',
        CandidateAddressCountry: 'country'
    };

    for (const [identifier, key] of Object.entries(expected)) {
        assert.ok(identifiers.includes(identifier), `${identifier} missing from fixture`);
        assert.equal(resolveSemanticIdentifier(identifier), key);
    }
    assert.equal(resolveSemanticIdentifier('CandidateAddressLine2'), null);
});

test('an Email label elsewhere in the form cannot contaminate other fields', () => {
    const leakedFormText = 'First Name Last Name Email Mobile Street Address Zip Code City Country';
    assert.equal(matchField(meta({
        name: 'CandidateFirstName',
        label: 'First Name',
        placeholder: 'First name',
        nearbyText: leakedFormText
    }), profile), 'firstName');

    assert.equal(matchField(meta({
        name: 'unrecognized_control_42',
        label: 'Barangay',
        nearbyText: leakedFormText
    }), profile), null);
});

test('unsupported secondary contact and address fields are left untouched', () => {
    assert.equal(matchField(meta({
        name: 'CandidatePhone',
        label: 'Secondary Mobile',
        placeholder: 'Secondary Mobile'
    }), profile), null);

    assert.equal(matchField(meta({
        name: 'CandidateAddressLine2',
        label: 'Barangay'
    }), profile), null);
});

test('value compatibility is a final barrier against destructive mismatches', () => {
    const phoneMeta = meta({ name: 'CandidateMobile', label: 'Mobile', maxLength: 50 });
    const zipMeta = meta({ name: 'CandidateAddressPostcode', label: 'Zip Code', maxLength: 20 });
    const firstNameMeta = meta({ name: 'CandidateFirstName', label: 'First Name', maxLength: 50 });

    assert.equal(isValueCompatible(phoneMeta, 'phone', profile.phone), true);
    assert.equal(isValueCompatible(phoneMeta, 'phone', profile.email), false);
    assert.equal(isValueCompatible(zipMeta, 'zip', profile.email), false);
    assert.equal(isValueCompatible(firstNameMeta, 'firstName', profile.email), false);
});

test('HTML constraints reject incompatible values instead of truncating them', () => {
    assert.equal(isValueCompatible(meta({ type: 'number', inputMode: 'numeric' }), 'experience', 'Fresher'), false);
    assert.equal(isValueCompatible(meta({ pattern: '\\d{6}', maxLength: 6 }), 'zip', '302001'), true);
    assert.equal(isValueCompatible(meta({ pattern: '\\d{6}', maxLength: 6 }), 'zip', '3020017'), false);
});
