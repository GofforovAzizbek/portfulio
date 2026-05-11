import { render, screen } from "@testing-library/react";
import Skills from "@/app/components/Skills";

describe("Skills", () => {
  it("renders the skills heading and resume link", () => {
    render(<Skills />);
    expect(screen.getByRole("heading", { name: /skill stack/i })).toBeVisible();
    expect(
      screen.getByRole("link", { name: /download resume/i }),
    ).toBeInTheDocument();
  });
});

