import { render, screen } from "@testing-library/react";
import Collaboration from "@/app/components/Collaboration";

describe("Collaboration", () => {
  it("renders collaboration CTA", () => {
    render(<Collaboration />);
    expect(
      screen.getByRole("heading", { name: /want to build something together/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /email me/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /message on telegram/i }),
    ).toBeInTheDocument();
  });
});
