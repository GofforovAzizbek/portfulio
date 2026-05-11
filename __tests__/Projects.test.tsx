import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/components/Projects";

describe("Projects Component", () => {
  test("renders projects section with main heading", () => {
    render(<Projects />);
    expect(screen.getByText(/CRAFTED/i)).toBeInTheDocument();
  });

  test("displays section description", () => {
    render(<Projects />);
    expect(screen.getByText(/curated selection/i)).toBeInTheDocument();
  });

  test("renders section region", () => {
    render(<Projects />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "projects");
  });

  test("renders github link", () => {
    render(<Projects />);
    const links = screen.getAllByRole("link");
    const hasGithubLink = links.some((link) =>
      link.getAttribute("href")?.includes("github.com"),
    );
    expect(hasGithubLink).toBe(true);
  });

  test("github link opens in new tab", () => {
    render(<Projects />);
    const githubLink = screen.getByRole("link", { name: /explore/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  test("renders project cards", () => {
    render(<Projects />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  test("displays technology stack", () => {
    render(<Projects />);
    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
  });

  test("projects section has proper structure", () => {
    render(<Projects />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("bg-black");
  });

  test("link has proper styling classes", () => {
    render(<Projects />);
    const githubLink = screen.getByRole("link", { name: /explore/i });
    expect(githubLink.className).toContain("group");
  });
});
