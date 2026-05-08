import { describe, it, expect } from "vitest";
import { NAV_ITEMS, PROJECTS, SKILLS_CATEGORIES, STATS } from "@/app/pageData";

describe("pageData", () => {
  it("has nav items", () => {
    expect(NAV_ITEMS.length).toBeGreaterThan(0);
    NAV_ITEMS.forEach((id) => expect(typeof id).toBe("string"));
  });

  it("has valid stats schema", () => {
    expect(STATS.length).toBe(3);
    STATS.forEach((s) => {
      expect(typeof s.label).toBe("string");
      expect(typeof s.value).toBe("string");
      expect(s.label.length).toBeGreaterThan(0);
      expect(s.value.length).toBeGreaterThan(0);
    });
  });

  it("has valid skills categories schema", () => {
    expect(SKILLS_CATEGORIES.length).toBe(3);
    SKILLS_CATEGORIES.forEach((c) => {
      expect(typeof c.title).toBe("string");
      expect(typeof c.icon).toBe("string");
      expect(Array.isArray(c.items)).toBe(true);
      expect(c.items.length).toBeGreaterThan(0);
    });
  });

  it("has valid projects schema and urls", () => {
    expect(PROJECTS.length).toBeGreaterThan(0);

    const isHttpUrl = (value: string) => {
      try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
      } catch {
        return false;
      }
    };

    PROJECTS.forEach((p) => {
      expect(p.title.length).toBeGreaterThan(0);
      expect(p.category.length).toBeGreaterThan(0);
      expect(p.desc.length).toBeGreaterThan(0);
      expect(Array.isArray(p.tech)).toBe(true);
      expect(p.tech.length).toBeGreaterThan(0);
      expect(isHttpUrl(p.github)).toBe(true);
      expect(isHttpUrl(p.image)).toBe(true);
    });
  });
});

