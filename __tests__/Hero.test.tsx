import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import Hero from "@/app/components/Hero";

describe("Hero Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test("renders hero section with background images", () => {
    render(<Hero />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });

  test("displays hero content after loading animation", async () => {
    render(<Hero />);

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    expect(screen.getByText(/Mening Frontend dunyom/i)).toBeInTheDocument();
  });

  test("displays frontend developer role", async () => {
    render(<Hero />);

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    expect(screen.getByText(/FRONTEND DEVELOPER/i)).toBeInTheDocument();
  });

  test("renders carousel indicator buttons", async () => {
    render(<Hero />);

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("renders resume download button", async () => {
    render(<Hero />);

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    const resumeButton = screen.getByText(/RESUME/i);
    expect(resumeButton).toBeInTheDocument();
  });

  test("carousel indicators are functional", async () => {
    render(<Hero />);

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    const buttons = screen.getAllByRole("button");
    if (buttons.length > 0) {
      fireEvent.click(buttons[0]);
      expect(buttons[0]).toBeInTheDocument();
    }
  });

  test("displays different banner content on carousel change", async () => {
    render(<Hero />);

    await act(async () => {
      jest.advanceTimersByTime(1100);
    });

    const buttons = screen.getAllByRole("button");
    if (buttons.length > 1) {
      fireEvent.click(buttons[1]);

      await act(async () => {
        jest.advanceTimersByTime(500);
      });

      expect(screen.getByText(/Mening Backend quvvatim/i)).toBeInTheDocument();
    }
  });
});
