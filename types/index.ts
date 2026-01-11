// Types for the portfolio
export interface Skill {
  name: string;
  icon?: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
  type: 'work' | 'education';
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  project: string;
}
