import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/app/components/About";

describe("About Component", () => {
  test("renders about section with correct id", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "about");
  });

  test("has proper background styling", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("bg-black");
  });

  test("section is accessible", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
  });

  test("has proper text color", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("text-white");
  });

  test("renders with proper padding", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("py-");
  });

  test("contains overflow hidden", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("overflow-hidden");
  });

  test("has heading elements", () => {
    render(<About />);
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });

  test("is relative positioned", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("relative");
  });

  test("component renders without errors", () => {
    const { container } = render(<About />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test("has proper width styling", () => {
    render(<About />);
    const section = screen.getByRole("region");
    expect(section.className).toContain("w-full");
  });

  test("displays security skills", () => {
    render(<About />);
    expect(screen.getByText(/Kali Linux/i)).toBeInTheDocument();
    expect(screen.getByText(/Vulnerability Testing/i)).toBeInTheDocument();
  });

  test("renders action buttons", () => {
    render(<About />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  test("renders view projects button", () => {
    render(<About />);
    const links = screen.getAllByRole("link");
    const hasProjectsLink = links.some((link) =>
      link.getAttribute("href")?.includes("#projects"),
    );
    expect(hasProjectsLink).toBe(true);
  });
});
