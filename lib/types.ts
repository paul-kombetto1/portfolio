export type Lang = "fr" | "en";

export interface Media {
  src?: string;
  alt: string;
  caption?: string;
  label: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ExploreLink {
  index: string;
  label: string;
  keyword: string;
  description: string;
  href: string;
  variant: "ai" | "marketing" | "leadership";
}

export interface Navigation {
  brand: string;
  exploreLabel: string;
  exploreTitle: string;
  exploreIntro: string;
  exploreLinks: ExploreLink[];
  contactLabel: string;
  closeLabel: string;
  languageLabel: string;
}

export interface ProfileContent {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinUrl: string;
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  signature: string;
  headline: string;
  media: Media;
  ctas: Cta[];
  soundLabel: string;
  soundPlayingLabel: string;
  scrollCue: string;
}

export interface ProseBlock {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  emphasis?: string;
  media: Media;
  imageSide?: "left" | "right";
}

export interface DimensionCard {
  key: "ai-iot" | "marketing" | "leadership";
  keyword: string;
  title: string;
  text: string;
  href: string;
  media: Media;
}

export interface WhatIDoContent {
  title: string;
  intro: string;
  dimensions: DimensionCard[];
}

export interface WorkItem {
  tag: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  media: Media;
}

export interface SelectedWorkContent {
  title: string;
  items: WorkItem[];
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  tags: string[];
  description: string;
  media: Media;
}

export interface ExperienceContent {
  title: string;
  entries: ExperienceEntry[];
}

export interface ContactContent {
  title: string;
  text: string;
  media: Media;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  linkedinLabel: string;
  resumeLabel: string;
}

export interface HomeContent {
  hero: HeroContent;
  intro: { text: string; media: Media };
  story: ProseBlock;
  whatIDo: WhatIDoContent;
  selectedWork: SelectedWorkContent;
  experience: ExperienceContent;
  leadershipImpact: ProseBlock;
  whatsNext: ProseBlock & { signature: string };
  contact: ContactContent;
}

export interface SpaceHero {
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  media: Media;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TechProject {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  coverMedia: Media;
  context: string;
  problem: string;
  concept: string;
  architectureSteps: string[];
  hardware: string[];
  software: string[];
  role: string;
  learnings: string[];
  futureImprovements: string[];
  gallery: Media[];
  diagram: Media;
  screenshot: Media;
  video: Media;
}

export interface AiIotContent {
  hero: SpaceHero;
  technicalStory: ProseBlock;
  stats: StatItem[];
  projectsTitle: string;
  projectsIntro: string;
  projects: TechProject[];
}

export interface MarketingCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  coverMedia: Media;
  context: string;
  challenge: string;
  approachSteps: string[];
  workDone: string[];
  lesson: string;
  gallery: Media[];
}

export interface MarketingContent {
  hero: SpaceHero;
  journey: ProseBlock;
  caseStudiesTitle: string;
  caseStudiesIntro: string;
  caseStudies: MarketingCaseStudy[];
}

export interface LeadershipStory {
  title: string;
  situation: string;
  challenge: string;
  action: string;
  lesson: string;
  media: Media;
}

export interface LeadershipExperience {
  slug: string;
  organization: string;
  role: string;
  period: string;
  title: string;
  text: string;
  signature?: string;
  media: Media;
  gallery: Media[];
}

export interface VolunteeringEntry {
  organization: string;
  role: string;
  period: string;
  contribution: string;
  learning: string;
  media: Media;
}

export interface LeadershipContent {
  hero: SpaceHero;
  journey: ProseBlock;
  experiencesTitle: string;
  experiences: LeadershipExperience[];
  stories: LeadershipStory[];
  volunteeringTitle: string;
  volunteeringIntro: string;
  volunteering: VolunteeringEntry[];
}

export interface SiteDictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: Navigation;
  profile: ProfileContent;
  home: HomeContent;
  aiIot: AiIotContent;
  marketing: MarketingContent;
  leadership: LeadershipContent;
  footer: {
    tagline: string;
    rights: string;
  };
}
