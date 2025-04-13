export const siteConfig = {
  name: "Tran Vu",
  title: "Tran Vu - Software Engineer",
  description:
    "Building minimal, pragmatic software solutions. Focused on React, TypeScript, and modern web technologies.",
  url: "https://tranvu.dev",
  ogImage: "https://tranvu.dev/og.jpg",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/teddiebrwn",
    twitter: "https://x.com/tranvu_dev?s=21",
    facebook: "https://www.facebook.com/teddievux/",
    email: "contact@tranvu.dev",
  },
  projects: [
    {
      title: "Project One",
      description: "Description of your first project",
      link: "https://project1.com",
      github: "https://github.com/yourusername/project1",
    },
    // Add more projects here
  ],
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "PostgreSQL",
    "AWS",
  ],
};

export type SiteConfig = typeof siteConfig;
