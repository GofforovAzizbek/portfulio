import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/Header";

describe("Header", () => {
  it("opens the mobile menu and shows navigation links", () => {
    render(<Header />);
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(screen.getAllByText("HOME").length).toBeGreaterThan(0);
    expect(screen.getAllByText("CONTACT").length).toBeGreaterThan(0);
    expect(screen.getAllByText("COLLABORATE").length).toBeGreaterThan(0);
  });
});
