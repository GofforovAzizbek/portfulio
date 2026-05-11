import { render, screen, act } from "@testing-library/react";
import Hero from "@/app/components/Hero";

describe("Hero", () => {
  it("renders primary CTAs after loading", async () => {
    jest.useFakeTimers();
    render(<Hero />);

    expect(screen.getByRole("img", { name: /frontend/i })).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    expect(
      screen.getByRole("link", { name: /download resume/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view projects/i }),
    ).toBeInTheDocument();
  });
});

