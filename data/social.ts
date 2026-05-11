import { SocialLink } from "@/types/index";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "FaGithub",
    color: "hover:text-gray-400",
  },
  {
    id: "telegram",
    name: "Telegram",
    url: "https://t.me/yourusername",
    icon: "FaTelegram",
    color: "hover:text-blue-400",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "FaLinkedin",
    color: "hover:text-blue-500",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "FaEnvelope",
    color: "hover:text-red-400",
  },
];
