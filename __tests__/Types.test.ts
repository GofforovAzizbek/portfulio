import { Project, Skill, SocialLink } from "@/types/index";

describe("TypeScript Interfaces and Types", () => {
  describe("Project Interface", () => {
    test("Project interface can be created", () => {
      const project: Project = {
        id: "test",
        titleUz: "Test",
        titleEn: "Test",
        descriptionUz: "Test desc",
        descriptionEn: "Test desc",
        image: "https://example.com/image.jpg",
        technologies: ["React", "TypeScript"],
        githubUrl: "https://github.com/test",
        demoUrl: "https://demo.test.com",
        category: "fullstack",
        status: "completed",
        year: 2025,
      };
      expect(project).toBeDefined();
      expect(project.id).toBe("test");
      expect(project.category).toBe("fullstack");
    });

    test("Project status values are correct", () => {
      const validStatuses: Project["status"][] = [
        "completed",
        "in-progress",
        "archived",
      ];
      validStatuses.forEach((status) => {
        expect(status).toBeTruthy();
      });
    });

    test("Project category values are correct", () => {
      const validCategories: Project["category"][] = [
        "frontend",
        "backend",
        "fullstack",
        "security",
      ];
      validCategories.forEach((category) => {
        expect(category).toBeTruthy();
      });
    });
  });

  describe("Skill Interface", () => {
    test("Skill interface can be created", () => {
      const skill: Skill = {
        id: "react",
        name: "React",
        category: "frontend",
        icon: "FaReact",
        proficiency: "expert",
      };
      expect(skill).toBeDefined();
      expect(skill.name).toBe("React");
    });

    test("Skill proficiency levels are correct", () => {
      const validProficiencies: Skill["proficiency"][] = [
        "beginner",
        "intermediate",
        "advanced",
        "expert",
      ];
      validProficiencies.forEach((proficiency) => {
        expect(proficiency).toBeTruthy();
      });
    });

    test("Skill category matches Project category", () => {
      const skillCategory: Skill["category"] = "frontend";
      const projectCategory: Project["category"] = "frontend";
      expect(skillCategory).toBe(projectCategory);
    });
  });

  describe("SocialLink Interface", () => {
    test("SocialLink interface can be created", () => {
      const link: SocialLink = {
        id: "github",
        name: "GitHub",
        url: "https://github.com/username",
        icon: "FaGithub",
        color: "hover:text-gray-400",
      };
      expect(link).toBeDefined();
      expect(link.name).toBe("GitHub");
    });

    test("SocialLink URL protocols are supported", () => {
      const validProtocols = ["https://", "http://", "mailto:", "tel:"];
      const urls = [
        "https://github.com/test",
        "mailto:test@example.com",
        "tel:+998901234567",
      ];
      urls.forEach((url) => {
        const hasValidProtocol = validProtocols.some((protocol) =>
          url.startsWith(protocol),
        );
        expect(hasValidProtocol).toBe(true);
      });
    });
  });

  describe("Type Safety", () => {
    test("Project requires all mandatory fields", () => {
      const project: Project = {
        id: "test",
        titleUz: "Test",
        titleEn: "Test",
        descriptionUz: "Desc",
        descriptionEn: "Desc",
        image: "https://example.com/img.jpg",
        technologies: ["React"],
        githubUrl: "https://github.com",
        category: "fullstack",
        status: "completed",
        year: 2025,
      };
      expect(project.id).toBeDefined();
      expect(project.titleUz).toBeDefined();
      expect(project.category).toBeDefined();
    });

    test("Project optional fields work", () => {
      const projectWithoutDemo: Project = {
        id: "test",
        titleUz: "Test",
        titleEn: "Test",
        descriptionUz: "Desc",
        descriptionEn: "Desc",
        image: "https://example.com/img.jpg",
        technologies: ["React"],
        githubUrl: "https://github.com",
        category: "fullstack",
        status: "completed",
        year: 2025,
      };
      expect(projectWithoutDemo.demoUrl).toBeUndefined();
    });
  });
});
