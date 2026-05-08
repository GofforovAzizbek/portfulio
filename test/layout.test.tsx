import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import RootLayout from "@/app/layout";

describe("RootLayout", () => {
  it("renders children into body", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <div>child-content</div>
      </RootLayout>,
    );
    expect(html).toContain("child-content");
  });

  it("injects theme init script", () => {
    const html = renderToStaticMarkup(
      <RootLayout>
        <div />
      </RootLayout>,
    );
    expect(html).toContain("localStorage.getItem('theme')");
    expect(html).toContain("prefers-color-scheme: dark");
  });
});
