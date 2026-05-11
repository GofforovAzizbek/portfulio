import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "@/app/components/Contact";

describe("Contact Component", () => {
  test("renders contact section with title", () => {
    render(<Contact />);
    expect(screen.getByText(/Aloqa Qilish/i)).toBeInTheDocument();
  });

  test("displays section description", () => {
    render(<Contact />);
    expect(screen.getByText(/Men sizni eshitmoqchi/i)).toBeInTheDocument();
  });

  test("renders all contact methods", () => {
    render(<Contact />);
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Telegram/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
  });

  test("renders contact email address", () => {
    render(<Contact />);
    expect(screen.getByText(/your.email@example.com/i)).toBeInTheDocument();
  });

  test("renders collaboration CTA section", () => {
    render(<Contact />);
    expect(screen.getByText(/Birgalikda Ishlasak/i)).toBeInTheDocument();
  });

  test("renders email and telegram action buttons", () => {
    render(<Contact />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
  });

  test("displays response time expectation", () => {
    render(<Contact />);
    expect(screen.getByText(/24 soat/i)).toBeInTheDocument();
  });

  test("contact links have correct protocols", () => {
    render(<Contact />);
    const links = screen.getAllByRole("link");
    const hasEmailLink = links.some((link) =>
      link.getAttribute("href")?.startsWith("mailto:"),
    );
    expect(hasEmailLink).toBe(true);
  });

  test("renders telegram contact option", () => {
    render(<Contact />);
    const telegramLink = screen.getByText(/t.me/);
    expect(telegramLink).toBeInTheDocument();
  });
});
