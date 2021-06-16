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
  group?: string;
  parent_module?: ParentModule;
}

interface ParentModule {
  name: string;
  parent_module?: ParentModule | null;
}

const commonGroupCopyStart = 'This section contains learning resources';
const standardizedTestsCopy = 'This section contains practice US Standardized Tests and answer keys. These resources are intended for students in advanced years of secondary school, espeically those preparing for further education or university.';

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

export enum Source {
  AfricanStorybooks = 'African Storybooks',
  CK12 = 'CK-12 Textbooks',
  GCF = 'GCF Learnfree',
  GBOFW = 'Great Books of the World',
  HesperianHealth = 'Hesperian Health Guides',
  Infonet = 'Infonet - Biovision',
  InteractiveWorldMap = 'Interactive World Map',
  KALite = 'KA Lite Essentials',
  MedlinePlus = 'Medline Plus',
  MusicTheory = 'Music Theory',
  PracticalAction = 'Practical Action',
  Wikipedia = 'Wikipedia for Schools',
  Wikivoyage = 'Wikivoyage',
  Wiktionary = 'Wiktionary',
}

export const Math = {
  'Foundational Mathematics': `${commonGroupCopyStart} that help to build a strong understanding of basic Mathematics.`,
  'Algebra': `${commonGroupCopyStart} that help to understand equations and how to solve them.`,
  'Geometry': `${commonGroupCopyStart} about shapes, spaces and sizes.`,
  'Statistics & Probability': `${commonGroupCopyStart} that help to understand probability and data analysis.`,
  'Calculus':`${commonGroupCopyStart} that help to understand calculus at a basic level and at an advanced level.`,
  'Tests & Textbooks': standardizedTestsCopy,
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
  'Tests & Textbooks': standardizedTestsCopy,
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
};

export const SourceCopy = {
  [Source.KALite]: 'Khan Academy Lite Essentials includes thousands of video lessons and exercises on mathematics, science, and more. This incredible learning resource is brought to you by Khan Academy and The Foundation for Learning Equality. You can create an account to track your progress. When you return, you can login and view your progress.',
  [Source.GBOFW]: 'A selection of over 400 classic, well-known books from around the world, provided by Project Gutenberg.',
  [Source.AfricanStorybooks]: 'These stories are in 11 languages spoken in many countries in Southern and Eastern Africa. Reading these short, fun books are a perfect way to practice reading and language learning at the same time.',
  [Source.CK12]: 'High-quality textbooks about Science, Technology, Engineering and Mathematics from ck12.org.',
  [Source.GCF]: 'A collection of hundreds of illustrated articles and videos about technology, job training, reading, and math skills, produced by the Goodwill Community Foundation.',
  [Source.PracticalAction]: 'Practical Action provides information on a wide range of agricultural, environmental, and health topics.',
  [Source.Infonet]: 'Well-organized, illustrated information on a wide range of agricultural, environmental, and health topics.',
  [Source.MedlinePlus]: 'A collection of more than 4,000 imedical articles from the U.S. National Library of Medicine and the National Institutes of Health. These materials do not provide medical advice and are for informational purposes only. This content is not intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here.',
  [Source.MusicTheory]: 'Comprehensive music theory lessons and exercises to begin your journey into the realm of music from musictheory.net.',
  [Source.HesperianHealth]: 'A collection of detailed, illustrated guides on healthcare in remote areas where access to doctors and facilities is limited. These materials do not provide medical advice and are for informational purposes only. This content is not intended to be a substitute for professional medical advice, diagnosis or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here.',
  [Source.Wikipedia]: 'A collection of 6,000 articles and 50,000 images on hundreds of topics and subjects from Wikipedia for Schools.',
  [Source.Wikivoyage]: 'A worldwide travel guide created by Kiwix with information on destinations around the world. Make geography come alive!',
  [Source.Wiktionary]: 'Wiktionary is a multilingual dictionary which aims to describe all words of all languages using definitions and descriptions in English.',
  [Source.InteractiveWorldMap]: 'Explore Earth with this interactive and searchable world map from OpenStreetMaps and the XSCE project.',
};

export const getSourceGroupCopy = (group: string, source: string) => {
  if (source === 'African Storybooks') {
    return 'This section contains short books that help to improve a number of languages spoken across Southern and Eastern Africa.';
  }

  if (group === 'Standardized Tests') {
    return standardizedTestsCopy;
  }

  let subject = group.replaceAll('&', 'and').toLowerCase();

  if (subject.endsWith('age')) {
    subject += ' groups';
  } else if (subject.endsWith('subject')) {
    subject += ' area'
  } else if (['Humanities', 'Digital World', 'Environment'].includes(group)) {
    subject = 'the ' + subject;
  }

  return `Learn more about ${subject} with this content from ${source}.`;
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
export const sources = Object.values(Source);
