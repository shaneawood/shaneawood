// All site copy lives here so the pages stay presentational.
// Update this file to change titles, publications, courses, or service roles.

export const profile = {
  name: 'Shane A. Wood',
  monogram: 'S.A.W.',
  title: 'Associate Professor & Director of First-Year Composition',
  department: 'Department of Writing and Rhetoric',
  institution: 'University of Central Florida',
  email: 'shane.wood@ucf.edu',
  socials: [
    { label: 'Twitter / X', handle: '@shaneawood', href: 'https://twitter.com/shaneawood' },
    { label: 'Instagram', handle: '@shaneawood', href: 'https://instagram.com/shaneawood' },
  ],
  photo: '/img/shane-wood.jpg',
  interests: ['writing assessment', 'multimodality', 'writing program administration'],
}

export const nowRoles = [
  {
    role: 'Director of First-Year Composition',
    org: 'University of Central Florida',
    since: '2023',
  },
  {
    role: 'Communications Editor',
    org: 'Composition Forum',
    since: '2019',
    note: 'a journal of pedagogical theory in rhetoric and composition',
  },
  {
    role: 'Creator & Host',
    org: 'Pedagogue podcast',
    since: '2019',
  },
  {
    role: 'Executive Board Member',
    org: 'Council of Writing Program Administrators',
    since: '2026',
  },
]

export const education = [
  { degree: 'Ph.D.', year: 2018, field: 'English, Rhetoric and Composition', school: 'University of Kansas' },
  {
    degree: 'M.A.',
    year: 2014,
    field: 'English, Composition Theory',
    school: 'California State University, Fresno',
  },
  {
    degree: 'B.A.',
    year: 2011,
    field: 'English Literature (minor in Business Administration)',
    school: 'Western Kentucky University',
  },
]

export type Book = {
  title: string
  subtitle: string
  authors: string
  year: number
  series: string
  cover: string
  coverWidth: number
  coverHeight: number
  openAccess: string
  store?: { label: string; href: string }
  blurb: string
  highlights: { label: string; name: string; detail: string }[]
  reviews?: { venue: string; reviewer: string; href: string }[]
}

export const books: Book[] = [
  {
    title: 'On Response',
    subtitle: 'Raciolinguistic Justice and Responding to Student Writing',
    authors: 'with Emily K. Suh',
    year: 2026,
    series: 'Perspectives on Writing, WAC Clearinghouse & University Press of Colorado',
    cover: '/img/on-response.jpg',
    coverWidth: 450,
    coverHeight: 675,
    openAccess: 'https://wacclearinghouse.org/books/perspectives/raciolinguistic/',
    blurb:
      'A theoretical and pedagogical framework for feedback as a raciolinguistically just practice. Bridging writing studies, literacy studies, and developmental literacy, it builds on antiracist writing assessment, critical language awareness, and culturally sustaining pedagogies to reimagine how teachers read and respond to student writing.',
    highlights: [
      {
        label: 'Theory',
        name: 'Framework',
        detail:
          'Response as a tool for critical self-reflexivity and listening that challenges monolingual norms.',
      },
      {
        label: 'Study',
        name: 'Research',
        detail:
          'Think-aloud interviews with instructors and students at two Hispanic-Serving Institutions.',
      },
      {
        label: 'Practice',
        name: 'Guidance',
        detail:
          'Guiding practices that affirm student voices, multiple literacies, and co-constructed assessment.',
      },
    ],
  },
  {
    title: 'Teachers Talking Writing',
    subtitle: 'Perspectives on Places, Pedagogies, and Programs',
    authors: '',
    year: 2023,
    series: 'NCTE/CCCC Studies in Writing and Rhetoric, with the WAC Clearinghouse',
    cover: '/img/teachers-talking-writing.jpg',
    coverWidth: 908,
    coverHeight: 1421,
    openAccess: 'https://wacclearinghouse.org/books/swr/talking/',
    store: {
      label: 'Buy from NCTE',
      href: 'https://store.ncte.org/book/teachers-talking-writing-perspectives-places-pedagogies-and-programs',
    },
    blurb:
      'A collection of conversations about the theory and teaching of writing in postsecondary contexts. Built from the Pedagogue podcast, it gathers 52 perspectives on composition and rhetoric across institutions and positions, and can be read as an anthology of twenty-first-century practices and pedagogies.',
    highlights: [
      {
        label: 'Part I',
        name: 'Places',
        detail:
          'Where writing is taught: two-year colleges, HBCUs, Hispanic-Serving Institutions, and more.',
      },
      {
        label: 'Part II',
        name: 'Pedagogies',
        detail:
          'Classroom writing assessment, multimodality, social justice, disability studies, and community literacies.',
      },
      {
        label: 'Part III',
        name: 'Programs',
        detail:
          'Writing programs and administrative roles: basic writing, second-language writing, WAC, and writing centers.',
      },
    ],
    reviews: [
      {
        venue: 'Teaching English in the Two-Year College',
        reviewer: 'Sarah Z. Johnson',
        href: 'https://publicationsncte.org/content/journals/10.58680/tetyc2024522231',
      },
      {
        venue: 'Journal of Writing Assessment',
        reviewer: 'Virginia M. Schwarz',
        href: 'https://jwareadinglist.ucdavis.edu/news/review-shane-woods-teachers-talking-writing-perspectives-places-pedagogies-and-programs',
      },
      {
        venue: 'Composition Studies',
        reviewer: 'Duane Roen',
        href: 'https://compstudiesjournal.com/wp-content/uploads/2025/01/roen-review.pdf',
      },
      {
        venue: 'Kairos',
        reviewer: 'Crystal VanKooten',
        href: 'https://kairos.technorhetoric.net/30.2/reviews/vankooten/index.html',
      },
    ],
  },
]

export const pedagogue = {
  url: 'https://www.pedagoguepodcast.com/',
  tagline: 'A podcast about teaching writing.',
  about:
    'More than 180 episodes of conversations with established and emerging teacher-scholars in composition and rhetoric. Since 2024, Pedagogue has also shared audio versions of articles from writing studies journals as an open-access resource.',
  stats: [
    { value: '130,500+', label: 'streams' },
    { value: '50+', label: 'countries' },
    { value: '1,200+', label: 'Apple & Spotify subscribers' },
  ],
  awards: [
    { year: 2021, name: 'John Lovas Award', from: 'Kairos' },
    {
      year: 2019,
      name: 'Michelle Kendrick Outstanding Digital Production Award',
      from: 'Computers and Composition',
    },
  ],
}

/* ------------------------------------------------------------------ */
/* Research                                                            */
/* ------------------------------------------------------------------ */

export const researchInterests = [
  'Multimodality',
  'Teacher Response',
  'Raciolinguistic Justice',
  'Podcasting & Sonic Rhetorics',
  'Writing Assessment',
  'Antiracist Pedagogies',
  'Writing Program Administration',
  'Composition Theory',
  'Digital Rhetorics',
  'Rhetorical Genre Studies',
]

export type PubType = 'Book' | 'Article' | 'Chapter' | 'Special Issue' | 'Invited'

export type Publication = {
  year: number | 'Forthcoming'
  type: PubType
  authors: string
  title: string
  venue: string
  details?: string
  href?: string
}

export const publications: Publication[] = [
  {
    year: 'Forthcoming',
    type: 'Article',
    authors:
      'Wood, Shane A., Mansfield, Lissa Pompos, Baker, Pamela, Dees, Stuart, Gardiakos, Nikolas, Kennedy, Vee, Proulx, Emily, Faulconer, Meeghan, Macalintal, Erica, & Tanemura, Kenneth',
    title: 'Sustaining Sociocultural Values in First-Year Composition through GenAI Principles at a Hispanic-Serving Institution',
    venue: 'WPA: Writing Program Administration',
  },
  {
    year: 'Forthcoming',
    type: 'Chapter',
    authors: 'Wood, Shane A., Rankins-Robertson, Sherry, Roen, Duane, Carter-Tod, Sheila, & Thomas, Susan',
    title: 'X is for X Factor',
    venue: 'Kathleen Yancey A–Z: Festschrift in a New Key (eds. Davis, McElroy, & Lee)',
    details: 'Computers and Composition Digital Press',
  },
  {
    year: 'Forthcoming',
    type: 'Special Issue',
    authors: 'Wood, Shane A., & Suh, Emily K. (eds.)',
    title: 'Raciolinguistic Justice and Writing Assessment',
    venue: 'Journal of Writing Assessment',
    details: 'spring 2028',
  },
  {
    year: 2026,
    type: 'Book',
    authors: 'Wood, Shane A., & Suh, Emily K.',
    title: 'On Response: Raciolinguistic Justice and Responding to Student Writing',
    venue: 'Perspectives on Writing Series, WAC Clearinghouse & University Press of Colorado',
    details: 'doi:10.37514/PER-B.2026.3002',
    href: 'https://doi.org/10.37514/PER-B.2026.3002',
  },
  {
    year: 2026,
    type: 'Chapter',
    authors: 'Wood, Shane A.',
    title:
      'AI Gives Good Feedback on Student Writing: Good Feedback Demonstrates Knowledge of the Writer and Their Purpose for Writing',
    venue:
      'Bad Ideas About AI and Writing: Toward Generative Practices for Teaching, Learning, and Communication (eds. C. Basgier, A. Mills, M. Olejnik, M. Rodak, & S. Sharma)',
    details: 'WAC Clearinghouse, Perspectives on Writing',
    href: 'https://wacclearinghouse.org/books/perspectives/bad/',
  },
  {
    year: 2026,
    type: 'Chapter',
    authors: 'Pinkert, Laurie A., & Wood, Shane A.',
    title: 'AI-powered Text Generators [Can] Reinforce Linguistic Hegemony',
    venue:
      'Digital Literacies for Human Connection: 25 Ways to Engage Students in People-Centered Digital Practices (eds. D.T. Coad, A.M. Buck, A. Gupta, & R. Shivener)',
    details: 'National Council of Teachers of English',
  },
  {
    year: 2025,
    type: 'Article',
    authors:
      'Wood, Shane A., Gardiakos, Nikolas, Bryan, Matthew, Baker, Pamela, Madruga, Natalie, Schneier, Joel, Kennedy, Vee, Bergholtz, Joel, Finch, Ricky, Rankins-Robertson, Sherry, Poe, Mya, & Elliot, Norbert',
    title: 'Sustaining Curricula through Collective Actions: A Case of Longitudinal Design',
    venue: 'Composition Forum',
    details: 'vol. 56',
  },
  {
    year: 2024,
    type: 'Chapter',
    authors: 'Wood, Shane A.',
    title: 'Theorizing Failure Through Teacher Response',
    venue:
      'If at First You Don’t Succeed? Writing, Rhetoric, and the Question of Failure (ed. S.J. Corbett)',
    details: 'WAC Clearinghouse, Perspectives on Writing',
  },
  {
    year: 2024,
    type: 'Invited',
    authors: 'Wood, Shane A.',
    title: 'Episode 16: Dr. Shane Wood, Director of First-Year Composition and Host of Pedagogue',
    venue: 'Discussions on Writing and Rhetoric Podcast',
    href: 'https://ucfdwr.podbean.com/e/episode-16-dr-shane-wood-director-of-first-year-composition-and-host-of-pedagogue/',
  },
  {
    year: 2023,
    type: 'Book',
    authors: 'Wood, Shane A.',
    title: 'Teachers Talking Writing: Perspectives on Places, Pedagogies, and Programs',
    venue: 'NCTE/CCCC Studies in Writing and Rhetoric Series & WAC Clearinghouse',
    href: 'https://wacclearinghouse.org/books/swr/talking/',
  },
  {
    year: 2023,
    type: 'Article',
    authors: 'Woods, Charles, & Wood, Shane A.',
    title:
      'Podcasts in Rhetoric and Composition: A Review of The Big Rhetorical Podcast and Pedagogue',
    venue: 'Computers and Composition',
    details: 'vol. 67',
    href: 'https://www.sciencedirect.com/science/article/pii/S8755461523000087',
  },
  {
    year: 2023,
    type: 'Invited',
    authors: 'Wood, Shane A.',
    title: 'Episode 137: Keynote Perspective',
    venue: 'The Big Rhetorical Podcast',
    href: 'https://podcasters.spotify.com/pod/show/the-big-rhetorical/episodes/Episode-137-Dr--Shane-A--Wood-Keystone-Perspectives-e24tsb2',
  },
  {
    year: 2023,
    type: 'Invited',
    authors: 'Wood, Shane A.',
    title: 'Pedagogue: Three Years Later',
    venue: 'USM Center for Digital Humanities Blog',
    href: 'https://www.usmcdh.org/blog/pedagogue-year-3-shane-a-wood',
  },
  {
    year: 2022,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title: 'Listening to Mike Rose: Education is a Grand Human Enterprise',
    venue: 'Writing Program Administration',
    details: '45(2), 100–104',
  },
  {
    year: 2022,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title: 'A Conversation on Race and Writing Assessment with Asao B. Inoue and Mya Poe',
    venue: 'Composition Forum',
    details: 'vol. 48',
    href: 'https://compositionforum.com/issue/48/asao-inoue-mya-poe-interview.php',
  },
  {
    year: 2021,
    type: 'Invited',
    authors: 'USM News',
    title: "USM English Professor's Podcast Reaches Impressive Heights",
    venue: 'University of Southern Mississippi News',
    details: 'February 2021',
    href: 'https://www.usm.edu/news/2021/release/pedagogue-podcast.php',
  },
  {
    year: 2020,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title: 'Engaging in Resistant Genres as Antiracist Teacher Response',
    venue: 'Journal of Writing Assessment',
    details:
      '13(2). Reprinted in Considering Students, Teachers, and Writing Assessment, Vol. 2 (eds. D. Kelly-Riley, T. Macklin, & C. Whithaus, 2024)',
    href: 'http://journalofwritingassessment.org/article.php?article=157',
  },
  {
    year: 2020,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title: 'An Interview with Paula Mathieu on the 20th Anniversary of Reflections',
    venue: 'Reflections: A Journal of Community-Engaged Writing and Rhetoric',
    details: '20(1), 110–121',
    href: 'https://reflectionsjournal.net/wp-content/uploads/2020/09/V20.N1.Wood_.pdf',
  },
  {
    year: 2020,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title:
      'Review of Labor-Based Grading Contracts: Building Equity and Inclusion in the Compassionate Writing Classroom, by Asao B. Inoue',
    venue: 'Journal of Writing Assessment',
    details: '13(1)',
    href: 'http://journalofwritingassessment.org/article.php?article=142',
  },
  {
    year: 2019,
    type: 'Article',
    authors: 'Wood, Shane A., & Elliot, Norbert',
    title:
      'Commemorating Community: Forty-Years of Writing Assessment in Writing Program Administration',
    venue: 'WPA: Writing Program Administration',
    details: '42(3), 28–35',
    href: 'https://www.norbertelliot.com/wp-content/uploads/2020/01/Wood_Elliot_2019.pdf',
  },
  {
    year: 2019,
    type: 'Chapter',
    authors: 'Wood, Shane A.',
    title:
      'Multimodal Pedagogy & Multimodal Assessment: Towards a Reconceptualization of Traditional Frameworks',
    venue: 'Bridging the Gap: Multimodality from Theory to Practice (eds. J.C. Lee & S. Khadka)',
    details: 'Utah State UP, 244–262',
  },
  {
    year: 2019,
    type: 'Invited',
    authors: 'Wood, Shane A.',
    title: 'Pedagogue: A Podcast for Teachers',
    venue: 'Teacher-Scholar-Activist',
    href: 'https://teacher-scholar-activist.org/2019/06/19/pedagogue-a-podcast-for-teachers/',
  },
  {
    year: 2018,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title:
      'Framing Wearing: Genre, Embodiment, & Exploring Wearable Technology in the Composition Classroom',
    venue: 'Computers and Composition, special issue on wearable technology',
    details:
      'vol. 50, 66–77. Reprinted in Computers and Composition at 40: A Retrospective (ed. K.L. Blair, 2023)',
    href: 'https://www.sciencedirect.com/science/article/abs/pii/S8755461518300306',
  },
  {
    year: 2018,
    type: 'Chapter',
    authors: 'Wood, Shane A.',
    title: "Multimodal Feedback: A 'Real' Opportunity for Negotiation in Teacher Response",
    venue:
      'Beyond the Frontier: Innovations in First Year Composition II (eds. J. Dahlman & T. Winner)',
    details: 'Cambridge Scholars, 253–267',
  },
  {
    year: 2017,
    type: 'Article',
    authors: 'Wood, Shane A.',
    title: 'Atychiphobia, Failure, Genre, & Vulnerability Inside & Outside the Writing Classroom',
    venue: 'Grassroots Writing Research Journal, Illinois State University',
    details: '8(1), 63–71',
    href: 'http://isuwriting.com/wp-content/uploads/2017/09/Wood_Atychiphobia_Failure_Genre_and_Vulnerability_8-1.pdf',
  },
]

export const longform = [
  {
    kind: 'Dissertation',
    title: 'Intersections of Genre and Assessment: Systems, Uptakes, and Ideologies',
    school: 'University of Kansas',
    summary: [
      'Brings rhetorical genre studies and writing assessment into conversation, using genre as a lens for analyzing classroom assessment systems.',
      'Draws on surveys and interviews about how students take up, remember, and interpret teacher response genres such as marginal comments, alongside other classroom genres such as assignment prompts.',
      'Closes by examining the ideologies embedded in assessment systems and how they shape the people who participate in them.',
    ],
  },
  {
    kind: 'Thesis',
    title: 'Theorizing Failure in Composition Studies and Writing Classrooms',
    school: 'California State University, Fresno',
    summary: [
      'Argues that failure is under-theorized in the field, and reads it through two lenses: social convention and morality.',
      'Contends that structures like traditional grading and feedback can produce feelings of failure in writers.',
      'Proposes grading contracts and a negotiation-based “feedback failure theory” in response.',
    ],
  },
]

export type Talk = { year: number; host: string; title: string; keynote?: boolean }

export const talks: Talk[] = [
  { year: 2026, host: 'University of Tennessee, Knoxville', title: 'Keynote, Stokely Conference for Teaching Writing', keynote: true },
  { year: 2026, host: 'Florida State University', title: 'Keynote, Rhetoric and Composition Speaker Series', keynote: true },
  { year: 2026, host: 'Appalachian State University', title: 'Guest speaker, RC 5100: Composition Theory, Practice, & Pedagogy' },
  { year: 2025, host: 'Texas Christian University', title: 'Guest speaker, ENG 60513: Teaching College Composition' },
  { year: 2025, host: 'Council of Writing Program Administrators', title: 'Roundtable on Supporting Marginalized Students' },
  {
    year: 2025,
    host: 'University of Central Florida',
    title:
      'WAC workshop: Understanding the Linguistic Limitations of AI Text Generators and Teaching Writers Across Disciplines Why that Matters',
  },
  { year: 2024, host: 'College of DuPage', title: 'Multimodality Matters, but How do we Assess it?' },
  { year: 2024, host: 'University of Wisconsin–Milwaukee', title: 'Guest speaker, ENG 701: Writing Pedagogies' },
  { year: 2024, host: 'University of Southern Mississippi', title: 'Guest speaker, MCJ 344: Audio Reporting and Podcasting' },
  { year: 2023, host: 'University of Alabama at Birmingham', title: 'Guest speaker, Social Justice through Multimodality' },
  { year: 2023, host: 'Mississippi Writing Center Association', title: 'Keynote, MWCA Conference', keynote: true },
  { year: 2023, host: 'Prairie State College', title: 'Guest speaker, ENG 102: Composition II' },
  { year: 2023, host: 'University of Central Florida', title: 'Guest speaker, ENC 5705: Teaching College Composition' },
  { year: 2023, host: 'University of Southern Mississippi', title: 'Writing Assignments in the Age of Artificial Intelligence' },
  { year: 2022, host: 'University of Southern Mississippi', title: 'Examining Teaching Practices through Diversity, Equity, and Inclusion' },
  { year: 2021, host: 'Texas Woman’s University', title: 'Guest speaker, Using Podcasts in English Classrooms' },
  { year: 2021, host: 'Oakland University', title: 'Guest speaker, WRT 3071: Podcasting' },
  { year: 2021, host: 'NorthWest Arkansas Community College', title: 'Workshop for English faculty and educators' },
  { year: 2020, host: 'University of Arkansas at Little Rock', title: 'Guest speaker, RHET 7310: Composition Theory' },
  { year: 2020, host: 'Cottey College', title: 'Guest speaker, WRI 393: Digital and Multimodal Composition' },
  { year: 2018, host: 'University of Southern Mississippi', title: 'Anti-Racist Writing Assessment' },
  {
    year: 2018,
    host: 'Haskell Indian Nations University',
    title: '[Re]considering Values and Beliefs in Teaching, Materials, and Assessments',
  },
]

export const honors = [
  {
    year: '2024–27',
    name: 'U.S. Department of Education, National Institute for Student Success grant ($7.6 million)',
    detail:
      'With Georgia State University and Morgan State University, studying AI chatbots and student success in first-year writing.',
  },
  { year: '2025', name: 'Under 40 at the Top', detail: 'Western Kentucky University Alumni Association' },
  { year: '2025', name: 'CWPA Research Grant ($3,500)', detail: 'Council of Writing Program Administrators' },
  {
    year: '2023',
    name: 'Aubrey Keith Lucas and Ella Ginn Lucas Endowment for Faculty Excellence Award',
    detail: 'University of Southern Mississippi',
  },
  { year: '2021–22', name: 'CCCC Emergent Researcher Award', detail: 'Conference on College Composition and Communication' },
  { year: '2021', name: 'John Lovas Award, for Pedagogue', detail: 'Kairos' },
  {
    year: '2019',
    name: 'Michelle Kendrick Outstanding Digital Production/Scholarship Award, for Pedagogue',
    detail: 'Computers and Composition',
  },
  { year: '2018', name: 'Outstanding Instructor Award', detail: 'University of Kansas' },
]

/* ------------------------------------------------------------------ */
/* Teaching                                                            */
/* ------------------------------------------------------------------ */

export const philosophy = {
  opening: 'Teaching and research are inextricably connected.',
  principle: 'Teaching is facilitative, not authoritative.',
  center: 'Students are at the center of my teaching philosophy. Amplifying their voices is the goal.',
  constant:
    'to listen to students, value their experiences, and construct equitable practices that best support learning.',
  influences: [
    { name: 'Cynthia Selfe', idea: 'Multimodality' },
    { name: 'Paulo Freire', idea: 'Critical pedagogy' },
    { name: 'Asao B. Inoue', idea: 'Antiracist writing assessment' },
    { name: 'Amy Devitt', idea: 'Rhetorical genre studies' },
  ],
  practices: [
    'Build an inclusive, accessible classroom that values students’ experiences and their linguistic and cultural diversity.',
    'Analyze visual, linguistic, and aural modes together: album covers, movie posters, music genres, and podcasts.',
    'Co-design assignments and assessments with the class, and examine power, privilege, and the history of higher education.',
    'Invite students to own their learning by drawing on their communities and identities.',
  ],
}

export type Course = { code: string; title: string; level?: 'Graduate' }

export const coursesByInstitution: { institution: string; short: string; courses: Course[] }[] = [
  {
    institution: 'University of Central Florida',
    short: 'UCF',
    courses: [
      { code: 'ENC 1101', title: 'Composition I' },
      { code: 'ENC 1102', title: 'Composition II' },
      { code: 'ENC 5705', title: 'Approaches to Teaching College Composition', level: 'Graduate' },
    ],
  },
  {
    institution: 'University of Southern Mississippi',
    short: 'USM',
    courses: [
      { code: 'ENG 101', title: 'Composition One' },
      { code: 'ENG 301', title: 'Advanced Grammar' },
      { code: 'ENG 333', title: 'Technical Writing' },
      { code: 'ENG 365', title: 'Digital Literacies' },
      { code: 'ENG 432', title: 'Special Topics in Public Writing and Rhetoric' },
      {
        code: 'ENG 690',
        title: 'Practicum in Theory and Teaching of Composition',
        level: 'Graduate',
      },
      { code: 'HON 303', title: 'Digital Storytelling' },
      { code: 'HON 303', title: 'Sonic Rhetoric: Multimodal Listening and Writing with Sound' },
    ],
  },
  {
    institution: 'University of Kansas',
    short: 'KU',
    courses: [
      { code: 'ENG 101', title: 'Composition One' },
      { code: 'ENG 102', title: 'Critical Reading and Writing' },
      { code: 'ENG 203', title: 'Professional Writing' },
      { code: 'ENG 203', title: 'The Meaning of Life and Death' },
    ],
  },
  {
    institution: 'Haskell Indian Nations University',
    short: 'Haskell',
    courses: [
      { code: 'ENG 089', title: 'Introduction to College Writing' },
      { code: 'ENG 090', title: 'Basic Composition' },
    ],
  },
  {
    institution: 'California State University, Fresno',
    short: 'Fresno State',
    courses: [
      { code: 'ENG 5A', title: 'Academic Literacy I' },
      { code: 'ENG 5B', title: 'Academic Literacy II' },
      { code: 'Early Start', title: 'Early Start Writing' },
    ],
  },
]

export type Credential = {
  name: string
  issuer: string
  year?: number
  summary: string
  modules?: string[]
}

export const credentials: Credential[] = [
  {
    name: 'Interactive Distributed Learning (IDL6543)',
    issuer: 'Center for Distributed Learning, University of Central Florida',
    year: 2023,
    summary:
      'About 80 hours of training in designing effective online and blended courses, drawing on instructional design and pedagogical theory for online learning.',
  },
  {
    name: 'ACUE: Inclusive Teaching for Equitable Learning',
    issuer: 'Center for Faculty Development, University of Southern Mississippi',
    year: 2021,
    summary:
      'One of fifteen faculty selected for the inaugural institute on diversity, equity, and inclusion in teaching. Weekly meetings and written reflections across five modules; microcredential earned October 2021.',
    modules: [
      'Bias and its impact',
      'Microaggressions',
      'Imposter phenomenon & stereotype threat',
      'Inclusive learning environments',
      'Equity-centered course design',
    ],
  },
  {
    name: 'Quality Matters Certification',
    issuer: 'Applying the Quality Matters Rubric (APPQMR), online',
    summary: 'Certified in applying the Quality Matters rubric to evaluate the design of online courses.',
  },
]

/* ------------------------------------------------------------------ */
/* Service                                                             */
/* ------------------------------------------------------------------ */

export type Role = {
  title: string
  org: string
  dates: string
  duties?: string[]
}

export const adminRoles: Role[] = [
  {
    title: 'Director of First-Year Composition',
    org: 'University of Central Florida',
    dates: 'Aug 2023 – present',
    duties: [
      'Leads vision and direction for a program serving 6,000–6,500+ students a year',
      'Leads the composition team (assistant director, coordinators, GRA) and hires part-time faculty',
      'Develops ENC 1101 and ENC 1102 curriculum; runs program assessment and reporting',
      'Leads a bi-weekly pedagogy seminar for GTAs, fall and spring orientations, and faculty workshops',
      'Teaches the graduate composition theory and practicum course; observes all new first-year teachers',
      'Chairs the composition committee and its curriculum and assessment subcommittees; serves on the steering committee',
      'Manages the budget, scheduling, transfer credit, grievances and grade appeals, and crisis management',
    ],
  },
  {
    title: 'Director of Composition',
    org: 'University of Southern Mississippi',
    dates: 'May 2022 – Aug 2023',
    duties: [
      'Led program vision and mentoring; scheduled TAs and adjuncts',
      'Oversaw ENG 101/102 curriculum, textbooks, training, and Canvas templates',
      'Ran program assessment, observations, and budgeting',
      'Chaired the composition workgroup; served on executive and GEC committees',
    ],
  },
  {
    title: 'Composition Program Coordinator',
    org: 'University of Southern Mississippi',
    dates: 'May 2020 – May 2021',
    duties: [
      'Coordinated ENG 333 assessment and placement',
      'Led summer syllabus workshops and online teaching support',
      'Reviewed TA course proposals; managed the challenge exam and website content',
    ],
  },
  {
    title: 'Technical Writing Coordinator',
    org: 'University of Southern Mississippi',
    dates: 'Aug 2018 – May 2020',
    duties: [
      'Oversaw ENG 333 curriculum, assessment, and textbook adoption',
      'Hosted monthly mentoring meetings',
      'Piloted an online model that merged seven sections',
    ],
  },
  {
    title: 'First-Second Year English (FSE) Administrative Intern',
    org: 'University of Kansas',
    dates: 'Aug 2015 – May 2016',
    duties: [
      'Ran workshops, revised program policies, and mentored instructors',
      'Worked with visiting scholars and publishers',
    ],
  },
]

export const editorialRoles: Role[] = [
  {
    title: 'Board of Reviewers',
    org: 'Journal of Writing Analytics',
    dates: 'Mar 2026 – present',
  },
  {
    title: 'Editorial Board Member',
    org: 'Journal of Writing Assessment',
    dates: 'Dec 2024 – present',
    duties: ['Advises the editorial team on policy', 'Reviews manuscripts'],
  },
  {
    title: 'Communications Editor',
    org: 'Composition Forum',
    dates: 'Nov 2019 – present',
    duties: [
      'Grew the journal’s visibility and social media presence; manages the listserv',
      'Cross-marketing and conference outreach',
      'Hosted publishing webinars with Composition Studies (240+ registrants, 2021) and Rhetoric Review (185+ registrants, 2022)',
    ],
  },
  {
    title: 'Editorial Assistant',
    org: 'Composition Forum',
    dates: 'Aug 2014 – Aug 2018',
    duties: ['Acknowledged submissions, recruited reviewers, and assisted with editing'],
  },
]

export const universityService = [
  {
    institution: 'University of Central Florida',
    dates: '2023 – present',
    items: [
      'Steering, Composition, Curriculum Alignment, Undergraduate, and Graduate committees',
      'Knights Write Showcase Committee',
      'College of Arts and Humanities Dean’s Advisory Committee (2026–27)',
      'CAH Curriculum and Standards Committee (2026–28)',
      'CAH Sabbatical Committee (2024–26)',
      'Chair, Associate Professor Search Committee (2024–25)',
      'Chair, Instructor/Lecturer Promotion Committee (2025–26)',
      'Visiting Instructor/Lecturer Search Committee (2025–26)',
      'DWR AI Task Force (2026)',
      'John C. Hitt Prize Committee (2024–26)',
      'Teaching Circles',
      'Thesis committees (chair and member); Student Scholar Symposium judge',
    ],
  },
  {
    institution: 'University of Southern Mississippi',
    dates: '2018 – 2023',
    items: [
      'Undergraduate advisor and graduate teaching mentor',
      'Chair, Composition Workgroup',
      'McNair Scholars advisor',
      'Humanities Executive Council; Online, Digital Humanities, and GEC committees',
      'Stanley Hauer Teaching Award committee',
      'Textbook committees (chair, ENG 333)',
      'Thesis defense committee member',
      'Orientations and workshops, often co-led with Joyce Olewski Inman',
      'Three faculty search committees',
      'Anti-ableist teaching and DEI workshops for the Center for Faculty Development',
      'Job placement coordinator with Leah Pope Parker and Adam Clay',
      'Eagles Write judge; designed an “Escape and Reflection Room”',
    ],
  },
  {
    institution: 'University of Kansas',
    dates: '2014 – 2018',
    items: [
      'Writing Center hiring committee',
      'SAGE and first-year liaison',
      'FSE, textbook, and awards committees',
      'Lecturers & Readers and Events committees',
      'Co-created the Inaugural Writers’ Faire',
      '2Cs coordinator (2017)',
    ],
  },
  {
    institution: 'California State University, Fresno',
    dates: '2012 – 2014',
    items: [
      'Founding member, Sigma Tau Delta (Delta Gamma Chapter)',
      'Founding member, M.A. writing groups',
    ],
  },
]

export const professionalService = [
  {
    group: 'Council of Writing Program Administrators',
    items: [
      'Executive Board Member (2026–2029)',
      'Organizer, 2024 CWPA Regional Conference on AI and linguistic diversity (with Laurie Pinkert)',
    ],
  },
  {
    group: 'International Conference on Writing Analytics',
    items: [
      'Organizer and co-host, 13th conference in Orlando, “Writing Analytics: Bridging the Past, Present, and Future” (with Amy Cicchino and Sherry Rankins-Robertson)',
    ],
  },
  {
    group: 'CCCC & NCTE',
    items: [
      'CCCC Transition Team (2026–27)',
      'NCTE Cosponsored Speakers Program (2023–24)',
      'Nominating Committee (2022–23)',
      'Website Redesign Task Force',
      'Proposal reviewer',
      'Book Award, Resolutions, and James Berlin Dissertation Award committees',
      '2018 Local Arrangements & Hospitality, Kansas City',
      'Contributor, position statement on undergraduate research',
    ],
  },
  {
    group: 'Computers and Composition',
    items: ['Michelle Kendrick Award Committee (2021)'],
  },
  {
    group: 'WAC Clearinghouse',
    items: ['Contributor, “Principles for Open-Access Scholarly Publishing”'],
  },
  {
    group: 'External tenure & promotion reviewer',
    items: [
      'University of Cincinnati (2025)',
      'Providence College (2025)',
      'Michigan Technological University (2025)',
      'Utah Valley University (2025)',
    ],
  },
  {
    group: 'Journal & book reviewer',
    items: [
      'Composition Forum',
      'Composition Studies',
      'Computers and Composition',
      'Teaching English in the Two-Year College',
      'Journal of Writing Research',
      'The Journal of Writing Analytics',
      'The Journal of Writing Assessment',
      'WPA: Writing Program Administration',
      'Journal of Response to Writing',
      'NCTE/CCCC Studies in Writing & Rhetoric',
      'WAC Clearinghouse',
      'Utah State University Press',
      'Bloomsbury',
    ],
  },
  {
    group: 'Community & assessment',
    items: [
      'AP English Language Reader (2015–2020, 2022–2023)',
      'Vice President, Parkhaven Neighborhood Association (2022–2023)',
      'ACT prep, Hattiesburg High School (Fall 2018)',
    ],
  },
]
