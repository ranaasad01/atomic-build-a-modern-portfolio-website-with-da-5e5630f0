export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}
