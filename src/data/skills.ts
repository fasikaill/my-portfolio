export interface SkillCategory {
  title: string;
  description: string;
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming and database languages applied in university coursework and software projects.",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    description: "User interfaces, client-side data state, routing, and accessible components.",
    items: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
      "TanStack React Query",
      "Recharts",
    ],
  },
  {
    title: "Backend",
    description: "Server architectures, asynchronous REST APIs, authentication layers, and real-time sockets.",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "WebSockets",
      "Socket.IO",
    ],
  },
  {
    title: "Databases & Data",
    description: "Relational modeling, migrations, in-memory caching, and type-safe query abstraction.",
    items: ["PostgreSQL", "Prisma", "SQLAlchemy", "Redis", "Alembic"],
  },
  {
    title: "Tools & Engineering",
    description: "Version control, containerized development, and automated testing frameworks.",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Jest",
      "Vitest",
      "Playwright",
      "Storybook",
    ],
  },
  {
    title: "Integrations",
    description: "External services integrated for transaction settlement, cloud assets, and transactional notifications.",
    items: ["Chapa", "Cloudinary", "Nodemailer"],
  },
];
