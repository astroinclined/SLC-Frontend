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

export enum Math {
  Foundational = 'Foundational Mathematics',
  Algebra = 'Algebra',
  Geometry = 'Geometry',
  Stats = 'Statistics & Probability',
  Calculus = 'Calculus',
  Engineering = 'Engineering',
  Tests = 'Tests & Textbooks',
}

export enum Science {
  General = 'General Science',
  Biology = 'Biology',
  Chemistry = 'Chemistry',
  Physics = 'Physics',
  Astronomy = 'Astronomy',
  EarthSciences = 'Earth Sciences',
}

export enum Arts {
  History = 'History',
  Geography = 'Geography',
  Religion = 'Religious Studies',
  Art = 'Art & Design',
  Music = 'Music',
  Culture = 'Culture & People',
}

export enum Literature {
  Fiction = 'Fiction & Non-Fiction',
  Tests = 'Tests & Textbooks',
  Reading = 'Reading & Spelling',
}

export enum Technology {
  Social = 'Social Media & Internet',
  Computers = 'Computers',
  Programming = 'Programming & Computing',
}

export enum EverydayLife {
  EverydayLife = 'Everyday Life',
  Careers = 'Careers',
  Farming = 'Farming & Agriculture',
  Resource = 'Resource Management',
  HumanHealth = 'Human Health & Healthcare',
  AnimalHealth = 'Animal Health',
  Environment = 'Environment',
  Infrastructure = 'Infrastruture',
  Practical = 'Practical Skills',
}

export enum SocialSciences {
  Economics = 'Economics',
  Development = 'Development & Business',
  Citizenship = 'Citizenship',
}

export enum Languages {
  SouthAfrica = 'South African Languages',
  SouthAndEast = 'Southern & East African Languages',
  World = 'World Langauges',
}

export const TagMap = {
  [Subject.Math]: Math,
  [Subject.Science]: Science,
  [Subject.Arts]: Arts,
  [Subject.Literature]: Literature,
  [Subject.Technology]: Technology,
  [Subject.EverydayLife]: EverydayLife,
  [Subject.SocialSciences]: SocialSciences,
  [Subject.Languages]: Languages,
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
    [Subject.Math]?: Math,
    [Subject.Science]?: Science,
    [Subject.Arts]?: Arts,
    [Subject.Literature]?: Literature,
    [Subject.Technology]?: Technology,
    [Subject.EverydayLife]?: EverydayLife,
    [Subject.SocialSciences]?: SocialSciences,
    [Subject.Languages]?: Languages,
  }
}

export const subjects = Object.values(Subject);
export const sources = ['African Storybooks', 'CK-12 Textbooks', 'GCF Learnfree', 'Great Books of the World', 'Hesperian Health Guides', 'Infonet - Biovision', 'Interactive World Map', 'KA Lite Essentials', 'Medline Plus', 'Music Theory', 'Practical Action', 'Wikipedia for Schools', 'Wikivoyage', 'Wiktionary'];
