import { render, screen } from "@testing-library/react";
import Projects from "@/app/components/Projects";

describe("Projects", () => {
  it("renders three featured projects", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /featured projects/i }),
    ).toBeInTheDocument();

    // First three items in `data/projects.ts`
    expect(screen.getByText("AI Chat Agent")).toBeInTheDocument();
    expect(screen.getByText("E-Commerce OS")).toBeInTheDocument();
    expect(screen.getByText("Security Scanner Tool")).toBeInTheDocument();
  });
});
