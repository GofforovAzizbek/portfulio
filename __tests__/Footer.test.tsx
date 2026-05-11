import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer";

describe("Footer", () => {
  it("renders quick links and brand", () => {
    render(<Footer />);
    expect(screen.getByText(/kod_ustasi/i)).toBeInTheDocument();
    expect(screen.getByText(/quick links/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /collaborate/i }),
    ).toBeInTheDocument();
  });
});

