import { render, screen } from "@testing-library/react";
import Contact from "@/app/components/Contact";

describe("Contact", () => {
  it("renders contact methods", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /^contact$/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Telegram")).toBeInTheDocument();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });
});
