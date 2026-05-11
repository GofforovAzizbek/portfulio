import { render, screen } from "@testing-library/react";
import About from "@/app/components/About";

describe("About", () => {
  it("renders about section content", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { name: /about me/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view projects/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /contact me/i })).toBeInTheDocument();
  });
});
