import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, animate, ...rest }: any) => (
      <div data-animate={JSON.stringify(animate)} {...rest}>
        {children}
      </div>
    ),
  },
}));

describe("SmartCursor", () => {
  const loadSmartCursor = async () =>
    (await import("@/app/components/SmartCursor")).default;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders ring and wrapper", async () => {
    const SmartCursor = await loadSmartCursor();
    render(<SmartCursor />);
    expect(screen.getByTestId("smart-cursor")).toBeInTheDocument();
    expect(screen.getByTestId("cursor-ring")).toBeInTheDocument();
  });

  it("updates x/y on mousemove", async () => {
    const SmartCursor = await loadSmartCursor();
    render(<SmartCursor />);
    fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });

    await waitFor(() => {
      const cursor = screen.getByTestId("smart-cursor");
      const animate = JSON.parse(cursor.getAttribute("data-animate") ?? "{}");
      expect(animate.x).toBe(88);
      expect(animate.y).toBe(188);
    });
  });

  it("sets active scale when hovering interactive element", async () => {
    const SmartCursor = await loadSmartCursor();
    render(
      <div>
        <button data-testid="btn">Btn</button>
        <SmartCursor />
      </div>,
    );

    fireEvent.mouseMove(screen.getByTestId("btn"), { clientX: 10, clientY: 20 });

    await waitFor(() => {
      const cursor = screen.getByTestId("smart-cursor");
      const animate = JSON.parse(cursor.getAttribute("data-animate") ?? "{}");
      expect(animate.scale).toBe(2.5);
      expect(animate.backgroundColor).toBe("rgba(0,0,0,0.05)");
    });
  });

  it("cleans up listener on unmount", async () => {
    const SmartCursor = await loadSmartCursor();
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(<SmartCursor />);
    expect(addSpy).toHaveBeenCalledWith("mousemove", expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith("mousemove", expect.any(Function));
  });
});
