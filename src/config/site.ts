import { SiteConfig, ContactConfig } from "@/types";

const baseUrl = "https://techbazr.com";

export const siteConfig: SiteConfig = {
  name: "TechBazr",
  author: "Adeyemi Vincent",
  description:
    "Empowering businesses with specialized IT services for growth and productivity.",
  keywords: [
    "techbazar",
    "techbazr",
    "techbazr.com",
    "techbazr nigeria",
    "techbazr africa",
    "techbazr tech",
    "techbazr technology",
    "techbazr tech company",
    "techbazr tech company in nigeria",
    "techbazr tech company in africa",
    "techbazr tech company in lagos",
    "techbazr tech company in lagos nigeria",
    "techbazr tech company in lagos africa",
    "techbazr tech company in lagos nigeria africa",
    "IT services",
    "IT services in nigeria",
  ],
  url: {
    base: baseUrl,
    author: "https://techbazr.com",
  },
  ogImage: `${baseUrl}/og.jpg`,
};

export const contactConfig: ContactConfig = {
  email: "info@techbazr.com",
};
