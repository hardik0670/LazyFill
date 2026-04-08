const FIELD_MAPPING = {
    profileName: ['profile', 'profile name'],

    fullName: [
        'full name', 'fullname', 'certificate name', 'name on certificate', 'name as on certificate',
        'name as per certificate', 'name as per marksheet', 'name as in certificate',
        'student name', 'candidate name', 'applicant name', 'your name', 'complete name',
        'legal name', 'name', 'participant name', 'member name', 'user name', 'beneficiary name',
        'account holder name', 'name of student', 'name of applicant', 'name of candidate',
        'enter your name', 'enter full name', 'your full name', 'full name as per records',
        'name as per records', 'name as per id', 'name as per aadhar', 'name as per aadhaar',
        'name on id', 'name as registered', 'registered name', 'display name',
        'contact name', 'primary name', 'official name', 'attendee name', 'registrant name'
    ],

    firstName: [
        'first name', 'firstname', 'fname', 'given name', 'given', 'forename', 'first',
        'your first name', 'enter first name', 'first name only', 'first / given name',
        'first (given) name', 'personal name', 'christian name', 'name (first)'
    ],

    middleName: [
        'middle name', 'middlename', 'mname', 'middle initial', 'middle', 'second name',
        'father initial', 'initial', 'name (middle)'
    ],

    lastName: [
        'last name', 'lastname', 'lname', 'surname', 'family name', 'last',
        'your last name', 'enter last name', 'last name / surname', 'family / last name',
        'name (last)', 'name (surname)'
    ],

    gender: [
        'gender', 'sex', 'your gender', 'select gender', 'gender identity',
        'please select your gender', 'what is your gender', 'gender (male/female/other)',
        'male or female', 'gender selection'
    ],

    dateOfBirth: [
        'date of birth', 'dob', 'birth date', 'birthday', 'born on', 'birth day',
        'date of birth (dd/mm/yyyy)', 'date of birth (mm/dd/yyyy)', 'date of birth (yyyy-mm-dd)',
        'your date of birth', 'your birthday', 'birth date (dd/mm/yyyy)', 'd.o.b', 'd.o.b.',
        'date of birth as per certificate', 'date of birth as per records'
    ],

    age: [
        'age', 'your age', 'candidate age', 'current age', 'age (in years)',
        'age in years', 'how old are you', 'enter your age', 'applicant age'
    ],

    bloodGroup: [
        'blood group', 'blood type', 'blood', 'your blood group', 'blood grp',
        'blood group type', 'blood type/group', 'blood group (a+/b-/etc)'
    ],

    nationality: [
        'nationality', 'citizenship', 'national', 'your nationality', 'country of citizenship',
        'country of origin', 'citizen of', 'citizenship status', 'domicile'
    ],

    qualification: [
        'qualification', 'degree', 'program', 'education level', 'highest qualification',
        'highest degree', 'highest education', 'educational qualification', 'academic qualification',
        'current qualification', 'current degree', 'your qualification', 'your degree',
        'ongoing course', 'pursuing', 'pursuing degree', 'current program',
        'highest level of education', 'level of qualification', 'academic level',
        'degree level', 'degree type', 'what is your qualification', 'what degree'
    ],

    course: [
        'course', 'course name', 'degree course', 'your course', 'current course',
        'program', 'programme', 'your program', 'your programme', 'enrolled course',
        'enrolled in', 'studying', 'what course', 'what are you studying',
        'course of study', 'field of study', 'area of study', 'course pursuing',
        'course enrolled', 'course of enrollment', 'course enrolled in',
        'degree pursuing', 'pursuing course', 'ongoing program', 'academic program',
        'course/program', 'program/course', 'course & program', 'study program',
        'name of course', 'course title', 'course details', 'programme name',
        'which course', 'select course', 'your academic course',
        'ug course', 'pg course', 'ug program', 'pg program', 'ug degree', 'pg degree'
    ],

    currentYear: [
        'current year', 'year of study', 'academic year', 'semester', 'year',
        'your year', 'study year', 'year of course', 'course year', 'year of degree',
        'which year', 'select year', 'current semester', 'semester no', 'which semester',
        'year/semester', 'current year of study', 'academic semester', 'term',
        'academic term', 'year of college', 'year in college', 'study level',
        'year (1st/2nd/3rd/4th)', 'first year', 'second year', 'third year', 'fourth year',
        'final year', 'pass out year', 'graduation year', 'expected graduation year',
        'passing year', 'year of passing', 'year of graduation', 'batch', 'batch year'
    ],

    currentCgpa: [
        'current cgpa', 'cgpa', 'current c g p a', 'current gpa', 'gpa',
        'current score', 'current academic score', 'current aggregate', 'aggregate',
        'current grade point average', 'grade point average', 'cumulative grade point average',
        'cumulative gpa', 'cumulative cgpa', 'overall cgpa', 'overall gpa',
        'latest cgpa', 'latest gpa', 'present cgpa', 'present gpa',
        'cgpa till date', 'gpa till date', 'current academic performance',
        'overall academic performance', 'academic aggregate', 'academic score',
        'cgpa out of 10', 'cgpa out of 4', 'gpa out of 4', 'gpa out of 5'
    ],

    collegeName: [
        'college', 'college name', 'university', 'university name', 'institute',
        'institute name', 'institution', 'institution name', 'school', 'school name',
        'your college', 'your university', 'name of college', 'name of university',
        'name of institution', 'name of institute', 'college/university', 'university/college',
        'name of school', 'educational institution', 'current college', 'current university',
        'enrolled college', 'attending college', 'college attending', 'affiliated college',
        'affiliated university', 'academic institution', 'studying at', 'studying in',
        'college / institute', 'university / college', 'college or university'
    ],

    internshipProgram: [
        'internship program', 'internship', 'program applied', 'training program',
        'position', 'role', 'applied for', 'applying for', 'position applied',
        'position applied for', 'role applied for', 'internship applied', 'job role',
        'job title', 'designation', 'applied position', 'post applied for',
        'internship title', 'internship type', 'internship category', 'program name',
        'training title', 'training type', 'domain applied', 'field applied for',
        'applied domain', 'interested position', 'preferred role', 'applied role',
        'what position', 'what role', 'internship profile', 'work profile',
        'which internship', 'select internship', 'type of internship', 'nature of internship',
        'fellowship', 'volunteering', 'apprenticeship', 'traineeship'
    ],

    duration: [
        'duration', 'internship duration', 'training duration', 'period', 'internship period',
        'training period', 'duration of internship', 'duration of training',
        'how long', 'time period', 'length of internship', 'internship length',
        'number of weeks', 'number of months', 'weeks', 'months', 'program duration',
        'duration (in weeks)', 'duration (in months)', 'duration of program',
        'total duration', 'expected duration', 'preferred duration'
    ],

    country: [
        'country', 'nation', 'country name', 'your country', 'current country',
        'country of residence', 'residing country', 'country you live in',
        'select country', 'country of living', 'residence country', 'home country'
    ],

    locationPreference1: [
        'location preference 1', 'location preference 01', 'location preference one',
        'preferred location 1', 'preferred location one', 'preferred location first',
        'location choice 1', 'location choice one', 'location option 1',
        'first location preference', 'first preferred location', 'first location choice',
        'location priority 1', 'priority 1 location', '1st location preference',
        'preference 1 location', 'choice 1 location', 'location 1'
    ],

    locationPreference2: [
        'location preference 2', 'location preference 02', 'location preference two',
        'preferred location 2', 'preferred location two', 'preferred location second',
        'location choice 2', 'location choice two', 'location option 2',
        'second location preference', 'second preferred location', 'second location choice',
        'location priority 2', 'priority 2 location', '2nd location preference',
        'preference 2 location', 'choice 2 location', 'location 2'
    ],

    skillLevel: [
        'skill level', 'proficiency', 'experience level', 'expertise level',
        'proficiency level', 'your skill level', 'level of proficiency',
        'skill proficiency', 'level of expertise', 'technical level',
        'coding level', 'programming level', 'language proficiency',
        'expertise', 'skill set level', 'how skilled', 'your expertise'
    ],

    email: [
        'email', 'e-mail', 'e mail', 'mail', 'email address', 'email id',
        'personal email', 'personal mail', 'personal e-mail', 'personal e mail',
        'primary email', 'primary mail', 'your email', 'your e-mail', 'your mail',
        'email address (personal)', 'enter email', 'enter your email', 'email-id',
        'email / username', 'contact email', 'preferred email', 'active email',
        'registered email', 'alternate email', 'secondary email', 'email contact',
        'email (personal)', 'personal email id', 'personal email address',
        'gmail', 'gmail id', 'gmail address'
    ],

    collegeEmail: [
        'college email', 'college mail', 'college e-mail', 'college email id',
        'college email address', 'institutional email', 'university email',
        'university mail', 'institute email', 'institute mail', 'edu email',
        'edu mail', 'academic email', 'college id email', 'student email',
        'student mail', 'student email id', 'student email address',
        'official email', 'official mail', 'official email id',
        'college official email', 'university official email',
        'college registered email', 'institutional mail', 'your college email',
        'your institutional email', 'college/university email',
        'email id (college)', 'email (college)', 'email id (institutional)',
        'your college mail id', 'college email id (required)'
    ],

    phone: [
        'phone', 'phone number', 'contact number', 'contact no', 'contact no.',
        'mobile', 'mobile number', 'mobile no', 'mobile no.', 'mobile num',
        'telephone', 'tel', 'contact', 'cell', 'cell number', 'cell phone',
        'your phone', 'your mobile', 'your contact', 'your number',
        'phone no', 'phone no.', 'phno', 'ph no', 'ph. no',
        'enter phone', 'enter mobile', 'enter contact number',
        'phone (10 digits)', 'mobile (10 digits)', 'contact (10 digits)',
        'phone number (india)', 'mobile number (10 digit)',
        'alternate number', 'alternate mobile', 'alternate phone',
        'secondary number', 'secondary mobile', 'secondary phone',
        'emergency contact', 'emergency number', 'parent contact',
        'guardian contact', 'father contact', 'mother contact',
        'contact information', 'reach at', 'call at', 'reachable at'
    ],

    whatsappNumber: [
        'whatsapp', 'whatsapp number', 'wa number', 'whatsapp no', 'whatsapp no.',
        'whatsapp contact', 'whatsapp mobile', 'whatsapp phone',
        'your whatsapp number', 'whatsapp (if different)', 'wa no',
        'whatsapp number (if different from mobile)'
    ],

    githubLink: [
        'github', 'github link', 'github profile', 'github url', 'github account',
        'github username', 'github page', 'github profile link', 'github profile url',
        'your github', 'enter github', 'github id', 'github profile (url)',
        'github (optional)', 'github link (if any)', 'github link (optional)',
        'github repo', 'code repository', 'github (if any)'
    ],

    linkedinLink: [
        'linkedin', 'linkedin profile', 'linkedin url', 'linkedin link', 'linkedin id',
        'linkedin account', 'linkedin profile link', 'linkedin profile url',
        'your linkedin', 'enter linkedin', 'linkedin username', 'linked in',
        'linkedin (optional)', 'linkedin link (if any)', 'linkedin profile (url)',
        'linkedin (mandatory)', 'linkedin profile (required)', 'linkedin url*'
    ],

    websiteLink: [
        'website', 'portfolio', 'portfolio link', 'personal website', 'personal site',
        'portfolio url', 'website url', 'blog', 'blog url', 'blog link',
        'your website', 'your portfolio', 'portfolio website', 'personal portfolio',
        'portfolio / website', 'website / portfolio', 'personal blog',
        'portfolio (optional)', 'website link', 'your personal website',
        'web portfolio', 'personal webpage', 'online portfolio', 'digital portfolio'
    ],

    twitterLink: [
        'twitter', 'twitter profile', 'twitter url', 'twitter link', 'twitter handle',
        'twitter id', 'twitter username', 'x profile', 'x handle', 'x url',
        'twitter (optional)', 'twitter link (if any)', 'social media (twitter)',
        '@twitter', 'your twitter'
    ],

    sapId: [
        'sap id', 'sap', 'sap no', 'sap number', 'student id', 'student id number',
        'registration id', 'registration number', 'reg no', 'reg. no', 'reg number',
        'roll number', 'roll no', 'roll no.', 'rollno', 'enrollment number',
        'enrollment id', 'enrollment no', 'enroll no', 'enrolment number',
        'id number', 'id no', 'unique id', 'college id', 'university id',
        'student registration number', 'admission number', 'admission no',
        'hall ticket number', 'hall ticket no', 'exam roll no', 'seat number',
        'seat no', 'prn', 'prn number', 'prn no', 'permanent registration number',
        'student code', 'student ref', 'student reference number',
        'university roll no', 'college roll no', 'course roll number',
        'scholar number', 'scholar id', 'your id', 'enter id'
    ],

    specialization: [
        'specialization', 'specialisation', 'major', 'focus area', 'field of study',
        'area of specialization', 'area of specialisation', 'your specialization',
        'your major', 'branch specialization', 'course specialization',
        'stream specialization', 'technical specialization', 'core specialization',
        'subject specialization', 'specialization (if any)', 'specialization/major',
        'specialty', 'speciality', 'chosen specialization', 'selected specialization',
        'specialization in', 'specialized in', 'what is your specialization'
    ],

    branch: [
        'branch', 'department', 'stream', 'dept', 'your branch', 'your department',
        'your stream', 'course branch', 'branch name', 'department name',
        'stream name', 'current branch', 'branch of study', 'technical branch',
        'engineering branch', 'dept name', 'branch/department', 'department/branch',
        'branch/stream', 'stream/branch', 'which branch', 'what branch',
        'select branch', 'select department', 'select stream',
        'branch (cs/it/ec/me/ce/etc)', 'engineering stream'
    ],

    subject: [
        'subject', 'topic', 'course topic', 'training topic', 'module', 'domain',
        'your subject', 'preferred subject', 'area of interest', 'subject of interest',
        'interested subject', 'subject choice', 'topic of interest',
        'technical domain', 'domain choice', 'learning domain',
        'what domain', 'which domain', 'select domain', 'select topic'
    ],

    interestedDomain: [
        'interested in domain', 'preferred domain', 'domain of interest', 'interested domain',
        'area of interest', 'your area of interest', 'domain preference', 'domain interested',
        'interest area', 'which domain are you interested', 'what domain interests you',
        'choose domain', 'select domain of interest', 'domain you are interested in',
        'field of interest', 'technical field of interest', 'preferred field',
        'what are you interested in', 'your interest', 'area of expertise preferred',
        'career interest', 'technical interest', 'professional interest',
        'apply for domain', 'domain to work in', 'desired domain'
    ],

    researchInterestArea: [
        'research interest area', 'research interest', 'research interests', 'area of research interest',
        'research area', 'research areas', 'research domain', 'research domains',
        'area of interest in research', 'research focus', 'research focus area',
        'research specialization', 'research theme', 'research topic', 'research topics',
        'proposed research area', 'preferred research area', 'intended research area',
        'research field', 'fields of research', 'field of research', 'area of research',
        'research concentration', 'research preference', 'research line', 'research direction',
        'statement of research interest', 'research intent', 'interested research area'
    ],

    address: [
        'address', 'street', 'address line', 'address line 1', 'line1', 'line 1',
        'mailing address', 'street address', 'residential address', 'current address',
        'permanent address', 'home address', 'postal address', 'your address',
        'full address', 'complete address', 'address line1', 'addr',
        'house address', 'flat address', 'building address', 'locality address',
        'address (line 1)', 'address 1', 'address-1'
    ],

    city: [
        'city', 'town', 'city name', 'your city', 'current city', 'hometown',
        'place', 'district', 'locality', 'city/town', 'town/city',
        'city of residence', 'residing city', 'home city', 'native city',
        'select city', 'which city', 'city (current)'
    ],

    state: [
        'state', 'province', 'region', 'state name', 'your state', 'current state',
        'home state', 'native state', 'state of residence', 'residing state',
        'select state', 'which state', 'state/province', 'province/state',
        'state/ut', 'ut/state', 'state or union territory'
    ],

    zip: [
        'zip', 'postal code', 'postcode', 'pin code', 'pincode', 'zip code',
        'pin', 'area pin', 'zipcode', 'zip/postal', 'postal/zip',
        'area code', 'pin code (6 digits)', 'postal code (6 digits)',
        'your pin code', 'enter pin code', 'enter zip code'
    ],

    company: [
        'company', 'organization', 'organisation', 'employer', 'company name',
        'org name', 'organization name', 'organisation name', 'employer name',
        'current company', 'current employer', 'workplace', 'office',
        'place of work', 'work organization', 'company/organization',
        'firm', 'firm name', 'business name', 'enterprise name'
    ],

    experience: [
        'experience', 'work experience', 'prior experience', 'previous experience',
        'years of experience', 'total experience', 'experience (if any)',
        'relevant experience', 'industry experience', 'professional experience',
        'internship experience', 'past experience', 'any experience',
        'do you have experience', 'experience level', 'work history',
        'prior work experience', 'previous work experience', 'past work experience',
        'experience details', 'work experience details', 'your experience',
        'describe your experience', 'brief experience', 'experience summary',
        'technical experience', 'experience in', 'expertise experience',
        'prior internship', 'prior internship experience', 'previous internships',
        'internship history', 'have you interned before', 'previous roles',
        'previous job', 'previous position', 'prior job', 'work background',
        'employment history', 'career experience', 'experience (years)',
        'total work experience', 'overall experience',
        'experience (if any, else write na)', 'experience (months)',
        'experience (in years)', 'experience (in months)',
        'fresher or experienced', 'fresher/experienced', 'are you a fresher',
        'years of relevant experience', 'total years of experience', 'exp',
        'exp.', 'exp (in years)', 'work exp', 'work exp.',
        'experience (optional)', 'experience & skills',
        'share your experience', 'mention your experience',
        'relevant work experience', 'job experience', 'practical experience',
        'field experience', 'hands on experience', 'hands-on experience',
        'real world experience', 'project experience', 'prior projects',
        'previous projects', 'work done', 'background experience',
        'experience background', 'professional background'
    ],

    currentBacklogs: [
        'current backlogs', 'backlogs', 'any backlogs?', 'active back', 'do you have any current backlogs', 'any current backlogs',
        'do you have backlog', 'do you have any backlog', 'active backlogs',
        'pending backlogs', 'standing backlogs', 'academic backlog', 'academic backlogs',
        'current academic backlog', 'current academic backlogs', 'backlog status',
        'backlog', 'backlogs', 'number of backlogs', 'count of backlogs',
        'do you have any active backlogs', 'do you have any pending backlogs',
        'are there any backlogs', 'do you currently have backlogs',
        'current arrears', 'any arrears', 'have arrears', 'active arrears',
        'pending arrears', 'standing arrears', 'history of arrears',
        'current kt', 'any current kt', 'do you have current kt',
        'current supply', 'supplementary subjects', 'pending subjects'
    ],

    passiveBacklogs: [
        'past backlog', 'past backlogs', 'passive backlog', 'passive backlogs',
        'previous backlog', 'previous backlogs', 'history of backlog', 'history of backlogs',
        'backlog history', 'backlogs history', 'backlog record', 'past academic backlog',
        'past academic backlogs', 'previous academic backlog', 'previous academic backlogs',
        'do you have any past backlogs', 'do you have any passive backlogs',
        'have you ever had backlogs', 'did you have backlogs before',
        'any history of backlogs', 'cleared backlogs', 'cleared arrears',
        'history of arrears', 'past arrears', 'previous arrears', 'passive arrears',
        'arrears history', 'backlog active or passive', 'active or passive backlog',
        'active or passive backlogs', 'active/passive backlog', 'active/passive backlogs',
        'any active/passive backlog', 'any active/passive backlogs', 'Any active/passive back',
        'Any active/passive backlogs', 'Any backlogs((active or passive)?',
        'have you ever had arrears', 'past kt', 'history of kt'
    ],

    education: [
        'education', 'educational qualification', 'academic background',
        'academic qualification', 'educational background', 'academic details',
        'your education', 'education details', 'educational details',
        'educational history', 'academic history', 'schooling', 'academics'
    ],

    aboutMe: [
        'about', 'about me', 'about yourself', 'bio', 'biography', 'introduction',
        'tell us about yourself', 'brief about', 'self introduction', 'cover letter',
        'description', 'brief description', 'short bio', 'personal statement',
        'why should we select you', 'why do you want to join', 'motivation letter',
        'statement of purpose', 'sop', 'statement of interest', 'personal bio',
        'brief intro', 'write about yourself', 'describe yourself',
        'brief introduction', 'short introduction', 'personal description',
        'elevator pitch', 'summary', 'professional summary', 'objective',
        'career objective', 'your story', 'your background',
        'tell us something about yourself', 'share about yourself',
        'write a short bio', 'brief profile', 'self description',
        'who are you', 'introduce yourself', 'your profile summary'
    ],

    referralSource: [
        'how did you hear', 'referral', 'referred by', 'source', 'how did you find us',
        'how you heard', 'how did you know', 'how did you come to know',
        'where did you hear', 'from where did you hear', 'source of information',
        'how you came to know', 'reference', 'reference source', 'referral source',
        'how did you get to know', 'how did you learn about', 'discovery source',
        'referred through', 'found us through', 'how did you find out'
    ],
};

const SKIP_PATTERNS = [
    'password', 'pwd', 'captcha', 'otp', 'token',
    'csrf', 'recaptcha', 'verification', 'confirm', 'search',
    'coupon', 'promo', 'voucher', 'secret', 'security code',
    'repeat password', 'retype', 're-enter', 'confirm password'
];

// Expanded synonym sets for select/radio field matching
const CHOICE_SYNONYMS = {
    gender: {
        male: ['male', 'm', 'man', 'boy', 'gents', 'gentleman'],
        female: ['female', 'f', 'woman', 'girl', 'ladies', 'lady'],
        other: ['other', 'others', 'non-binary', 'nonbinary', 'prefer not to say', 'rather not say', 'transgender']
    },
    course: {
        btech: ['btech', 'b.tech', 'b tech', 'bachelor of technology', 'b.e', 'be', 'b.e.', 'bachelor of engineering'],
        mtech: ['mtech', 'm.tech', 'm tech', 'master of technology', 'm.e', 'me', 'master of engineering'],
        bca: ['bca', 'b.c.a', 'bachelor of computer applications', 'bachelor of computer application'],
        mca: ['mca', 'm.c.a', 'master of computer applications', 'master of computer application'],
        bsc: ['bsc', 'b.sc', 'b sc', 'b.sc.', 'bachelor of science'],
        msc: ['msc', 'm.sc', 'm sc', 'm.sc.', 'master of science'],
        bba: ['bba', 'b.b.a', 'bachelor of business administration'],
        mba: ['mba', 'm.b.a', 'master of business administration'],
        bcom: ['bcom', 'b.com', 'b com', 'bachelor of commerce'],
        mcom: ['mcom', 'm.com', 'm com', 'master of commerce'],
        ba: ['ba', 'b.a', 'b.a.', 'bachelor of arts'],
        ma: ['ma', 'm.a', 'm.a.', 'master of arts'],
        bpharm: ['bpharm', 'b.pharm', 'b.pharmacy', 'bachelor of pharmacy'],
        diploma: ['diploma', 'poly', 'polytechnic'],
        phd: ['phd', 'ph.d', 'ph.d.', 'doctorate', 'doctor of philosophy']
    },
    qualification: {
        btech: ['btech', 'b.tech', 'b tech', 'bachelor of technology', 'b.e', 'be'],
        mtech: ['mtech', 'm.tech', 'm tech', 'master of technology'],
        bca: ['bca', 'b.c.a', 'bachelor of computer applications'],
        mca: ['mca', 'm.c.a', 'master of computer applications'],
        bsc: ['bsc', 'b.sc', 'b sc', 'bachelor of science'],
        msc: ['msc', 'm.sc', 'm sc', 'master of science'],
        bba: ['bba', 'bachelor of business administration'],
        mba: ['mba', 'master of business administration'],
        diploma: ['diploma', 'polytechnic'],
        phd: ['phd', 'ph.d', 'doctorate']
    },
    specialization: {
        ccvt: ['ccvt'],
        csf: ['csf', 'cybersecurityandforensics', 'cybersecurity and forensics', 'cyber security and forensics', 'cyber security & forensics', 'cybersecurity forensics'],
        aiml: ['aiml', 'ai/ml', 'ai & ml', 'artificialintelligenceandmachinelearning', 'artificial intelligence and machine learning', 'ai and ml', 'artificial intelligence & machine learning'],
        iot: ['iot', 'internetofthings', 'internet of things', 'internet of thing'],
        fullstack: ['fullstack', 'full stack', 'full-stack', 'full stack development'],
        bigdata: ['bigdata', 'big data', 'big data analytics'],
        graphicsgaming: ['graphicsgaming', 'graphics & gaming', 'graphics and gaming', 'graphics gaming'],
        datascience: ['datascience', 'data science', 'ds'],
        cloudcomputing: ['cloudcomputing', 'cloud computing', 'cloud'],
        cybersecurity: ['cybersecurity', 'cyber security', 'information security'],
        blockchain: ['blockchain', 'block chain'],
        arvr: ['arvr', 'ar/vr', 'ar & vr', 'augmented reality', 'virtual reality']
    },
    branch: {
        cse: ['cse', 'cs', 'computer science', 'computer science and engineering', 'computer science & engineering'],
        it: ['it', 'information technology'],
        ece: ['ece', 'electronics and communication', 'electronics & communication', 'electronics and communication engineering'],
        ee: ['ee', 'electrical', 'electrical engineering', 'electrical and electronics', 'eee'],
        me: ['me', 'mechanical', 'mechanical engineering'],
        ce: ['ce', 'civil', 'civil engineering'],
        ae: ['ae', 'aerospace', 'aeronautical', 'aerospace engineering'],
        che: ['che', 'chemical', 'chemical engineering'],
        bio: ['bio', 'biotech', 'biotechnology', 'bioinformatics']
    },
    interestedDomain: {
        frontenddevelopment: ['frontenddevelopment', 'frontend development', 'front end development', 'frontend', 'front-end development', 'front-end', 'web frontend', 'ui development'],
        backenddevelopment: ['backenddevelopment', 'backend development', 'back end development', 'backend', 'back-end development', 'back-end', 'server side', 'server-side'],
        fullstackdevelopment: ['fullstackdevelopment', 'full stack development', 'fullstack', 'full-stack', 'full stack'],
        devops: ['devops', 'dev ops', 'devsecops', 'sre', 'site reliability'],
        uiuxdesigning: ['uiuxdesigning', 'ui/ux designing', 'ui ux designing', 'uiux', 'ui/ux', 'ui ux', 'ux design', 'ui design', 'user experience', 'user interface'],
        graphicdesigning: ['graphicdesigning', 'graphic designing', 'graphics designing', 'graphic design', 'graphics design'],
        videoediting: ['videoediting', 'video editing', 'video production'],
        datascience: ['datascience', 'data science', 'data analysis', 'data analytics', 'analytics'],
        machinelearning: ['machinelearning', 'machine learning', 'ml', 'deep learning', 'ai ml'],
        mobiledevelopment: ['mobiledevelopment', 'mobile development', 'android development', 'ios development', 'app development'],
        cybersecurity: ['cybersecurity', 'cyber security', 'information security', 'security'],
        cloudcomputing: ['cloudcomputing', 'cloud computing', 'cloud', 'aws', 'azure', 'gcp'],
        contentwriting: ['contentwriting', 'content writing', 'content creation', 'copywriting', 'blogging'],
        digitalmarketing: ['digitalmarketing', 'digital marketing', 'seo', 'social media marketing', 'marketing'],
        blockchain: ['blockchain', 'block chain', 'web3', 'crypto'],
        testing: ['testing', 'qa', 'quality assurance', 'software testing', 'manual testing', 'automation testing']
    },
    experience: {
        fresher: ['fresher', 'no experience', 'none', '0', 'zero', 'nil', 'no prior experience', 'no work experience', 'freshers', '0 years', 'no exp', 'na', 'n/a'],
        lessthan1: ['less than 1 year', '<1 year', '0-1 year', '0-1 years', 'below 1 year', 'under 1 year', '6 months', 'less than 6 months', '6months'],
        oneyear: ['1 year', '1 years', 'one year', '12 months', '1-2 years', '1 yr', '1yr'],
        twoyears: ['2 years', 'two years', '2-3 years', '2 yr', '2yr', '24 months'],
        threeyears: ['3 years', 'three years', '3-4 years', '3 yr', '3yr'],
        fiveyears: ['5 years', 'five years', '5+ years', 'more than 5 years', 'five or more'],
    },
    currentBacklogs: {
        yes: ['yes', 'y', 'have backlog', 'have backlogs', 'has backlog', 'has backlogs', '1', 'true', 'present'],
        no: ['no', 'n', 'no backlog', 'no backlogs', 'zero', '0', 'none', 'nil', 'false', 'not applicable', 'na', 'n/a']
    },
    passiveBacklogs: {
        yes: ['yes', 'y', 'had backlog', 'had backlogs', 'history present', '1', 'true', 'present'],
        no: ['no', 'n', 'no backlog', 'no backlogs', 'zero', '0', 'none', 'nil', 'false', 'not applicable', 'na', 'n/a']
    },
    skillLevel: {
        beginner: ['beginner', 'basic', 'novice', 'elementary', 'learning', 'starter', 'level 1', 'beginner level'],
        intermediate: ['intermediate', 'medium', 'moderate', 'average', 'level 2', 'mid level'],
        advanced: ['advanced', 'expert', 'proficient', 'senior', 'high', 'professional', 'level 3', 'expert level'],
        fresher: ['fresher', 'fresher/beginner', 'no experience']
    },
    currentYear: {
        first: ['1st year', 'first year', '1', 'year 1', 'sem 1', 'sem 2', 'semester 1', 'semester 2', '1st'],
        second: ['2nd year', 'second year', '2', 'year 2', 'sem 3', 'sem 4', 'semester 3', 'semester 4', '2nd'],
        third: ['3rd year', 'third year', '3', 'year 3', 'sem 5', 'sem 6', 'semester 5', 'semester 6', '3rd'],
        fourth: ['4th year', 'fourth year', 'final year', '4', 'year 4', 'sem 7', 'sem 8', 'semester 7', 'semester 8', '4th', 'last year']
    },
    country: {
        india: ['india', 'in', 'ind', 'bharat', 'republic of india']
    },
    nationality: {
        indian: ['indian', 'india', 'in', 'ind', 'bharat']
    },
    bloodGroup: {
        apos: ['a+', 'a positive', 'a+ve', 'a pos'],
        aneg: ['a-', 'a negative', 'a-ve', 'a neg'],
        bpos: ['b+', 'b positive', 'b+ve', 'b pos'],
        bneg: ['b-', 'b negative', 'b-ve', 'b neg'],
        abpos: ['ab+', 'ab positive', 'ab+ve', 'ab pos'],
        abneg: ['ab-', 'ab negative', 'ab-ve', 'ab neg'],
        opos: ['o+', 'o positive', 'o+ve', 'o pos'],
        oneg: ['o-', 'o negative', 'o-ve', 'o neg']
    }
};

function ensureHighlightStyle() {
    const STYLE_ID = 'lazyfill-highlight-style';
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
        .qf-field-highlight {
            outline: 2px solid #2E4BB5 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 0 6px rgba(46,75,181,0.18) !important;
            transition: outline 0.2s ease, box-shadow 0.2s ease !important;
        }
        @keyframes lazyfill-pulse {
            0%   { box-shadow: 0 0 0 0 rgba(46,75,181,0.5); }
            70%  { box-shadow: 0 0 0 8px rgba(46,75,181,0); }
            100% { box-shadow: 0 0 0 0 rgba(46,75,181,0); }
        }
        .qf-field-filled {
            animation: lazyfill-pulse 0.6s ease-out forwards !important;
            border-color: rgba(46,75,181,0.6) !important;
        }
    `;
    document.head.appendChild(style);
}

function normalize(text) {
    return String(text || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function collapse(text) {
    return normalize(text).replace(/\s+/g, '');
}

function canonicalizeChoice(profileKey, value) {
    const token = collapse(value);
    const synonyms = CHOICE_SYNONYMS[profileKey];
    if (!synonyms) return token;

    for (const [canonical, variants] of Object.entries(synonyms)) {
        if ([canonical, ...variants.map(collapse)].includes(token)) {
            return canonical;
        }
    }

    return token;
}

function choiceMatches(profileKey, optionText, value) {
    if (!optionText || !value) return false;

    const optionNorm = normalize(optionText);
    const valueNorm = normalize(value);

    // Exact normalized match
    if (optionNorm === valueNorm) return true;

    // Canonical synonym match
    const optionToken = canonicalizeChoice(profileKey, optionText);
    const valueToken = canonicalizeChoice(profileKey, value);
    if (optionToken === valueToken) return true;

    const optionCollapsed = collapse(optionText);
    const valueCollapsed = collapse(value);

    // Substring matches (require length > 2 to avoid noise)
    if (optionCollapsed.includes(valueCollapsed) && valueCollapsed.length > 2) return true;
    if (valueCollapsed.includes(optionCollapsed) && optionCollapsed.length > 2) return true;

    // Word-level overlap: if majority of words in value appear in option
    const valueWords = valueNorm.split(' ').filter(w => w.length > 2);
    if (valueWords.length > 0) {
        const matchedWords = valueWords.filter(w => optionNorm.includes(w));
        if (matchedWords.length / valueWords.length >= 0.7) return true;
    }

    return false;
}

function getChoiceLabel(el) {
    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel.trim();

    const wrappingLabel = el.closest('label');
    if (wrappingLabel) {
        const clone = wrappingLabel.cloneNode(true);
        clone.querySelectorAll('input, textarea, select').forEach((node) => node.remove());
        const text = clone.textContent.trim();
        if (text) return text;
    }

    const optionContainer = el.closest(
        '[role="radio"], [role="checkbox"], [role="option"], [data-value], ' +
        '.docssharedWizToggleLabeledContainer, ' +
        '.freebirdFormviewerComponentsQuestionRadioChoice, ' +
        '.freebirdFormviewerComponentsQuestionCheckboxChoice'
    );
    if (optionContainer) {
        const text = optionContainer.textContent.trim();
        if (text) return text;
    }

    if (el.parentElement) {
        const text = el.parentElement.textContent.trim();
        if (text) return text;
    }

    return el.value || '';
}

function getGroupKey(el) {
    const name = el.getAttribute('name');
    if (name) return `name:${name}`;

    const fieldset = el.closest('fieldset');
    if (fieldset) return `fieldset:${fieldset.id || collapse(fieldset.textContent).slice(0, 80)}`;

    const radioGroup = el.closest('[role="radiogroup"]');
    if (radioGroup) return `radiogroup:${radioGroup.id || collapse(radioGroup.textContent).slice(0, 80)}`;

    const listItem = el.closest('[role="listitem"], .geS5n');
    if (listItem) return `listitem:${listItem.id || collapse(listItem.textContent).slice(0, 80)}`;

    return `element:${el.id || collapse(getNearbyText(el)).slice(0, 80)}`;
}

function getRadioGroupElements(el) {
    const name = el.getAttribute('name');
    if (name) {
        return Array.from(document.querySelectorAll(`input[type="radio"][name="${CSS.escape(name)}"]`)).filter(isVisible);
    }

    const radioGroup = el.closest('[role="radiogroup"]');
    if (radioGroup) {
        return Array.from(radioGroup.querySelectorAll('[role="radio"], input[type="radio"]')).filter(isVisible);
    }

    const fieldset = el.closest('fieldset');
    if (fieldset) {
        return Array.from(fieldset.querySelectorAll('[role="radio"], input[type="radio"]')).filter(isVisible);
    }

    const listItem = el.closest('[role="listitem"], .geS5n');
    if (listItem) {
        return Array.from(listItem.querySelectorAll('[role="radio"], input[type="radio"]')).filter(isVisible);
    }

    return [el];
}

// Extended detection for custom circular/styled radio elements (Google Forms, etc.)
function getCustomRadioGroupElements(el) {
    // Google Forms radio container
    const gFormContainer = el.closest(
        '.freebirdFormviewerComponentsQuestionRadioRoot, ' +
        '.freebirdFormviewerComponentsQuestionBaseRoot, ' +
        '[data-params]'
    );
    if (gFormContainer) {
        const items = Array.from(gFormContainer.querySelectorAll(
            '[role="radio"], [role="option"], ' +
            '.freebirdFormviewerComponentsQuestionRadioChoice, ' +
            '.docssharedWizToggleLabeledContainer'
        )).filter(isVisible);
        if (items.length > 0) return items;
    }

    // Generic role=listbox > role=option pattern
    const listbox = el.closest('[role="listbox"]');
    if (listbox) {
        return Array.from(listbox.querySelectorAll('[role="option"]')).filter(isVisible);
    }

    // Tab-style selectors
    const tablist = el.closest('[role="tablist"]');
    if (tablist) {
        return Array.from(tablist.querySelectorAll('[role="tab"]')).filter(isVisible);
    }

    return getRadioGroupElements(el);
}

function getProfileValue(profile, key) {
    if (key === 'combinedBacklogs') {
        const current = normalize(profile.currentBacklogs || '');
        const passive = normalize(profile.passiveBacklogs || '');
        const yesValues = ['yes', 'y', 'true', '1', 'present'];
        const noValues = ['no', 'n', 'false', '0', 'none', 'nil', 'na', 'n a', 'not applicable'];

        if (yesValues.includes(current) || yesValues.includes(passive)) {
            return 'Yes';
        }

        if (
            current && passive &&
            noValues.includes(current) &&
            noValues.includes(passive)
        ) {
            return 'No';
        }

        return profile.currentBacklogs || profile.passiveBacklogs || '';
    }

    if (key === 'fullName' && !profile.fullName) {
        const parts = [profile.firstName, profile.middleName, profile.lastName].filter(Boolean);
        return parts.join(' ').trim();
    }
    if (key === 'course' && !profile.course) {
        return profile.qualification || '';
    }
    if (key === 'interestedDomain' && !profile.interestedDomain) {
        return profile.subject || '';
    }
    if (key === 'researchInterestArea' && !profile.researchInterestArea) {
        return profile.interestedDomain || profile.subject || '';
    }
    if (key === 'whatsappNumber' && !profile.whatsappNumber) {
        return profile.phone || '';
    }
    if (key === 'experience' && !profile.experience) {
        return 'Fresher';
    }
    if (key === 'passiveBacklogs' && !Object.prototype.hasOwnProperty.call(profile, 'passiveBacklogs')) {
        return '';
    }
    return profile[key];
}

function getLabelText(el) {
    if (el.id) {
        const label = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
        if (label) return label.textContent.trim();
    }

    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel.trim();

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

    // Google Forms question heading detection
    const gFormQuestion = el.closest(
        '.freebirdFormviewerComponentsQuestionBaseRoot, ' +
        '.freebirdFormviewerComponentsQuestionRadioRoot, ' +
        '[jsmodel], [data-params]'
    );
    if (gFormQuestion) {
        const heading = gFormQuestion.querySelector(
            '.freebirdFormviewerComponentsQuestionBaseTitle, ' +
            '[role="heading"], .exportItemTitle, .M7eMe'
        );
        if (heading) texts.push(heading.textContent.trim());
    }

    let current = el.parentElement;
    let levels = 0;
    while (current && levels < 10) {
        const labels = current.querySelectorAll(
            'label, .label, .form-label, .input-label, [role="heading"], strong, b, ' +
            '.freebirdFormviewerComponentsQuestionBaseTitle, ' +
            '.exportItemTitle, .M7eMe, h1, h2, h3, h4, h5, h6, legend'
        );
        labels.forEach(label => {
            const text = label.textContent.trim();
            if (text && text.length < 200) texts.push(text);
        });

        const placeholder = current.getAttribute('placeholder');
        if (placeholder) texts.push(placeholder);

        if (current.getAttribute('role') === 'listitem' || current.classList.contains('geS5n')) {
            const content = current.textContent.trim();
            if (content) texts.push(content.substring(0, 100));
            break;
        }

        current = current.parentElement;
        levels++;
    }

    return [...new Set(texts)].filter(Boolean).join(' ');
}

function extractMeta(el) {
    const tagName = el.tagName.toLowerCase();
    const role = (el.getAttribute('role') || '').toLowerCase();
    const options = tagName === 'select'
        ? Array.from(el.options).map((option) => option.textContent.trim()).filter(Boolean)
        : [];

    return {
        element: el,
        tagName,
        role,
        type: (el.getAttribute('type') || role || tagName).toLowerCase(),
        name: el.name || '',
        id: el.id || '',
        value: el.value || '',
        placeholder: el.getAttribute('placeholder') || '',
        ariaLabel: el.getAttribute('aria-label') || '',
        autoComplete: el.getAttribute('autocomplete') || '',
        label: getLabelText(el),
        nearbyText: getNearbyText(el),
        choiceLabel: getChoiceLabel(el),
        options
    };
}

function shouldSkip(meta) {
    const combined = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel].join(' ').toLowerCase();
    return SKIP_PATTERNS.some((pattern) => combined.includes(pattern));
}

function isVisible(el) {
    if (el.offsetParent === null || el.disabled || el.type === 'hidden') return false;
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
}

function detectFields() {
    const selector = [
        'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not([type="file"])',
        'textarea',
        'select',
        '[role="radio"]',
        '[role="option"]',
        // Google Forms specific selectors for circular/custom option elements
        '.freebirdFormviewerComponentsQuestionRadioChoice',
        '.docssharedWizToggleLabeledContainer'
    ].join(',');

    const seen = new Set();
    return Array.from(document.querySelectorAll(selector))
        .filter((el) => {
            if (!isVisible(el)) return false;
            if (seen.has(el)) return false;
            seen.add(el);
            // Skip already-selected radio ARIA elements
            if (
                (el.getAttribute('role') === 'radio' || el.getAttribute('role') === 'option') &&
                el.getAttribute('aria-checked') === 'true'
            ) return false;
            return true;
        })
        .map((el) => extractMeta(el));
}

function scoreMatch(meta, profileKey) {
    const sources = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel, meta.autoComplete, meta.nearbyText].filter(Boolean);
    const aliases = FIELD_MAPPING[profileKey] || [];
    const aliasTokensNorm = aliases.map(normalize);
    const aliasTokensColl = aliases.map(collapse);
    const keyToken = collapse(profileKey);
    const combinedSource = sources.join(' ').toLowerCase();
    const hasCollegeEmailContext = /college|university|institution|institute|edu\b|campus|student email|student mail|stud id|student id|institutional|academic email|official email/.test(combinedSource);
    const hasInstitutionNameContext = /college name|university name|institution name|institute name|school name|academic institution|college\/university|university\/college|institution/.test(combinedSource);
    const hasPersonalEmailContext = /personal|private|primary|home/.test(combinedSource);
    let score = 0;

    for (const source of sources) {
        const normalizedSource = normalize(source);
        const collapsedSource = collapse(source);
        if (!normalizedSource) continue;

        // Key token direct match
        if (collapsedSource === keyToken) score += 120;
        else if (collapsedSource.includes(keyToken)) score += 65;

        for (let i = 0; i < aliasTokensColl.length; i++) {
            const aliasNorm = aliasTokensNorm[i];
            const aliasColl = aliasTokensColl[i];

            // Exact collapsed match — highest reward
            if (collapsedSource === aliasColl) { score += 140; break; }

            // Exact normalized match (preserves spaces)
            if (normalizedSource === aliasNorm) { score += 130; break; }

            // Source contains full alias string
            if (aliasColl.length > 3 && collapsedSource.includes(aliasColl)) { score += 80; }

            // Alias contains full source (source is a substring of alias)
            if (collapsedSource.length > 3 && aliasColl.includes(collapsedSource)) { score += 60; }

            // Word-level overlap scoring
            const aliasWords = aliasNorm.split(' ').filter(w => w.length > 2);
            const sourceWords = normalizedSource.split(' ').filter(w => w.length > 2);
            if (aliasWords.length > 0 && sourceWords.length > 0) {
                const overlap = aliasWords.filter(w => sourceWords.includes(w));
                if (overlap.length > 0) {
                    const ratio = overlap.length / Math.max(aliasWords.length, sourceWords.length);
                    score += Math.round(ratio * 50);
                }
            }
        }
    }

    // Autocomplete attribute bonus
    const autoCompleteMap = {
        email: 'email', phone: 'tel', firstName: 'given-name',
        middleName: 'additional-name', lastName: 'family-name',
        fullName: 'name', address: 'street-address', city: 'address-level2',
        state: 'address-level1', zip: 'postal-code', country: 'country-name',
        company: 'organization', dateOfBirth: 'bday'
    };
    if (autoCompleteMap[profileKey] && meta.autoComplete === autoCompleteMap[profileKey]) {
        score += 60;
    }

    // Email disambiguation
    if (profileKey === 'collegeEmail' && hasCollegeEmailContext) score += 180;
    if (profileKey === 'collegeEmail' && hasPersonalEmailContext) score -= 100;
    if (profileKey === 'email' && hasPersonalEmailContext) score += 120;
    if (profileKey === 'email' && hasCollegeEmailContext) score -= 180;
    if (profileKey === 'collegeName' && hasInstitutionNameContext) score += 220;
    if (profileKey === 'fullName' && hasInstitutionNameContext) score -= 220;

    // Input type bonuses
    if (profileKey === 'phone' && meta.type === 'tel') score += 30;
    if (profileKey === 'email' && meta.type === 'email') score += 25;
    if (profileKey === 'dateOfBirth' && meta.type === 'date') score += 50;
    if (profileKey === 'gender' && (meta.type === 'radio' || meta.tagName === 'select')) score += 30;
    if (profileKey === 'aboutMe' && meta.tagName === 'textarea') score += 20;
    if (profileKey === 'experience' && meta.tagName === 'textarea') score += 10;

    // Social link context boosts
    if (profileKey === 'githubLink' && /github/i.test(combinedSource)) score += 50;
    if (profileKey === 'linkedinLink' && /linkedin/i.test(combinedSource)) score += 60;
    if (profileKey === 'websiteLink' && /website|portfolio/i.test(combinedSource)) score += 40;
    if (profileKey === 'twitterLink' && /twitter|twitter\.com|\bx\.com\b/i.test(combinedSource)) score += 45;

    // Cross-field confusion penalties
    if (profileKey === 'phone' && /whatsapp/i.test(combinedSource)) score -= 50;
    if (profileKey === 'whatsappNumber' && !/whatsapp/i.test(combinedSource)) score -= 30;
    if (profileKey === 'email' && /whatsapp|phone|mobile|contact number/i.test(combinedSource)) score -= 60;
    if (profileKey === 'interestedDomain' && /research/i.test(combinedSource)) score -= 180;
    if (profileKey === 'subject' && /research/i.test(combinedSource)) score -= 120;
    if (profileKey === 'researchInterestArea' && /research/i.test(combinedSource)) score += 180;

    // Experience field extras
    if (profileKey === 'experience' && /if any|optional|prior|previous|past/i.test(combinedSource)) score += 30;

    return score;
}

function matchField(meta, profile) {
    const academicContext = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel, meta.nearbyText]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    // Skip third-party contact fields unless we later add dedicated profile data for them.
    if (
        /\b(mentor|reference|referee|guardian|parent|father|mother|emergency contact)\b/.test(academicContext) &&
        /\b(name|email|mail|contact|phone|mobile|number)\b/.test(academicContext)
    ) {
        return null;
    }

    // Skip organization-name prompts that can look like a generic "name" field.
    if (
        /\b(startup|start-up|psu|government organization|govt organization|organisation|organization|company|firm|enterprise)\b/.test(academicContext) &&
        /\bname\b/.test(academicContext)
    ) {
        return null;
    }

    if (
        /\b(college|university|institution|institute|school)\b/.test(academicContext) &&
        /\bname\b/.test(academicContext)
    ) {
        return String(getProfileValue(profile, 'collegeName') || '').trim() ? 'collegeName' : null;
    }

    if (/(^|\b)(cgpa|gpa)(\b|$)|grade point average|academic aggregate|cumulative grade point average/.test(academicContext)) {
        return String(getProfileValue(profile, 'currentCgpa') || '').trim() ? 'currentCgpa' : null;
    }

    if (/research/.test(academicContext) && /interest|area|focus|topic|field|domain|specialization|theme|concentration|direction/.test(academicContext)) {
        return String(getProfileValue(profile, 'researchInterestArea') || '').trim() ? 'researchInterestArea' : null;
    }

    if (/backlog|backlogs|arrear|arrears|\bkt\b|supplementary/.test(academicContext)) {
        const hasCombinedContext = /active\s*\/\s*passive|active\s+or\s+passive/.test(academicContext);
        const hasPassiveContext = /passive|past|previous|history|ever had|cleared|formerly|earlier|prior|active\s*\/\s*passive|active\s+or\s+passive/.test(academicContext);
        const hasCurrentContext = /current|active|pending|standing|present|ongoing/.test(academicContext);

        if (hasCombinedContext && String(getProfileValue(profile, 'combinedBacklogs') || '').trim()) {
            return 'combinedBacklogs';
        }

        if (hasPassiveContext && String(getProfileValue(profile, 'passiveBacklogs') || '').trim()) {
            return 'passiveBacklogs';
        }

        if (hasCurrentContext && String(getProfileValue(profile, 'currentBacklogs') || '').trim()) {
            return 'currentBacklogs';
        }
    }

    const emailContext = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel, meta.nearbyText]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    // Strong college email heuristic — detect before general scoring
    if (/college|university|institution|institute|edu\b|campus|student email|student mail|stud id|student id|institutional|academic email|official email/.test(emailContext) &&
        /email|mail/.test(emailContext)) {
        return String(getProfileValue(profile, 'collegeEmail') || '').trim() ? 'collegeEmail' : null;
    }

    // Strong personal email heuristic
    if (/personal|private|primary|home/.test(emailContext) && /email|mail/.test(emailContext)) {
        return String(getProfileValue(profile, 'email') || '').trim() ? 'email' : null;
    }

    let bestKey = null;
    let bestScore = 45; // minimum threshold to avoid false positives

    for (const key of Object.keys(FIELD_MAPPING)) {
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

function findSelectOption(el, profileKey, value) {
    const normalizedValue = normalize(value);
    const collapsedValue = collapse(value);

    // Preferred: canonical synonym match
    const bestOption = Array.from(el.options).find((option) => {
        if (option.disabled || !option.value) return false;
        return (
            choiceMatches(profileKey, option.textContent, value) ||
            choiceMatches(profileKey, option.value, value)
        );
    });
    if (bestOption) return bestOption;

    // Fallback: plain fuzzy substring
    return Array.from(el.options).find((option) => {
        if (option.disabled || !option.value) return false;
        const optNorm = normalize(option.textContent);
        const optColl = collapse(option.textContent);
        return (
            optColl === collapsedValue ||
            optNorm === normalizedValue ||
            optColl.includes(collapsedValue) ||
            collapsedValue.includes(optColl)
        );
    });
}

function fillSelect(el, profileKey, value) {
    const matchedOption = findSelectOption(el, profileKey, value);
    if (!matchedOption) return false;
    setNativeValue(el, matchedOption.value);
    return true;
}

function fillRadio(el, meta, profileKey, value) {
    // Try standard radio group first
    let radios = getRadioGroupElements(el);

    // If only 1 element found, try the extended custom radio detector
    if (radios.length <= 1) {
        radios = getCustomRadioGroupElements(el);
    }

    const target = radios.find((radio) => {
        const radioMeta = extractMeta(radio);
        const candidates = [
            radioMeta.choiceLabel,
            radioMeta.value,
            radioMeta.ariaLabel,
            radioMeta.label,
            radio.textContent?.trim()
        ].filter(Boolean);

        return candidates.some((candidate) => choiceMatches(profileKey, candidate, value));
    });

    if (!target) return false;

    const role = target.getAttribute('role');
    if (role === 'radio' || role === 'option' || role === 'tab') {
        // Dispatch a full click sequence for Google Forms / custom widgets
        target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        target.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        target.click();
        target.dispatchEvent(new Event('input', { bubbles: true }));
        target.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
    }

    // Standard HTML radio input
    if (target.tagName && target.tagName.toLowerCase() === 'input') {
        target.checked = true;
        target.dispatchEvent(new Event('input', { bubbles: true }));
        target.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
    }

    // Final fallback: click
    target.click();
    return true;
}

function fillDateInput(el, value) {
    if (!value) return false;
    const str = String(value).trim();

    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
        setNativeValue(el, str);
        return true;
    }

    const dmyMatch = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmyMatch) {
        const [, d, m, y] = dmyMatch;
        setNativeValue(el, `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`);
        return true;
    }

    const parsed = new Date(str);
    if (!isNaN(parsed.getTime())) {
        setNativeValue(el, parsed.toISOString().split('T')[0]);
        return true;
    }

    return false;
}

function fillElement(el, meta, profileKey, value) {
    if (!el || value === undefined || value === null || value === '') return false;

    try {
        let filled = false;

        if (meta.tagName === 'select') {
            filled = fillSelect(el, profileKey, value);
        } else if (
            meta.type === 'radio' ||
            meta.role === 'radio' ||
            meta.role === 'option' ||
            meta.role === 'tab' ||
            el.classList.contains('freebirdFormviewerComponentsQuestionRadioChoice') ||
            el.classList.contains('docssharedWizToggleLabeledContainer')
        ) {
            return fillRadio(el, meta, profileKey, value);
        } else if (meta.type === 'checkbox') {
            const truthy = ['true', 'yes', '1', 'on', 'checked'].includes(String(value).toLowerCase());
            if (el.checked !== truthy) { el.checked = truthy; filled = true; }
        } else if (meta.type === 'date') {
            filled = fillDateInput(el, value);
        } else {
            setNativeValue(el, value);
            filled = true;
        }

        if (filled) {
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
            el.dispatchEvent(new Event('blur', { bubbles: true }));
            el.classList.add('qf-field-filled');
            setTimeout(() => el.classList.remove('qf-field-filled'), 700);
        }

        return filled;
    } catch (_error) {
        return false;
    }
}

function isChoiceElement(meta) {
    return (
        meta.type === 'radio' ||
        meta.role === 'radio' ||
        meta.role === 'option' ||
        meta.role === 'tab' ||
        meta.element.classList.contains('freebirdFormviewerComponentsQuestionRadioChoice') ||
        meta.element.classList.contains('docssharedWizToggleLabeledContainer')
    );
}

function autoFill(profile) {
    ensureHighlightStyle();
    const fields = detectFields();
    let filledCount = 0;
    const processedChoiceGroups = new Set();

    fields.forEach((meta) => {
        if (shouldSkip(meta)) return;

        const isChoice = isChoiceElement(meta);

        if (isChoice) {
            const groupKey = getGroupKey(meta.element);
            if (processedChoiceGroups.has(groupKey)) return;
        }

        const profileKey = matchField(meta, profile);
        if (!profileKey) return;

        const value = getProfileValue(profile, profileKey);
        if (fillElement(meta.element, meta, profileKey, value)) {
            if (isChoice) {
                processedChoiceGroups.add(getGroupKey(meta.element));
            }
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
            ensureHighlightStyle();
            const fields = detectFields();
            fields.forEach((field) => {
                field.element.classList.add('qf-field-highlight');
                setTimeout(() => field.element.classList.remove('qf-field-highlight'), 2500);
            });
            sendResponse({ success: true, highlighted: fields.length });
            break;
        }
    }

    return true;
});
