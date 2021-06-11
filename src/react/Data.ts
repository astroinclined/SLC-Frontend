export interface Module {
  name: string;
  port: string;
  url: string;
  display: Display;
  source: string;
  tags: {
    name: string;
    subject_name: Subject;
  }[];
}

const commonGroupCopyStart = 'This section contains learning resources';

const commonSubjectCopyStart = (subject: string) =>
  `Welcome to ${subject}! Here, you will find a wide range of learning content about`;

export enum Subject {
  Math = 'Mathematics',
  Science = 'Science',
  Arts = 'Arts & Humanities',
  Literature = 'Literature',
  Languages = 'Languages',
  Technology = 'Technology',
  EverydayLife = 'Everyday Life',
  SocialSciences = 'Social Sciences',
}

export const Math = {
  'Foundational Mathematics': `${commonGroupCopyStart} that help to build a strong understanding of basic Mathematics.`,
  'Algebra': `${commonGroupCopyStart} that help to understand equations and how to solve them.`,
  'Geometry': `${commonGroupCopyStart} about shapes, spaces and sizes.`,
  'Statistics & Probability': `${commonGroupCopyStart} that help to understand probability and data analysis.`,
  'Calculus':`${commonGroupCopyStart} that help to understand calculus at a basic level and at an advanced level.`,
  'Tests & Textbooks': 'This section contains practice US Standardized Tests and answer keys. These resources are intended for students in advanced years of secondary school, especially those preparing for further education or university.',
}

export const Science = {
  'General Science': `${commonGroupCopyStart} about science in general.`,
  'Biology': `${commonGroupCopyStart} that help to build a scientific understanding of biology, life, DNA, and more.`,
  'Chemistry': `${commonGroupCopyStart} that help to build a scientific understanding of chemicals, atoms, elements, and more.`,
  'Physics': `${commonGroupCopyStart} that help to build a scientific understanding of physics, motions, forces, and gravity.`,
  'Astronomy': `${commonGroupCopyStart} that help to build a scientific understanding of stars, galaxies, Planet Earth, and the origins and scale of the universe.`,
  'Earth Sciences': `${commonGroupCopyStart} that help to build a scientific understanding of the Earth, its land, water, atmosphere, and climate.`,
  'Engineering': `${commonGroupCopyStart} that help to build a scientific understanding of circuits, robotics, and more.`,
}

export const Arts = {
  'History': `${commonGroupCopyStart} that help to build and understanding of world history.`,
  'Geography': `${commonGroupCopyStart} about the geography of Earth.`,
  'Religious Studies': `${commonGroupCopyStart} that help to build an understanding of world religion.`,
  'Art & Design': `${commonGroupCopyStart} that help to build an understanding of art, design, and technology practices around the world.`,
  'Music': `${commonGroupCopyStart} that help to build an understanding of music theory and history.`,
  'Culture & People': `${commonGroupCopyStart} about different world cultures, famous historical figures, and more.`,
}

export const Literature = {
  'Fiction & Non-Fiction': 'This section contains non-fiction and fiction books in a variety of genres.',
  'Tests & Textbooks': 'This section contains practice US Standardized Tests and answer keys. These resources are intended for students in advanced years of secondary school, especially those preparing for further education or university.',
  'Reading & Spelling': `${commonGroupCopyStart} that help to improve reading and spelling skills.`,
}

export const Technology = {
  'Social Media & Internet': `${commonGroupCopyStart} about social media, the internet, and using them safely.`,
  'Computers': `${commonGroupCopyStart} that help to build a foundational understanding of computers and devices.`,
  'Programming & Computing': `${commonGroupCopyStart} the help to build an understanding of computer programming, code, and more.`,
}

export const EverydayLife = {
  'Everyday Life': `${commonGroupCopyStart} about everyday life, money, currency, and more.`,
  'Careers': `${commonGroupCopyStart} to help improve workplace skills, career planning, and starting your own business.`,
  'Farming & Agriculture': `${commonGroupCopyStart} that help to build an understanding of best farming practices, plant care, and pest control.`,
  'Resource Management': `${commonGroupCopyStart} about using, managing, and preserving natural resources.`,
  'Human Health & Healthcare': `${commonGroupCopyStart} that help to build an understanding of human health and wellbeing.`,
  'Animal Health': `${commonGroupCopyStart} that help to build an understanding of animal health and wellbeing.`,
  'Environment': `${commonGroupCopyStart} that help to build an understanding of the world around us, ecosystems, and climate change.`,
  'Infrastructure': `${commonGroupCopyStart} about infrastructure, energy, building construction, and more.`,
  'Practical Skills': `${commonGroupCopyStart} about practical skills and how they are used.`,
}

export const SocialSciences = {
  'Economics': 'This section contains advanced learning resources about economics.',
  'Development & Business': 'This section contains resources that help to build a more theoretical understanding of business, entrepreneurship, and economics.',
  'Citizenship': 'This section contains resources about citizenship.',
}

export const Languages = {
  'Southern & East African Languages': `${commonGroupCopyStart} that help to improve a number of langauges spoken across Southern and Eastern Africa.`,
  'World Langauges': `${commonGroupCopyStart} about languages spoken around the world.`,
}

export const SubjectCopy = {
  [Subject.Math]: {
    copy: `${commonSubjectCopyStart(Subject.Math)} Mathematics, including early mathematics, algebra, calculus, and lots more!`,
    tags: Math,
  },
  [Subject.Science]: {
    copy: `${commonSubjectCopyStart(Subject.Science)} Science, including DNA, galaxies, chemicals, and lots more!`,
    tags: Science,
  },
  [Subject.Arts]: {
    copy: `${commonSubjectCopyStart(Subject.Arts)} the Humanities, including world history, music, geography and more!`,
    tags: Arts,
  },
  [Subject.Literature]: {
    copy: 'Welcome to Literature! Here, you will find a wide range of books to explore, read, and enjoy!',
    tags: Literature,
  },
  [Subject.Technology]: {
    copy: `${commonSubjectCopyStart(Subject.Technology)} Technology, including computers, online safety, programming, and more!`,
    tags: Technology,
  },
  [Subject.EverydayLife]: {
    copy: `${commonSubjectCopyStart(Subject.EverydayLife)} career healthcare, farming, using natural resources, workplace skills, and so much more!`,
    tags: EverydayLife,
  },
  [Subject.SocialSciences]: {
    copy: `${commonSubjectCopyStart(Subject.SocialSciences)} Social Sciences, including economics, finance, business, and more!`,
    tags: SocialSciences,
  },
  [Subject.Languages]: {
    copy: 'Welcome to Languages! Here, you will be able to practice and learn about languages from around the world.',
    tags: Languages,
  },
}

export enum Display {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text'
}

// This is an old interface, only used for pulling the seed data for the backend
export interface DataObject {
  name: string;
  port: string;
  url: string;
  type: string;
  by: string;
  tags: {
    [Subject.Math]?: keyof typeof Math,
    [Subject.Science]?: keyof typeof Science,
    [Subject.Arts]?: keyof typeof Arts,
    [Subject.Literature]?: keyof typeof Literature,
    [Subject.Technology]?: keyof typeof Technology,
    [Subject.EverydayLife]?: keyof typeof EverydayLife,
    [Subject.SocialSciences]?: keyof typeof SocialSciences,
    [Subject.Languages]?: keyof typeof Languages,
  }
}

export const subjects = Object.values(Subject);
export const sources = ['African Storybooks', 'CK-12 Textbooks', 'GCF Learnfree', 'Great Books of the World', 'Hesperian Health Guides', 'Infonet - Biovision', 'Interactive World Map', 'KA Lite Essentials', 'Medline Plus', 'Music Theory', 'Practical Action', 'Wikipedia for Schools', 'Wikivoyage', 'Wiktionary'];
