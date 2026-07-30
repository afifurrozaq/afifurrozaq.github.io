import { LucideIcon } from 'lucide-react';

export interface Profile {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  social: {
    linkedin: string;
    github: string;
    portfolio: string;
  };
}

export interface Skill {
  name: string;
  category: string;
  icon: LucideIcon;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  period: string;
  school: string;
  degree: string;
  gpa: string;
  details: string;
}

export interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string | null;
  image?: string;
}

export interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}
