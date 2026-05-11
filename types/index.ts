export interface Project {
  id: string;
  titleUz: string;
  titleEn: string;
  descriptionUz: string;
  descriptionEn: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  category: "frontend" | "backend" | "fullstack" | "security";
  status: "completed" | "in-progress" | "archived";
  year: number;
}

export interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "security";
  icon: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
}
