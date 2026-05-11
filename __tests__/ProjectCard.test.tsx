import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/app/components/ProjectCard";

// Mock project data for testing
const mockProject = {
  id: "test-project",
  titleUz: "Test Loyihasi",
  titleEn: "Test Project",
  descriptionUz: "Bu test loyiha uchun tavsif",
  descriptionEn: "This is a test project description",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  technologies: ["React", "TypeScript", "Tailwind"],
  githubUrl: "https://github.com/test",
  demoUrl: "https://demo.test.com",
  category: "fullstack" as const,
  status: "completed" as const,
  year: 2025,
};

describe("ProjectCard Component", () => {
  test("renders project title", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText(/Test Project/i)).toBeInTheDocument();
  });

  test("renders project description", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText(/This is a test project/i)).toBeInTheDocument();
  });

  test("renders project image", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const image = screen.getByAltText(/Test Project/i);
    expect(image).toBeInTheDocument();
  });

  test("displays all technology tags", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind")).toBeInTheDocument();
  });

  test("renders GitHub button with correct link", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toHaveAttribute("href", "https://github.com/test");
  });

  test("renders demo button when demo URL exists", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const demoLink = screen.getByRole("link", { name: /Demo/i });
    expect(demoLink).toHaveAttribute("href", "https://demo.test.com");
  });

  test("displays project status badge", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText(/Completed/i)).toBeInTheDocument();
  });

  test("displays project category badge", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText(/Full-stack/i)).toBeInTheDocument();
  });

  test("links open in new tab", () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      if (link.getAttribute("href")?.startsWith("http")) {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      }
    });
  });

  test("handles projects without demo URL", () => {
    const projectNoDem = { ...mockProject, demoUrl: undefined };
    render(<ProjectCard project={projectNoDem} index={0} />);
    const demoButtons = screen.queryAllByRole("link", { name: /Demo/i });
    expect(demoButtons.length).toBe(0);
  });

  test("shows additional technologies count when more than 3", () => {
    const projectManyTech = {
      ...mockProject,
      technologies: ["React", "TypeScript", "Tailwind", "Next.js", "Prisma"],
    };
    render(<ProjectCard project={projectManyTech} index={0} />);
    expect(screen.getByText(/\+2 more/i)).toBeInTheDocument();
  });
});
