import { projects } from "@/data/projects";
import { socialLinks } from "@/data/social";

describe("Projects Data", () => {
  test("projects array is not empty", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  test("each project has required fields", () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("titleUz");
      expect(project).toHaveProperty("titleEn");
      expect(project).toHaveProperty("descriptionUz");
      expect(project).toHaveProperty("descriptionEn");
      expect(project).toHaveProperty("image");
      expect(project).toHaveProperty("technologies");
      expect(project).toHaveProperty("githubUrl");
      expect(project).toHaveProperty("category");
      expect(project).toHaveProperty("status");
      expect(project).toHaveProperty("year");
    });
  });

  test("each project has valid ID", () => {
    projects.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(typeof project.id).toBe("string");
    });
  });

  test("each project has valid category", () => {
    const validCategories = ["frontend", "backend", "fullstack", "security"];
    projects.forEach((project) => {
      expect(validCategories).toContain(project.category);
    });
  });

  test("each project has valid status", () => {
    const validStatuses = ["completed", "in-progress", "archived"];
    projects.forEach((project) => {
      expect(validStatuses).toContain(project.status);
    });
  });

  test("each project has technologies array", () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  test("each project has valid year", () => {
    projects.forEach((project) => {
      expect(typeof project.year).toBe("number");
      expect(project.year).toBeLessThanOrEqual(new Date().getFullYear());
      expect(project.year).toBeGreaterThan(2000);
    });
  });

  test("project URLs are valid strings", () => {
    projects.forEach((project) => {
      expect(typeof project.githubUrl).toBe("string");
      expect(project.githubUrl).toBeTruthy();
    });
  });

  test("project titles are not empty", () => {
    projects.forEach((project) => {
      expect(project.titleUz).toBeTruthy();
      expect(project.titleEn).toBeTruthy();
      expect(project.titleUz.length).toBeGreaterThan(0);
    });
  });

  test("project descriptions are not empty", () => {
    projects.forEach((project) => {
      expect(project.descriptionUz).toBeTruthy();
      expect(project.descriptionEn).toBeTruthy();
    });
  });
});

describe("Social Links Data", () => {
  test("social links array is not empty", () => {
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  test("each social link has required fields", () => {
    socialLinks.forEach((link) => {
      expect(link).toHaveProperty("id");
      expect(link).toHaveProperty("name");
      expect(link).toHaveProperty("url");
      expect(link).toHaveProperty("icon");
      expect(link).toHaveProperty("color");
    });
  });

  test("each social link has valid ID", () => {
    socialLinks.forEach((link) => {
      expect(link.id).toBeTruthy();
      expect(typeof link.id).toBe("string");
    });
  });

  test("each social link has valid name", () => {
    socialLinks.forEach((link) => {
      expect(link.name).toBeTruthy();
      expect(typeof link.name).toBe("string");
    });
  });

  test("each social link has valid URL", () => {
    socialLinks.forEach((link) => {
      expect(link.url).toBeTruthy();
      expect(typeof link.url).toBe("string");
      // URL should start with http, https, mailto:, or tel:
      expect(
        link.url.startsWith("http") ||
          link.url.startsWith("mailto:") ||
          link.url.startsWith("tel:"),
      ).toBe(true);
    });
  });

  test("social links include common platforms", () => {
    const linkNames = socialLinks.map((link) => link.name.toLowerCase());
    expect(linkNames).toContain("github");
    expect(linkNames).toContain("email");
  });

  test("email link uses mailto protocol", () => {
    const emailLink = socialLinks.find((link) => link.name === "Email");
    expect(emailLink).toBeDefined();
    expect(emailLink?.url).toMatch(/^mailto:/);
  });

  test("each social link has color class", () => {
    socialLinks.forEach((link) => {
      expect(link.color).toBeTruthy();
      expect(link.color).toContain("hover:");
    });
  });

  test("IDs are unique", () => {
    const ids = socialLinks.map((link) => link.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe("Data Integration", () => {
  test("projects and social links are properly typed", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(Array.isArray(socialLinks)).toBe(true);
  });

  test("at least 3 projects exist", () => {
    expect(projects.length).toBeGreaterThanOrEqual(3);
  });

  test("at least 3 social links exist", () => {
    expect(socialLinks.length).toBeGreaterThanOrEqual(3);
  });

  test("projects cover all categories", () => {
    const categories = new Set(projects.map((p) => p.category));
    expect(categories.size).toBeGreaterThanOrEqual(1);
  });
});
