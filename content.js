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
        'current year', 'year of study', 'academic year', 'year',
        'your year', 'study year', 'year of course', 'course year', 'year of degree',
        'which year', 'select year', 'year/semester', 'current year of study',
        'year of college', 'year in college', 'study level',
        'year (1st/2nd/3rd/4th)', 'first year', 'second year', 'third year', 'fourth year',
        'final year'
    ],

    graduationYear: [
        'graduation year', 'graduating year', 'year of graduation', 'expected graduation year',
        'expected year of graduation', 'expected passing year', 'pass out year',
        'passing year', 'year of passing', 'batch', 'batch year',
        'graduating in', 'graduation/graduating in year', 'graduating in year',
        'expected year of passing', 'year of completion', 'completion year',
        'course completion year', 'degree completion year', 'programme completion year',
        'year of passout', 'passout year', 'pass-out year', 'year of pass out',
        'academic batch', 'graduating batch', 'batch (year)', 'year of degree completion',
        'expected year of degree', 'tentative graduation year', 'projected graduation year',
        'expected convocation year', 'convocation year', 'year of convocation'
    ],

    tenthPercent: [
        '10th percentage', '10th %', '10th marks', '10th score', '10th grade percentage',
        'class 10 percentage', 'class x percentage', 'ssc percentage', 'ssc marks',
        'ssc score', 'matriculation percentage', 'matric percentage', 'matric marks',
        'matric score', '10th board percentage', '10th board marks', '10th board score',
        'secondary percentage', 'secondary marks', 'secondary board percentage',
        'class 10th marks', 'class 10th percentage', 'class 10th score',
        'xth percentage', 'xth marks', 'xth score', '10 percentage', '10 marks',
        '10th result', 'class x marks', 'class x score', 'hsc marks (10th)',
        'secondary school percentage', 'secondary school marks',
        '10th cgpa', '10th grade marks', '10th std percentage', '10th std marks',
        'std 10 percentage', 'std x percentage', '10th standard percentage',
        '10th standard marks', 'tenth percentage', 'tenth marks', 'tenth score'
    ],

    twelfthPercent: [
        '12th percentage', '12th %', '12th marks', '12th score', '12th grade percentage',
        'class 12 percentage', 'class xii percentage', 'hsc percentage', 'hsc marks',
        'hsc score', 'intermediate percentage', 'intermediate marks', 'intermediate score',
        '12th board percentage', '12th board marks', '12th board score',
        'senior secondary percentage', 'senior secondary marks', 'senior secondary board percentage',
        'class 12th marks', 'class 12th percentage', 'class 12th score',
        'xiith percentage', 'xiith marks', 'xii percentage', 'xii marks',
        '12 percentage', '12 marks', '12th result', 'class xii marks', 'class xii score',
        'higher secondary percentage', 'higher secondary marks',
        '12th std percentage', '12th std marks', 'std 12 percentage', 'std xii percentage',
        '12th standard percentage', '12th standard marks',
        'twelfth percentage', 'twelfth marks', 'twelfth score',
        'plus two percentage', 'plus two marks', '+2 percentage', '+2 marks',
        'puc percentage', 'puc marks', 'pre-university percentage', 'pre-university marks'
    ],

    currentSemester: [
        'current semester', 'semester', 'sem', 'semester no', 'semester number',
        'which semester', 'select semester', 'academic semester', 'current sem',
        'semester (1-8)', 'semester (1-6)', 'odd semester', 'even semester',
        'running semester', 'ongoing semester', 'semester of study',
        'term', 'academic term', 'current term', 'semester/term'
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
        // College / university / institute
        'college email', 'college mail', 'college e-mail', 'college email id',
        'college email address', 'college email id (required)',
        'college official email', 'college registered email',
        'your college email', 'your college mail id',
        'college/university email', 'email id (college)', 'email (college)',
        // Institutional
        'institutional email', 'institutional mail', 'your institutional email',
        'email id (institutional)', 'institute email', 'institute mail',
        // University
        'university email', 'university mail', 'university email id',
        'university email address', 'university official email',
        'university registered email', 'your university email',
        // Student / STU
        'student email', 'student mail', 'student email id', 'student email address',
        'stu email', 'stu email id', 'stu mail', 'stu mail id',
        'stu id', 'student e-mail', 'student e mail',
        'your student email', 'your student mail',
        // Academic / official
        'academic email', 'academic mail', 'academic email id',
        'official email', 'official mail', 'official email id',
        'college id email',
        // Generic edu
        'edu email', 'edu mail',
        // Explicit label variants seen in forms
        'student email id', 'student email address',
        'university email id', 'university email address',
        'college email id', 'college email address',
        // All-caps / Title-case variants (normalized, so these cover them too)
        'student email id (upes)', 'upes email', 'upes email id', 'upes mail',
        'upes student email', 'upes student mail',
        // Other wordings
        'college email (required)', 'university email (required)',
        'student email (required)', 'institutional email id',
        'institute email id', 'institute email address',
        // Additional label patterns seen in registration forms
        'college email id (required)', 'email id (student)', 'email (student)',
        'email id (university)', 'email (university)', 'email id (institute)',
        'email (institute)', 'email id (institutional)',
        'registered email (college)', 'registered email (university)',
        'registered email (institute)',
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
        'github repo', 'code repository', 'github (if any)',
        // Combined link fields (e.g. "Resume / LinkedIn / Portfolio / GitHub Link")
        'resume / linkedin / portfolio / github link',
        'linkedin / github / portfolio',
        'github / linkedin / portfolio',
        'resume link', 'resume url', 'resume / cv link', 'cv link', 'cv url',
        'any link', 'any one link', 'provide a link', 'share a link',
        'link (github/linkedin/portfolio)', 'link (linkedin/github)',
        'social / portfolio link', 'social or portfolio link'
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

    // domainOfInterest covers the merged field (was: interestedDomain + researchInterestArea + subject)
    domainOfInterest: [
        // Domain / interest
        'interested in domain', 'preferred domain', 'domain of interest', 'interested domain',
        'area of interest', 'your area of interest', 'domain preference', 'domain interested',
        'interest area', 'which domain are you interested', 'what domain interests you',
        'choose domain', 'select domain of interest', 'domain you are interested in',
        'field of interest', 'technical field of interest', 'preferred field',
        'what are you interested in', 'your interest', 'area of expertise preferred',
        'career interest', 'technical interest', 'professional interest',
        'apply for domain', 'domain to work in', 'desired domain',
        // Subject / domain
        'subject', 'topic', 'course topic', 'training topic', 'module', 'domain',
        'your subject', 'preferred subject', 'subject of interest',
        'interested subject', 'subject choice', 'topic of interest',
        'technical domain', 'domain choice', 'learning domain',
        'what domain', 'which domain', 'select domain', 'select topic',
        // Research interest
        'research interest area', 'research interest', 'research interests', 'area of research interest',
        'research area', 'research areas', 'research domain', 'research domains',
        'area of interest in research', 'research focus', 'research focus area',
        'research specialization', 'research theme', 'research topic', 'research topics',
        'proposed research area', 'preferred research area', 'intended research area',
        'research field', 'fields of research', 'field of research', 'area of research',
        'research concentration', 'research preference', 'research line', 'research direction',
        'statement of research interest', 'research intent', 'interested research area'
    ],

    // Legacy aliases still resolved by getProfileValue; kept for old profiles in storage
    interestedDomain: [
        'interested in domain (legacy)', '__lazyfill_legacy_interestedDomain__'
    ],
    researchInterestArea: [
        'research interest area (legacy)', '__lazyfill_legacy_researchInterestArea__'
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
        'how did you hear', 'where did you learn about us', 'where did you hear about us',
        'referral', 'referred by', 'source', 'how did you find us',
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
        ccvt:          ['ccvt', 'cloud computing and virtualization technology', 'cloud computing virtualization technology', 'cloud and virtualization'],
        csf:           ['csf', 'cybersecurityandforensics', 'cybersecurity and forensics', 'cyber security and forensics', 'cyber security & forensics', 'cybersecurity forensics', 'cyber forensics', 'cybersecurity & forensics'],
        aiml:          ['aiml', 'ai/ml', 'ai & ml', 'artificialintelligenceandmachinelearning', 'artificial intelligence and machine learning', 'ai and ml', 'artificial intelligence & machine learning', 'ai ml', 'ai and machine learning'],
        iot:           ['iot', 'internetofthings', 'internet of things', 'internet of thing'],
        fullstack:     ['fullstack', 'full stack', 'full-stack', 'full stack development'],
        bigdata:       ['bigdata', 'big data', 'big data analytics'],
        graphicsgaming:['graphicsgaming', 'graphics & gaming', 'graphics and gaming', 'graphics gaming'],
        datascience:   ['datascience', 'data science', 'ds'],
        cloudcomputing:['cloudcomputing', 'cloud computing', 'cloud'],
        cybersecurity: ['cybersecurity', 'cyber security', 'information security'],
        blockchain:    ['blockchain', 'block chain'],
        arvr:          ['arvr', 'ar/vr', 'ar & vr', 'augmented reality', 'virtual reality', 'augmented reality and virtual reality', 'ar and vr'],
        devops:        ['devops', 'dev ops', 'development operations'],
        uiux:          ['uiux', 'ui/ux', 'ui ux', 'user interface user experience', 'ui and ux design'],
        machinelearning:['machinelearning', 'machine learning', 'ml', 'deep learning'],
        nlp:           ['nlp', 'natural language processing'],
        computervision:['computervision', 'computer vision', 'cv'],
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
        advanced: ['advanced', 'advance', 'expert', 'proficient', 'senior', 'high', 'professional', 'level 3', 'expert level'],
        fresher: ['fresher', 'fresher/beginner', 'no experience']
    },
    currentYear: {
        first: ['1st year', 'first year', '1', 'year 1', '1st'],
        second: ['2nd year', 'second year', '2', 'year 2', '2nd'],
        third: ['3rd year', 'third year', '3', 'year 3', '3rd'],
        fourth: ['4th year', 'fourth year', 'final year', '4', 'year 4', '4th', 'last year'],
        lateral2nd: ['lateral entry 2nd year', 'lateral 2nd', 'le 2nd'],
        lateral3rd: ['lateral entry 3rd year', 'lateral 3rd', 'le 3rd'],
        fifth: ['5th year', 'fifth year', '5', 'year 5', '5th', 'integrated 5th']
    },
    graduationYear: (() => {
        // Build synonyms for years 2020–2035 so any dropdown with a 4-digit year
        // value can be matched against the profile's stored graduationYear.
        const syns = {};
        for (let y = 2020; y <= 2035; y++) {
            syns[String(y)] = [String(y), `batch ${y}`, `${y} batch`, `class of ${y}`];
        }
        return syns;
    })(),
    currentSemester: {
        sem1: ['1', 'semester 1', 'sem 1', 'sem i', 'first semester', '1st semester', 'i'],
        sem2: ['2', 'semester 2', 'sem 2', 'sem ii', 'second semester', '2nd semester', 'ii'],
        sem3: ['3', 'semester 3', 'sem 3', 'sem iii', 'third semester', '3rd semester', 'iii'],
        sem4: ['4', 'semester 4', 'sem 4', 'sem iv', 'fourth semester', '4th semester', 'iv'],
        sem5: ['5', 'semester 5', 'sem 5', 'sem v', 'fifth semester', '5th semester', 'v'],
        sem6: ['6', 'semester 6', 'sem 6', 'sem vi', 'sixth semester', '6th semester', 'vi'],
        sem7: ['7', 'semester 7', 'sem 7', 'sem vii', 'seventh semester', '7th semester', 'vii'],
        sem8: ['8', 'semester 8', 'sem 8', 'sem viii', 'eighth semester', '8th semester', 'viii', 'final semester']
    },
    country: {
        india: ['india', 'in', 'ind', 'bharat', 'republic of india', 'india (in)'],
        usa: ['usa', 'us', 'united states', 'united states of america', 'america'],
        uk: ['uk', 'united kingdom', 'gb', 'great britain', 'england'],
        canada: ['canada', 'ca', 'can'],
        australia: ['australia', 'au', 'aus'],
        germany: ['germany', 'de', 'deu', 'deutschland'],
        singapore: ['singapore', 'sg', 'sgp'],
        uae: ['uae', 'united arab emirates', 'dubai', 'ae'],
    },
    nationality: {
        indian: ['indian', 'india', 'in', 'ind', 'bharat']
    },
    referralSource: {
        linkedin: ['linkedin', 'linked in', 'linkedin.com'],
        instagram: ['instagram', 'insta', 'ig'],
        twitter: ['twitter', 'twitter(x)', 'twitter x', 'x', 'x (twitter)', 'x/twitter'],
        facebook: ['facebook', 'fb', 'fb.com', 'meta'],
        youtube: ['youtube', 'yt'],
        college: ['college', 'college notice board', 'college website', 'college group', 'campus'],
        friend: ['friend', 'friends', 'word of mouth', 'friend referral', 'known person'],
        google: ['google', 'google search', 'web search', 'internet search'],
        other: ['other', 'others', 'any other', 'other source'],
        whatsapp: ['whatsapp', 'whatsapp group'],
        telegram: ['telegram', 'telegram group'],
        email: ['email', 'e-mail', 'newsletter', 'mail'],
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

// domainOfInterest and interestedDomain share the same canonical synonym set.
// Point both keys at the same object to avoid maintaining duplicates.
const _DOMAIN_SYNONYMS = {
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
};
CHOICE_SYNONYMS.domainOfInterest  = _DOMAIN_SYNONYMS;
CHOICE_SYNONYMS.interestedDomain   = _DOMAIN_SYNONYMS;


// ─────────────────────────────────────────────────────────────────────────────
// SHARED FIELD-NAME ALIAS TABLE
// Maps collapsed HTML name= attribute values to their profile key equivalents.
// Used by both matchField() (fast path) and scoreMatch() (penalty/boost logic)
// so there is one source of truth instead of two near-identical copies.
// ─────────────────────────────────────────────────────────────────────────────
const NAME_ALIASES = {
    fullname:'fullName', full_name:'fullName', name:'fullName',
    email:'email', emailaddress:'email', email_address:'email',
    phone:'phone', phonenumber:'phone', phone_number:'phone',
    mobile:'phone', mobilenumber:'phone', contactnumber:'phone',
    contact:'phone', contactno:'phone',
    whatsapp:'whatsappNumber', whatsappnumber:'whatsappNumber',
    collegename:'collegeName', college:'collegeName',
    university:'collegeName', universityname:'collegeName',
    course:'course', program:'course', programme:'course',
    degree:'course', qualification:'course',
    branch:'branch', department:'branch',
    specialization:'specialization', specialisation:'specialization',
    currentyear:'currentYear', year:'currentYear',
    graduationyear:'graduationYear', passingyear:'graduationYear', passoutyear:'graduationYear',
    batchyear:'graduationYear', batch:'graduationYear', yearofgraduation:'graduationYear',
    expectedgraduationyear:'graduationYear', graduatingyear:'graduationYear',
    tenthpercent:'tenthPercent', tenthpercentage:'tenthPercent', tenthmarks:'tenthPercent',
    sscpercentage:'tenthPercent', sscmarks:'tenthPercent', matricpercentage:'tenthPercent',
    class10percentage:'tenthPercent', class10marks:'tenthPercent',
    twelfthpercent:'twelfthPercent', twelfthpercentage:'twelfthPercent', twelfthmarks:'twelfthPercent',
    hscpercentage:'twelfthPercent', hscmarks:'twelfthPercent', intermediatepercentage:'twelfthPercent',
    class12percentage:'twelfthPercent', class12marks:'twelfthPercent',
    semester:'currentSemester', currentsemester:'currentSemester',
    cgpa:'currentCgpa', gpa:'currentCgpa', currentcgpa:'currentCgpa',
    sapid:'sapId', rollno:'sapId', rollnumber:'sapId',
    enrollmentno:'sapId', registrationno:'sapId',
    collegeemail:'collegeEmail', institutionalemail:'collegeEmail',
    studentemail:'collegeEmail',
    firstname:'firstName', fname:'firstName', givenname:'firstName',
    lastname:'lastName', lname:'lastName', surname:'lastName',
    gender:'gender', dob:'dateOfBirth', dateofbirth:'dateOfBirth',
    age:'age', bloodgroup:'bloodGroup',
    currentbacklogs:'currentBacklogs', passivebacklogs:'passiveBacklogs',
    backlogs:'currentBacklogs',
    internship:'internshipProgram', internshipprogram:'internshipProgram',
    role:'internshipProgram', position:'internshipProgram',
    duration:'duration', skilllevel:'skillLevel', experience:'experience',
    company:'company', organization:'company',
    about:'aboutMe', aboutme:'aboutMe', coverletter:'aboutMe',
    github:'githubLink', githublink:'githubLink', githuburl:'githubLink',
    githubprofile:'githubLink', githubprofilelink:'githubLink',
    linkedin:'linkedinLink', linkedinlink:'linkedinLink',
    linkedinurl:'linkedinLink', linkedinprofile:'linkedinLink',
    linkedinprofilelink:'linkedinLink',
    website:'websiteLink', websitelink:'websiteLink', websiteurl:'websiteLink',
    portfolio:'websiteLink', portfoliolink:'websiteLink',
    portfoliourl:'websiteLink', portfoliowebsite:'websiteLink',
    resumelink:'githubLink', resumeurl:'githubLink', cvlink:'githubLink',
    anylink:'githubLink', sociallink:'linkedinLink',
    profilelink:'linkedinLink', profileurl:'linkedinLink',
    address:'address', city:'city', state:'state',
    zip:'zip', pincode:'zip', postalcode:'zip', country:'country',
    domainofinterest:'domainOfInterest', domain:'domainOfInterest',
    researcharea:'domainOfInterest', interedomain:'domainOfInterest',
    referralsource:'referralSource',
};

// Legacy-only keys that exist in FIELD_MAPPING purely for storage back-compat.
// They are resolved via getProfileValue() aliases and must not participate in
// the scored match loop — doing so creates spurious low-score candidates.
const LEGACY_FIELD_KEYS = new Set(['interestedDomain', 'researchInterestArea']);

// ─────────────────────────────────────────────────────────────────────────────
// ABBREVIATION EXPANSION TABLE
// Maps abbreviations to their full-form equivalents and vice-versa.
// Both sides are expanded before comparison so e.g. "CSF" in a form option
// matches a profile saved as "Cyber Security & Forensics", and vice-versa.
// ─────────────────────────────────────────────────────────────────────────────
const ABBREVIATION_MAP = {
    // Specializations
    'csf':   ['cyber security and forensics', 'cyber security & forensics', 'cybersecurity and forensics', 'cybersecurity forensics', 'cyber forensics'],
    'aiml':  ['artificial intelligence and machine learning', 'ai and machine learning', 'ai & machine learning', 'artificial intelligence & machine learning', 'ai ml'],
    'ccvt':  ['cloud computing and virtualization technology', 'cloud computing virtualization technology', 'cloud and virtualization'],
    'iot':   ['internet of things', 'internet of thing'],
    'arvr':  ['augmented reality and virtual reality', 'ar and vr', 'ar & vr', 'augmented and virtual reality'],
    'ds':    ['data science'],
    'ml':    ['machine learning'],
    'ai':    ['artificial intelligence'],
    'dl':    ['deep learning'],
    'nlp':   ['natural language processing'],
    'cv':    ['computer vision'],
    // Branches / Departments
    'cse':   ['computer science and engineering', 'computer science & engineering', 'computer science engineering'],
    'csit':  ['computer science and information technology', 'computer science & information technology'],
    'it':    ['information technology'],
    'ece':   ['electronics and communication engineering', 'electronics & communication engineering', 'electronics and communication'],
    'eee':   ['electrical and electronics engineering', 'electrical & electronics engineering'],
    'ee':    ['electrical engineering'],
    'me':    ['mechanical engineering'],
    'ce':    ['civil engineering'],
    'ae':    ['aerospace engineering', 'aeronautical engineering'],
    'che':   ['chemical engineering'],
    'bio':   ['biotechnology', 'bioinformatics', 'biological sciences'],
    'mba':   ['master of business administration'],
    'bba':   ['bachelor of business administration'],
    'bca':   ['bachelor of computer applications', 'bachelor of computer application'],
    'mca':   ['master of computer applications', 'master of computer application'],
    'btech': ['bachelor of technology', 'bachelor of engineering'],
    'mtech': ['master of technology', 'master of engineering'],
    'bsc':   ['bachelor of science'],
    'msc':   ['master of science'],
    'bcom':  ['bachelor of commerce'],
    'mcom':  ['master of commerce'],
    'ba':    ['bachelor of arts'],
    'ma':    ['master of arts'],
    'phd':   ['doctor of philosophy', 'doctorate'],
    // Common tech domains
    'ui':    ['user interface'],
    'ux':    ['user experience'],
    'uiux':  ['user interface and user experience', 'user interface', 'user experience', 'ui and ux', 'ui & ux design'],
    'qa':    ['quality assurance'],
    'sre':   ['site reliability engineering'],
    'fe':    ['front end', 'frontend'],
    'be':    ['back end', 'backend'],
    'fs':    ['full stack'],
    // Blood groups
    'a+':   ['a positive', 'a pos'],
    'a-':   ['a negative', 'a neg'],
    'b+':   ['b positive', 'b pos'],
    'b-':   ['b negative', 'b neg'],
    'ab+':  ['ab positive', 'ab pos'],
    'ab-':  ['ab negative', 'ab neg'],
    'o+':   ['o positive', 'o pos'],
    'o-':   ['o negative', 'o neg'],
    // Gender short forms
    'm':    ['male'],
    'f':    ['female'],
    // Yes/No
    'y':    ['yes'],
    'n':    ['no'],
};

// Expand abbreviations: given any text, return all known equivalent forms.
function expandAbbreviations(text) {
    const key = collapse(text);
    const expansions = new Set([normalize(text)]);
    // Direct lookup
    if (ABBREVIATION_MAP[key]) {
        ABBREVIATION_MAP[key].forEach(v => expansions.add(normalize(v)));
    }
    // Reverse lookup: text may itself be a full form
    for (const [abbr, fullForms] of Object.entries(ABBREVIATION_MAP)) {
        if (fullForms.some(f => collapse(f) === key)) {
            expansions.add(normalize(abbr));
            fullForms.forEach(f => expansions.add(normalize(f)));
        }
    }
    return Array.from(expansions);
}

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
    const valueNorm  = normalize(value);

    // 1. Exact normalized match
    if (optionNorm === valueNorm) return true;

    // 2. Canonical synonym match (CHOICE_SYNONYMS table)
    const optionToken = canonicalizeChoice(profileKey, optionText);
    const valueToken  = canonicalizeChoice(profileKey, value);
    if (optionToken === valueToken) return true;

    const optionCollapsed = collapse(optionText);
    const valueCollapsed  = collapse(value);

    // 3. Abbreviation expansion: expand both sides and cross-compare
    const optionExpansions = expandAbbreviations(optionText);
    const valueExpansions  = expandAbbreviations(value);

    for (const oe of optionExpansions) {
        for (const ve of valueExpansions) {
            if (oe === ve) return true;
            if (collapse(oe) === collapse(ve)) return true;
        }
    }

    // 4. Substring matches (require length > 2 to avoid noise)
    if (optionCollapsed.includes(valueCollapsed) && valueCollapsed.length > 2) return true;
    if (valueCollapsed.includes(optionCollapsed) && optionCollapsed.length > 2) return true;

    // 5. Expanded forms of value appear in option text (and vice-versa)
    for (const ve of valueExpansions) {
        const veColl = collapse(ve);
        if (veColl.length > 3 && optionCollapsed.includes(veColl)) return true;
    }
    for (const oe of optionExpansions) {
        const oeColl = collapse(oe);
        if (oeColl.length > 3 && valueCollapsed.includes(oeColl)) return true;
    }

    // 6. Word-level overlap: if majority of meaningful words in value appear in option
    const valueWords  = valueNorm.split(' ').filter(w => w.length > 2);
    const optionWords = optionNorm.split(' ').filter(w => w.length > 2);

    if (valueWords.length > 0 && optionWords.length > 0) {
        const matchedWords = valueWords.filter(w => optionNorm.includes(w));
        if (matchedWords.length / valueWords.length >= 0.7) return true;

        // Try matching expanded value words against option
        for (const ve of valueExpansions) {
            const veWords = normalize(ve).split(' ').filter(w => w.length > 2);
            if (veWords.length > 0) {
                const veMatched = veWords.filter(w => optionNorm.includes(w));
                if (veMatched.length / veWords.length >= 0.7) return true;
            }
        }
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

// Extended detection for custom radio elements (Google Forms, MS Forms, Typeform, SurveyMonkey, JotForm, WuFoo, etc.)
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

    // Microsoft Forms: radio options inside role="radiogroup"
    const msRadioGroup = el.closest('[role="radiogroup"]');
    if (msRadioGroup) {
        const items = Array.from(msRadioGroup.querySelectorAll(
            '[role="radio"], [role="option"], input[type="radio"], ' +
            'label, [class*="radio"], [class*="choice"], [class*="option"]'
        )).filter(isVisible);
        if (items.length > 0) return items;
    }

    // Typeform: button-based or div-based choices
    const typeformContainer = el.closest(
        '[data-qa="choice"], [class*="choice-wrapper"], ' +
        '[class*="option-wrapper"], [class*="answer-option"]'
    );
    if (typeformContainer && typeformContainer.parentElement) {
        const siblings = Array.from(typeformContainer.parentElement.children).filter(isVisible);
        if (siblings.length > 1) return siblings;
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

    // JotForm / WuFoo / SurveyMonkey: sibling li elements in a ul
    const liContainer = el.closest('li');
    if (liContainer && liContainer.parentElement && liContainer.parentElement.tagName === 'UL') {
        return Array.from(liContainer.parentElement.querySelectorAll('input[type="radio"]')).filter(isVisible);
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

    // qualification mirrors course
    if (key === 'qualification') {
        return profile.course || profile.qualification || '';
    }
    if (key === 'course' && !profile.course) {
        return profile.qualification || '';
    }

    // domainOfInterest covers interestedDomain + researchInterestArea + subject (any direction)
    if (key === 'domainOfInterest') {
        return profile.domainOfInterest || profile.interestedDomain || profile.researchInterestArea || profile.subject || '';
    }
    if (key === 'interestedDomain') {
        return profile.domainOfInterest || profile.interestedDomain || profile.subject || '';
    }
    if (key === 'researchInterestArea') {
        return profile.domainOfInterest || profile.researchInterestArea || profile.interestedDomain || profile.subject || '';
    }
    if (key === 'subject') {
        return profile.domainOfInterest || profile.subject || profile.interestedDomain || '';
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

// Generic aria-label values that describe the widget type, not the question.
// MS Forms sets aria-label="Single line text" / "Multi-line text" / "Date" etc.
const GENERIC_ARIA_LABELS = new Set([
    'single line text', 'multi-line text', 'multi line text', 'multiline text',
    'date', 'time', 'number', 'email', 'url', 'phone', 'telephone',
    'text input', 'text field', 'input field', 'answer', 'enter your answer',
    'your answer', 'response', 'text box', 'textbox',
    'dropdown', 'select', 'choice', 'rating', 'slider', 'file upload',
    'short answer', 'long answer', 'paragraph'
]);

function isGenericAriaLabel(label) {
    return GENERIC_ARIA_LABELS.has(label.toLowerCase().trim());
}

function getLabelText(el) {
    // ── 1. name attribute direct lookup (highest confidence) ────────────
    // React/shadcn forms set name="fullName", name="email" etc. — use it directly
    // before trying DOM traversal which can go wrong with generated IDs.
    // Skip generated names like "rj:-form-item" — they're React internals, not labels.
    if (el.name && !isGeneratedName(el.name)) {
        // Convert camelCase/snake_case name to spaced form for alias matching
        // e.g. "fullName" → "full name", "collegeName" → "college name"
        const spaced = el.name.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').toLowerCase().trim();
        if (spaced && spaced !== el.name.toLowerCase()) {
            return spaced;
        }
    }

    // ── 2. label[for] lookup — handle React colon IDs safely ────────────
    if (el.id) {
        let label = null;
        try {
            label = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
        } catch (_) {
            // CSS.escape may throw in some environments; fall back to attribute selector
        }
        if (!label) {
            // Fallback: iterate all labels (handles IDs with special chars like colons)
            const allLabels = document.querySelectorAll('label[for]');
            for (const lbl of allLabels) {
                if (lbl.getAttribute('for') === el.id) { label = lbl; break; }
            }
        }
        if (label) {
            // Strip any asterisk/required markers and badge spans from the label text
            const clone = label.cloneNode(true);
            clone.querySelectorAll('[aria-hidden],[class*="badge"],[class*="required"],[class*="tag"]').forEach(n => n.remove());
            const text = clone.textContent.replace(/\s*\*\s*$/, '').trim();
            if (text) return text;
        }
    }

    // ── 3. aria-labelledby (points to the real question title element) ──
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

    // ── 4. aria-label (only if not a generic widget descriptor) ─────────
    const ariaLabel = el.getAttribute('aria-label');
    if (ariaLabel && !isGenericAriaLabel(ariaLabel)) return ariaLabel.trim();

    // ── 5. Wrapping <label> ──────────────────────────────────────────────
    const wrappingLabel = el.closest('label');
    if (wrappingLabel) {
        const clone = wrappingLabel.cloneNode(true);
        clone.querySelectorAll('input,textarea,select').forEach(n => n.remove());
        const text = clone.textContent.replace(/\s*\*\s*$/, '').trim();
        if (text) return text;
    }

    // ── 6. shadcn/ui form-item pattern ───────────────────────────────────
    // shadcn wraps: <div class="...form-item"> <label> ... </label> <input .../> </div>
    // The label is typically the immediately preceding sibling of the input wrapper,
    // or a sibling within the same [data-slot="form-item"] container.
    const formItem = el.closest('[data-slot="form-item"], [class*="form-item"], [class*="FormItem"], [class*="form_item"]');
    if (formItem) {
        const labelEl = formItem.querySelector('label');
        if (labelEl && !labelEl.contains(el)) {
            const clone = labelEl.cloneNode(true);
            clone.querySelectorAll('[aria-hidden],[class*="badge"],[class*="required"]').forEach(n => n.remove());
            const text = clone.textContent.replace(/\s*\*\s*$/, '').trim();
            if (text) return text;
        }
    }

    // ── 7. radiogroup aria-label/labelledby ─────────────────────────────
    const radioGroup = el.closest('[role="radiogroup"]');
    if (radioGroup) {
        const groupLabelledBy = radioGroup.getAttribute('aria-labelledby');
        if (groupLabelledBy) {
            const ids = groupLabelledBy.split(/\s+/);
            let text = '';
            ids.forEach(id => {
                const labelEl = document.getElementById(id);
                if (labelEl) text += ' ' + labelEl.textContent.trim();
            });
            if (text.trim()) return text.trim();
        }
        const groupLabel = radioGroup.getAttribute('aria-label');
        if (groupLabel && !isGenericAriaLabel(groupLabel)) return groupLabel.trim();
    }

    // ── 8. MS Forms / Typeform question containers ───────────────────────
    const questionItem = el.closest('[data-automation-id="questionItem"], [data-automation-id]');
    if (questionItem) {
        const titleEl = questionItem.querySelector(
            '[data-automation-id="questionTitle"], ' +
            '[class*="title"], [class*="question-title"], ' +
            'legend, h1, h2, h3, h4, h5'
        );
        if (titleEl && !titleEl.contains(el)) {
            const text = titleEl.textContent.trim();
            if (text && text.length < 120) return text;
        }
    }

    const typeformQuestion = el.closest('[data-qa="question"], [class*="question-content"]');
    if (typeformQuestion) {
        const titleEl = typeformQuestion.querySelector('h1, h2, h3, [class*="title"], [class*="question-title"]');
        if (titleEl && !titleEl.contains(el)) {
            const text = titleEl.textContent.trim();
            if (text && text.length < 150) return text;
        }
    }

    const smQuestion = el.closest('[class*="survey-question"], [class*="question-block"]');
    if (smQuestion) {
        const titleEl = smQuestion.querySelector('[class*="question-title"], [class*="question-text"], legend, h2, h3');
        if (titleEl && !titleEl.contains(el)) {
            const text = titleEl.textContent.trim();
            if (text && text.length < 150) return text;
        }
    }

    return '';
}

function getNearbyText(el) {
    const texts = [];
    const fieldset = el.closest('fieldset');
    if (fieldset) {
        const legend = fieldset.querySelector('legend');
        if (legend) texts.push(legend.textContent.trim());
    }

    // MS Forms: aria-labelledby on the input points to the question title element
    const ariaLabelledBy = el.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
        ariaLabelledBy.split(/\s+/).forEach(id => {
            const labelEl = document.getElementById(id);
            if (labelEl) texts.push(labelEl.textContent.trim());
        });
    }

    // MS Forms: question container has data-automation-id="questionItem"
    const questionItem = el.closest('[data-automation-id="questionItem"], [data-automation-id]');
    if (questionItem) {
        const titleEl = questionItem.querySelector(
            '[data-automation-id="questionTitle"], [class*="title"], legend, h1, h2, h3, h4, h5'
        );
        if (titleEl && !titleEl.contains(el)) {
            const text = titleEl.textContent.trim();
            if (text && text.length < 120) texts.push(text);
        }
    }

    // MS Forms / Typeform: radiogroup aria-label or aria-labelledby IS the question title
    const radioGroup = el.closest('[role="radiogroup"]');
    if (radioGroup) {
        const groupLabelledBy = radioGroup.getAttribute('aria-labelledby');
        if (groupLabelledBy) {
            groupLabelledBy.split(/\s+/).forEach(id => {
                const labelEl = document.getElementById(id);
                if (labelEl) texts.push(labelEl.textContent.trim());
            });
        }
        const groupLabel = radioGroup.getAttribute('aria-label');
        if (groupLabel && !isGenericAriaLabel(groupLabel)) texts.push(groupLabel.trim());
    }

    // Google Forms question heading detection — only from the immediate question container
    const gFormQuestion = el.closest(
        '.freebirdFormviewerComponentsQuestionBaseRoot, ' +
        '.freebirdFormviewerComponentsQuestionRadioRoot'
    );
    if (gFormQuestion) {
        const heading = gFormQuestion.querySelector(
            '.freebirdFormviewerComponentsQuestionBaseTitle, ' +
            '[role="heading"], .exportItemTitle, .M7eMe'
        );
        if (heading) texts.push(heading.textContent.trim());
    }

    // Typeform / SurveyMonkey question text
    const typeformQuestion = el.closest('[data-qa="question"], [class*="question-content"], [class*="survey-question"], [class*="question-block"]');
    if (typeformQuestion) {
        const titleEl = typeformQuestion.querySelector('h1, h2, h3, [class*="title"], [class*="question-title"], [class*="question-text"], legend');
        if (titleEl && !titleEl.contains(el)) {
            const text = titleEl.textContent.trim();
            if (text && text.length < 150) texts.push(text);
        }
    }

    // For radio/checkbox inputs: the question text ("Do you have any current backlogs?")
    // is almost always a previous sibling element of the radio group's container,
    // NOT a descendant of the radio input's own parent.
    // Strategy: walk up, then at each level scan PREVIOUS SIBLINGS for text.
    const isRadioOrCheckbox = el.type === 'radio' || el.type === 'checkbox' ||
        el.getAttribute('role') === 'radio' || el.getAttribute('role') === 'checkbox';

    if (isRadioOrCheckbox) {
        // First: try value attribute as the choice label (e.g. "Yes" / "No")
        if (el.value && el.value.length < 40) texts.push(el.value);

        // Walk up the DOM looking for the question text in previous siblings
        let cur = el.parentElement;
        let levels = 0;
        const maxLevels = 10;

        while (cur && levels < maxLevels) {
            // Check previous siblings of the current container for question text
            let sib = cur.previousElementSibling;
            let sibChecked = 0;
            while (sib && sibChecked < 4) {
                const text = sib.textContent.trim();
                if (text && text.length > 4 && text.length < 150) {
                    texts.push(text);
                }
                sib = sib.previousElementSibling;
                sibChecked++;
            }

            // Also check if the current container's parent has direct text children
            // (some forms wrap the question in a <p> directly inside the form row)
            const directKids = Array.from(cur.children);
            directKids.forEach(kid => {
                if (kid.contains(el)) return; // skip the branch containing our input
                const text = kid.textContent.trim();
                if (text && text.length > 4 && text.length < 150) texts.push(text);
            });

            // If we've collected enough context, stop
            if (texts.filter(t => t.length > 5).length >= 3) break;

            cur = cur.parentElement;
            levels++;
        }
    }

    // Only crawl 4 levels up (was 10 — too many levels pulled in page section titles)

    let current = el.parentElement;
    let levels = 0;
    while (current && levels < 4) {
        // Only pick up labels and small headings — NOT h1/h2/h3 which are page/section titles
        const labels = current.querySelectorAll(
            'label, .label, .form-label, .input-label, legend, ' +
            '.freebirdFormviewerComponentsQuestionBaseTitle, ' +
            '.exportItemTitle, .M7eMe'
        );
        labels.forEach(label => {
            const text = label.textContent.trim();
            // Cap at 80 chars — real field labels are short; long text is a section title
            if (text && text.length < 80) texts.push(text);
        });

        const placeholder = current.getAttribute('placeholder');
        if (placeholder) texts.push(placeholder);

        if (current.getAttribute('role') === 'listitem' || current.classList.contains('geS5n')) {
            const content = current.textContent.trim();
            if (content) texts.push(content.substring(0, 80));
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
    if (el.disabled || el.type === 'hidden') return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    // offsetParent is null for fixed/sticky positioned elements and in some SPA containers
    // (MS Forms, Typeform etc.) — use getBoundingClientRect as fallback
    if (el.offsetParent === null) {
        const rect = el.getBoundingClientRect();
        // If it has zero size it's truly hidden; otherwise it's just a special layout
        if (rect.width === 0 && rect.height === 0) return false;
    }
    return true;
}

function detectFields() {
    const selector = [
        'input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"]):not([type="image"]):not([type="file"]):not([type="checkbox"])',
        'input[type="radio"]',
        'input[type="checkbox"]',
        'textarea',
        'select',
        '[role="radio"]',
        '[role="option"]',
        '[role="textbox"]',       // MS Forms / Typeform text inputs
        '[role="combobox"]',      // MS Forms dropdowns
        // Google Forms circular/custom option elements
        '.freebirdFormviewerComponentsQuestionRadioChoice',
        '.docssharedWizToggleLabeledContainer',
        // Typeform button-based choices
        '[data-qa="choice"]',
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
    // ── FAST PATH: direct name= attribute match ──────────────────────────
    // React/shadcn forms set name="fullName", name="email", name="collegeName" etc.
    // Only trust semantic names — skip React-generated ones like "rj:-form-item".
    if (meta.name && !isGeneratedName(meta.name)) {
        const nameCollapsed = collapse(meta.name);
        const keyCollapsed  = collapse(profileKey);

        // Exact name → key match
        if (nameCollapsed === keyCollapsed) return 500;

        // Common React form name aliases — use the shared NAME_ALIASES table
        const mappedKey = NAME_ALIASES[nameCollapsed];
        if (mappedKey && mappedKey === profileKey) return 480;
        // If name maps to a *different* key, penalise this candidate heavily
        if (mappedKey && mappedKey !== profileKey) return -200;
    }

    // Split sources into primary (high trust) and secondary (low trust)
    // Exclude React-generated names (e.g. "rj:-form-item") from scoring — they're noise
    const cleanName = (meta.name && !isGeneratedName(meta.name)) ? meta.name : '';
    const primarySources = [meta.label, meta.placeholder, cleanName, meta.id, meta.ariaLabel, meta.autoComplete].filter(Boolean);
    const secondarySources = [meta.nearbyText].filter(Boolean);

    const aliases = FIELD_MAPPING[profileKey] || [];
    const aliasTokensNorm = aliases.map(normalize);
    const aliasTokensColl = aliases.map(collapse);
    const keyToken = collapse(profileKey);

    // Combined for penalty checks only
    const combinedSource = [...primarySources, ...secondarySources].join(' ').toLowerCase();
    const primaryCombined = primarySources.join(' ').toLowerCase();

    let score = 0;

    // Score primary sources at full weight
    for (const source of primarySources) {
        const normalizedSource = normalize(source);
        const collapsedSource = collapse(source);
        if (!normalizedSource) continue;

        if (collapsedSource === keyToken) score += 120;
        else if (collapsedSource.includes(keyToken)) score += 65;

        for (let i = 0; i < aliasTokensColl.length; i++) {
            const aliasNorm = aliasTokensNorm[i];
            const aliasColl = aliasTokensColl[i];

            if (collapsedSource === aliasColl) { score += 140; break; }
            if (normalizedSource === aliasNorm) { score += 130; break; }
            if (aliasColl.length > 3 && collapsedSource.includes(aliasColl)) { score += 80; }
            if (collapsedSource.length > 3 && aliasColl.includes(collapsedSource)) { score += 60; }

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

    // Score nearbyText at reduced weight (max 30% of primary contribution)
    for (const source of secondarySources) {
        const normalizedSource = normalize(source);
        const collapsedSource = collapse(source);
        if (!normalizedSource) continue;

        // Only count if primary sources didn't already give a strong signal (avoids double-counting)
        // Use a fraction of the normal scoring — nearbyText is context, not identity
        for (let i = 0; i < aliasTokensColl.length; i++) {
            const aliasNorm = aliasTokensNorm[i];
            const aliasColl = aliasTokensColl[i];

            if (collapsedSource === aliasColl) { score += 40; break; }
            if (normalizedSource === aliasNorm) { score += 35; break; }
            if (aliasColl.length > 3 && collapsedSource.includes(aliasColl)) { score += 20; }
            if (collapsedSource.length > 3 && aliasColl.includes(collapsedSource)) { score += 15; }
        }
    }

    // Context flags based on combined (for penalty/boost logic)
    const hasCollegeEmailContext = /college|university|institution|institute|edu\b|campus|student email|student mail|stud id|student id|institutional|academic email|official email/.test(combinedSource);
    const hasInstitutionNameContext = /college name|university name|institution name|institute name|school name|academic institution|college\/university|university\/college|institution/.test(combinedSource);
    const hasPersonalEmailContext = /personal|private|primary|home/.test(combinedSource);

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

    // Email disambiguation — must be based on primary sources to be reliable
    const emailPrimaryContext = primarySources.join(' ').toLowerCase();
    // hasCollegeEmailPrimary: MUST have both an institution keyword AND 'email'/'mail'
    // Prevents "College/University" name field (no 'email' in label) from scoring as collegeEmail
    const hasCollegeEmailPrimary = (
        /college|university|institution|institute|edu\b|campus|student|institutional|upes|\bstu\b/.test(emailPrimaryContext) &&
        /\bemail\b|\be-mail\b|\bmail\b/.test(emailPrimaryContext)
    );
    const hasPersonalEmailPrimary = /personal|private|primary|home/.test(emailPrimaryContext);

    if (profileKey === 'collegeEmail' && hasCollegeEmailPrimary) score += 180;
    if (profileKey === 'collegeEmail' && hasPersonalEmailPrimary) score -= 100;
    if (profileKey === 'email' && hasPersonalEmailPrimary) score += 120;
    if (profileKey === 'email' && hasCollegeEmailPrimary) score -= 180;

    // Use full combinedSource for institution name context (it's a strong structural signal)
    if (profileKey === 'collegeName' && hasInstitutionNameContext) score += 220;
    if (profileKey === 'fullName' && hasInstitutionNameContext) score -= 220;

    // CRITICAL: If the primary label/id/name clearly says "email" or "mail",
    // heavily penalise collegeName and fullName to prevent "UPES" filling Email field
    const primarySaysEmail = /\bemail\b|\bmail\b/i.test(primaryCombined);
    if (primarySaysEmail && profileKey === 'collegeName') score -= 300;
    if (primarySaysEmail && profileKey === 'fullName') score -= 200;
    if (primarySaysEmail && profileKey === 'email') score += 80;

    // If primary label clearly says "name" but NOT "college/university name",
    // penalise collegeName to avoid name fields filling with institution name
    const primarySaysName = /\bname\b/i.test(primaryCombined);
    const primarySaysCollegeName = /college.*name|university.*name|institution.*name|institute.*name/i.test(primaryCombined);
    if (primarySaysName && !primarySaysCollegeName && profileKey === 'collegeName') score -= 150;

    // ── HARD GUARD: collegeName must ONLY win if label/id/name/placeholder
    // explicitly mentions an institution. Without that signal it should never fill
    // contact numbers, links, source dropdowns, or anything else.
    if (profileKey === 'collegeName') {
        const hasExplicitInstitutionSignal = /college|university|institution|institute|school/i.test(primaryCombined);
        if (!hasExplicitInstitutionSignal) return -500;
    }

    // ── HARD GUARD: sapId must NEVER win on a phone/contact/mobile/whatsapp field ─
    // "contact number", "mobile number", "phone" → always phone, never sapId
    if (profileKey === 'sapId') {
        const isPhoneContext = /phone|mobile|contact.*num|contact.*no\b|whatsapp|call|sms|isd/i.test(primaryCombined);
        if (isPhoneContext) return -500;
    }

    // ── BOOST: phone fields with phone context ──────────────────────────
    if (profileKey === 'phone') {
        const isPhoneContext = /phone|mobile|contact.*num|contact.*no\b|whatsapp|call|sms|isd/i.test(primaryCombined);
        if (isPhoneContext) score += 200;
    }

    // ── HARD GUARD: fullName should never fill phone/number/link/url fields ──
    if (profileKey === 'fullName') {
        const isPhoneOrLink = /phone|mobile|contact.*num|whatsapp|linkedin|github|website|portfolio|url\b|link\b/i.test(primaryCombined);
        if (isPhoneOrLink) return -500;
    }

    // ── HARD GUARD: phone/mobile should never win if label says "name" ────
    if (profileKey === 'phone') {
        const labelSaysName = /\bname\b/i.test(primaryCombined) && !/number|num|no\b/i.test(primaryCombined);
        if (labelSaysName) return -500;
    }

    // Input type bonuses
    if (profileKey === 'phone' && meta.type === 'tel') score += 30;
    if (profileKey === 'email' && meta.type === 'email') score += 25;
    if (profileKey === 'dateOfBirth' && meta.type === 'date') score += 50;
    if (profileKey === 'gender' && (meta.type === 'radio' || meta.tagName === 'select')) score += 30;
    if (profileKey === 'aboutMe' && meta.tagName === 'textarea') score += 20;
    if (profileKey === 'experience' && meta.tagName === 'textarea') score += 10;
    // URL-type input: strongly favour link fields, hard-penalise non-link fields
    if (meta.type === 'url') {
        if (['githubLink','linkedinLink','websiteLink'].includes(profileKey)) score += 80;
        if (['collegeName','fullName','phone','email','sapId'].includes(profileKey)) return -500;
    }
    // tel-type input: strongly favour phone fields
    if (meta.type === 'tel') {
        if (['collegeName','fullName','email','githubLink','linkedinLink'].includes(profileKey)) return -500;
    }
    // Radio/option elements must never match link-type profile keys —
    // choice labels like "LinkedIn" would otherwise score 140+ for linkedinLink
    if (meta.type === 'radio' || meta.role === 'radio' || meta.role === 'option') {
        if (['githubLink','linkedinLink','websiteLink','twitterLink'].includes(profileKey)) return -500;
    }

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

function isGeneratedName(name) {
    // React/Next.js generated names like "rj:-form-item", "r1:-form-item", ":r0:", etc.
    // These contain colons or are purely numeric/random — not semantic field names.
    if (!name || name.length < 2) return true;
    if (/[:\[\]{}]/.test(name)) return true;          // contains colon, brackets
    if (/^\d+$/.test(name)) return true;              // purely numeric
    if (/^[a-z]{1,2}\d+/.test(name)) return true;    // e.g. "r1", "rj3"
    return false;
}

function matchField(meta, profile) {
    // ── FAST PATH: React/shadcn direct name= attribute ───────────────────
    // Only trust the name attribute if it looks like a real semantic field name.
    if (meta.name && !isGeneratedName(meta.name)) {
        const nc = collapse(meta.name);
        // Use the shared NAME_ALIASES table (single source of truth)
        const mappedKey = NAME_ALIASES[nc];
        if (mappedKey) {
            const val = getProfileValue(profile, mappedKey);
            if (String(val || '').trim()) return mappedKey;
            // Name maps to a key but it's empty — return null so we don't fill wrong
            return null;
        }

        // Also check direct key collapse match
        for (const key of Object.keys(FIELD_MAPPING)) {
            if (collapse(key) === nc) {
                const val = getProfileValue(profile, key);
                if (String(val || '').trim()) return key;
                return null;
            }
        }
    }

    const academicContext = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel, meta.nearbyText]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    // ── FAST PATH: explicit LinkedIn-only field ─────────────────────────────
    // If the label/context specifically calls out LinkedIn (and not GitHub as primary signal),
    // fill linkedinLink — even if the label also says "url" or "link".
    if (/linkedin/i.test(academicContext) && !/github/i.test(academicContext) &&
        !/phone|mobile|contact|number|num\b|whatsapp|email|mail|name\b|college|university/i.test(academicContext)) {
        const li = String(getProfileValue(profile, 'linkedinLink') || '').trim();
        if (li && li.toLowerCase() !== 'na') return 'linkedinLink';
    }

    // ── FAST PATH: explicit GitHub-only field ────────────────────────────────
    if (/github/i.test(academicContext) && !/linkedin/i.test(academicContext) &&
        !/phone|mobile|contact|number|num\b|whatsapp|email|mail|name\b|college|university/i.test(academicContext)) {
        const gh = String(getProfileValue(profile, 'githubLink') || '').trim();
        if (gh && gh.toLowerCase() !== 'na') return 'githubLink';
    }

    // ── FAST PATH: combined link fields (Resume/LinkedIn/GitHub/Portfolio) ─
    // These appear on many internship forms as a single "any link" field.
    // Prefer githubLink > linkedinLink > websiteLink depending on what's filled.
    if (/resume|linkedin|github|portfolio|cv\b|link\b|url\b/i.test(academicContext) &&
        !/phone|mobile|contact|number|num\b|whatsapp|email|mail|name\b|college|university/i.test(academicContext)) {
        const gh = String(getProfileValue(profile, 'githubLink') || '').trim();
        const li = String(getProfileValue(profile, 'linkedinLink') || '').trim();
        const ws = String(getProfileValue(profile, 'websiteLink') || '').trim();
        if (gh && gh.toLowerCase() !== 'na') return 'githubLink';
        if (li && li.toLowerCase() !== 'na') return 'linkedinLink';
        if (ws && ws.toLowerCase() !== 'na') return 'websiteLink';
    }

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

    // ── FAST PATH: standalone "College" / "University" field (no "email"/"mail" in label) ──
    // When a form has a field labeled just "College" or "University" it means the institution
    // name — not the college email. Guard: must NOT have email/mail context in primary sources.
    const primaryOnlyContext = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
    if (
        /\b(college|university|institution|institute)\b/.test(primaryOnlyContext) &&
        !/\bemail\b|\bmail\b/.test(primaryOnlyContext)
    ) {
        return String(getProfileValue(profile, 'collegeName') || '').trim() ? 'collegeName' : null;
    }

    if (/(^|\b)(10th|tenth|ssc|matric|class\s*x\b|class\s*10\b|secondary\s+school|secondary\s+board)\b/.test(academicContext) &&
        /percent|marks|score|cgpa|result|grade/.test(academicContext)) {
        return String(getProfileValue(profile, 'tenthPercent') || '').trim() ? 'tenthPercent' : null;
    }

    if (/(^|\b)(12th|twelfth|hsc|intermediate|class\s*xii\b|class\s*12\b|higher\s+secondary|senior\s+secondary|plus\s*two|\+2|puc)\b/.test(academicContext) &&
        /percent|marks|score|cgpa|result|grade/.test(academicContext)) {
        return String(getProfileValue(profile, 'twelfthPercent') || '').trim() ? 'twelfthPercent' : null;
    }

    if (/graduation\s*year|graduating\s*(in|year)|pass\s*out\s*year|passing\s*year|year\s*of\s*(graduation|passing|completion)|batch\s*year|expected\s*(graduation|passing)|convocation\s*year/.test(academicContext)) {
        return String(getProfileValue(profile, 'graduationYear') || '').trim() ? 'graduationYear' : null;
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
        const hasCurrentContext = /current|active|pending|standing|present|ongoing|any current|have any/.test(academicContext);

        if (hasCombinedContext && String(getProfileValue(profile, 'combinedBacklogs') || '').trim()) {
            return 'combinedBacklogs';
        }

        if (hasPassiveContext && !hasCurrentContext && String(getProfileValue(profile, 'passiveBacklogs') || '').trim()) {
            return 'passiveBacklogs';
        }

        // Default to currentBacklogs for any backlog context (covers plain "backlogs?" questions)
        if (String(getProfileValue(profile, 'currentBacklogs') || '').trim()) {
            return 'currentBacklogs';
        }
    }

    // ── Primary-only email context (label + placeholder + name + id + ariaLabel, no nearbyText) ──
    // Using only primary sources prevents college/university label text from triggering email heuristics
    const emailPrimaryContext = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    const emailContext = [meta.label, meta.placeholder, meta.name, meta.id, meta.ariaLabel, meta.nearbyText]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

    // Strong college email heuristic — use PRIMARY sources only to avoid false positives
    // e.g. College/University text field has 'college' in label but 'mail' only in a nearby filled value
    if (/college|university|institution|institute|edu\b|campus|student\s+email|student\s+mail|stu\s+email|stu\s+mail|stu\s+id|stud\s+id|student\s+id|institutional|academic\s+email|official\s+email|upes\s+email|upes\s+mail/.test(emailPrimaryContext) &&
        /email|mail/.test(emailPrimaryContext)) {
        return String(getProfileValue(profile, 'collegeEmail') || '').trim() ? 'collegeEmail' : null;
    }

    // Strong personal email heuristic
    if (/personal|private|primary|home/.test(emailContext) && /email|mail/.test(emailContext)) {
        return String(getProfileValue(profile, 'email') || '').trim() ? 'email' : null;
    }

    // Plain email label with no institution context → personal email
    const isPlainEmailField = /\b(email|e-mail|e mail|mail)\b/.test(emailContext) &&
        !/college|university|institution|institute|edu\b|campus|student\s*email|student\s*mail|stu\s*email|stu\s*mail|stu\s*id|student\s*id|institutional|academic|official\s*email|official\s*mail|upes/.test(emailContext);
    if (isPlainEmailField) {
        return String(getProfileValue(profile, 'email') || '').trim() ? 'email' : null;
    }

    let bestKey = null;
    let bestScore = 60;  // raised from 45 — reduces false positives on ambiguous short labels
    let secondScore = 0;

    for (const key of Object.keys(FIELD_MAPPING)) {
        // Skip legacy back-compat keys — they are resolved via getProfileValue aliases
        // and should never compete as independent match candidates.
        if (LEGACY_FIELD_KEYS.has(key)) continue;
        const value = getProfileValue(profile, key);
        if (!String(value || '').trim()) continue;
        const score = scoreMatch(meta, key);
        if (score > bestScore) {
            secondScore = bestScore;
            bestScore = score;
            bestKey = key;
        } else if (score > secondScore) {
            secondScore = score;
        }
    }

    // If the top two candidates are within 25 points of each other on a weak signal,
    // don't fill — ambiguity is too high and filling wrong is worse than not filling
    if (bestKey && bestScore < 120 && (bestScore - secondScore) < 25) {
        return null;
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
    el.dispatchEvent(new Event('input',  { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new Event('blur',   { bubbles: true }));
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
            radio.textContent?.trim(),
            radio.getAttribute('data-value'),
            radio.getAttribute('data-answer'),
            radio.getAttribute('data-label'),
            // Next sibling text (common in custom radio UIs)
            radio.nextElementSibling?.textContent?.trim(),
            radio.parentElement?.textContent?.trim(),
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
        if (!target.checked) {
            target.checked = true;
            target.dispatchEvent(new Event('input',  { bubbles: true }));
            target.dispatchEvent(new Event('change', { bubbles: true }));
            target.dispatchEvent(new Event('click',  { bubbles: true }));
        }
        return true;
    }

    // Typeform / custom button choices (not necessarily input/role=radio)
    if (target.tagName && ['button', 'div', 'li', 'span', 'a'].includes(target.tagName.toLowerCase())) {
        target.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
        target.dispatchEvent(new MouseEvent('mouseup',   { bubbles: true, cancelable: true }));
        target.click();
        target.dispatchEvent(new Event('input',  { bubbles: true }));
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

    // Already ISO — use directly.
    if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
        setNativeValue(el, str);
        return true;
    }

    // Treat d/m/yyyy as dd/mm/yyyy (day-first), which is the dominant format
    // on Indian internship and certificate forms. A value like "08/12/1999"
    // becomes 1999-12-08 (December 8), not August 12.
    const dmyMatch = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmyMatch) {
        const [, d, m, y] = dmyMatch;
        setNativeValue(el, `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`);
        return true;
    }

    // Fallback: let the browser parse natural-language dates ("12 Dec 1999").
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
        } else if (meta.role === 'textbox' || meta.role === 'combobox') {
            // MS Forms / Typeform contenteditable or ARIA textboxes
            if (el.isContentEditable) {
                el.focus();
                // execCommand works better with React/Vue/Angular controlled inputs
                document.execCommand('selectAll', false, null);
                document.execCommand('insertText', false, String(value));
                filled = true;
            } else {
                setNativeValue(el, value);
                filled = true;
            }
        } else {
            setNativeValue(el, value);
            filled = true;
        }

        if (filled) {
            el.dispatchEvent(new Event('input',   { bubbles: true }));
            el.dispatchEvent(new Event('change',  { bubbles: true }));
            el.dispatchEvent(new KeyboardEvent('keyup',   { bubbles: true }));
            el.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
            el.dispatchEvent(new Event('blur',    { bubbles: true }));
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

        // For choice elements (radio/select options), build a synthetic meta
        // that uses the QUESTION text as the primary signal, not the option label.
        // The option label (e.g. "LinkedIn", "Beginner", "Male") belongs to the
        // answer choices — using it as a field identifier causes false matches
        // (e.g. "LinkedIn" option → linkedinLink key instead of referralSource).
        const matchMeta = (isChoice && meta.nearbyText)
            ? { ...meta, label: meta.nearbyText, nearbyText: '', ariaLabel: meta.ariaLabel && !isGenericAriaLabel(meta.ariaLabel) ? meta.ariaLabel : '' }
            : meta;

        const profileKey = matchField(matchMeta, profile);
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
