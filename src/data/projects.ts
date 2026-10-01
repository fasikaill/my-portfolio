export interface Project {
  id: string;
  title: string;
  repoName: string;
  githubUrl: string;
  tagline: string;
  summary: string;
  technologies: string[];
  keyCapabilities: string[];
  personalContribution?: {
    roleLabel: string;
    details: string;
    testingDetails: string;
  };
  architecture: {
    frontend: string;
    backend: string;
    dataStorage: string;
    services: string;
    asciiDiagram: string;
  };
  domainModules: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "dinkenesh-event-management",
    title: "Dinkenesh Event Management System",
    repoName: "Dinkenesh-Event-Management-System",
    githubUrl: "https://github.com/fasikaill/Dinkenesh-Event-Management-System",
    tagline: "Full-stack event discovery, ticketing, security check-in, and moderation platform",
    summary:
      "A complete event management platform covering public event discovery, ticket purchasing, organizer operations, staff/security QR check-in, moderation reports, appeals, and administrative workflows.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Redis",
      "Socket.IO",
      "Cloudinary",
      "Nodemailer",
      "Recharts",
      "Leaflet",
      "JavaScript",
    ],
    keyCapabilities: [
      "Authentication and role-based access control (Admin, Organizer, Staff, Attendee)",
      "Event discovery, category filtering, and location-based Leaflet mapping",
      "Ticket purchasing with payment initialization and verification",
      "QR-based ticket scanning and check-in with duplicate scan prevention",
      "Attendee ratings, reviews, and organizer reply workflows",
      "Moderation reports against policy-violating events or organizers",
      "Organizer approval workflows, appeals handling, and suspension enforcement",
      "Admin analytics dashboard with CSV metric exports",
      "Template-based email transactional delivery and real-time Socket.IO notifications",
    ],
    personalContribution: {
      roleLabel: "Super Admin + Organizer Moderation / Ban Flow",
      details:
        "Engineered the complete Super Admin moderation flow across both frontend and backend services. Implemented the report review system, administrative investigation queues, organization suspension/ban workflows, and appeal intake mechanisms.",
      testingDetails:
        "Authored dedicated unit and integration test suites specifically validating backend ban-flow state transitions, access revocation, and frontend moderation UI responses.",
    },
    architecture: {
      frontend: "React (Vite SPA) + Tailwind CSS + Leaflet Maps + Recharts Dashboard",
      backend: "Node.js + Express REST API + Socket.IO WebSockets",
      dataStorage: "PostgreSQL with Prisma ORM + Redis for session caching",
      services: "Cloudinary (Media uploads) + Nodemailer (Email verification/tickets)",
      asciiDiagram: `┌────────────────────────────────────────────────────────────────────────┐
│                        Dinkenesh Client Layers                         │
│  [Attendee Discovery]   [Organizer Portal]   [Super Admin Moderation] │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │ HTTP REST + Socket.IO
┌────────────────────────────────────▼───────────────────────────────────┐
│                       Express.js API Gateway                           │
│  ├── Auth Middleware (JWT & RBAC Permission Guards)                    │
│  ├── Event & Ticket Routes (Payment Init & Verification)               │
│  ├── QR Scan & Check-in Handler (Atomic Duplicate Check)               │
│  └── Moderation Engine (Reports, Ban State Machine, Appeals)           │
└──────────────┬─────────────────────┬────────────────────┬──────────────┘
               │ Prisma ORM          │ In-Memory          │ Integrations
┌──────────────▼──────┐   ┌──────────▼─────────┐   ┌──────▼──────────────┐
│  PostgreSQL Engine  │   │ Redis Cache/Store  │   │ Cloudinary & Mailer │
│  Users, Orgs,       │   │ Token Blacklist,   │   │ Media Storage,      │
│  Events, Tickets    │   │ Active Scan Locks  │   │ Email Notifications │
└─────────────────────┘   └────────────────────┘   └─────────────────────┘`,
    },
    domainModules: [
      "Auth & RBAC",
      "Event Discovery",
      "Ticket Sales",
      "QR Validation",
      "Moderation Engine",
      "Ban Workflows",
      "Email Dispatch",
      "CSV Analytics",
    ],
  },
  {
    id: "event-management-system",
    title: "Event Management System",
    repoName: "Event_Management_System",
    githubUrl: "https://github.com/fasikaill/Event_Management_System",
    tagline: "Modular Next.js platform with real-time WebSockets and Chapa payment integration",
    summary:
      "A modern event management platform architected around clean domain modules, pairing Next.js App Router capabilities with WebSockets, Redis caching, Chapa payment processing, and rigorous schema validation.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Redis",
      "WebSockets",
      "Better Auth",
      "Zod",
      "TanStack React Query",
      "React Hook Form",
      "Recharts",
      "Nodemailer",
      "QR Code",
      "Chapa",
      "Node.js",
    ],
    keyCapabilities: [
      "Modular domain-driven project architecture cleanly separating concerns",
      "End-to-end event lifecycle from creation and drafts to live sales and archival",
      "Chapa payment integration with webhook-based settlement confirmation",
      "High-throughput QR check-in workflow with millisecond verification",
      "Real-time event updates and notifications via WebSockets",
      "Strict schema parsing and runtime type inference with Zod and React Hook Form",
      "Secure authentication, sessions, and role permissions powered by Better Auth",
      "Background worker processing with Redis and relational persistence via Prisma",
    ],
    architecture: {
      frontend: "Next.js (App Router) + TypeScript + Tailwind CSS + TanStack Query",
      backend: "Next.js Server Actions & API Routes + WebSockets Server",
      dataStorage: "PostgreSQL via Prisma ORM + Redis for cache & queues",
      services: "Chapa Payment Gateway + QR Generation + Nodemailer Templates",
      asciiDiagram: `┌────────────────────────────────────────────────────────────────────────┐
│                   Next.js Modular Frontend Architecture                │
│  ├── [events] Domain: Discovery, Details, Booking, Form Validation     │
│  ├── [ticketing] Domain: Tier Selection, Cart, Dynamic Pricing         │
│  ├── [check-in] Domain: Camera QR Scanner, Real-time Validation        │
│  └── [analytics] Domain: Recharts Dashboards, Revenue Breakdown        │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │ Type-safe Queries & Server Actions
┌────────────────────────────────────▼───────────────────────────────────┐
│                      Next.js Backend / Domain Handlers                 │
│  ├── Better Auth & Zod Runtime Schema Validation Layer                 │
│  ├── Chapa Payment Webhooks & Verification Pipelines                   │
│  ├── WebSocket Broadcast Server (Live Capacity & Check-ins)            │
│  └── Audit Logging & Security Middleware                               │
└──────────────┬─────────────────────┬────────────────────┬──────────────┘
               │ Prisma Client       │ Queue / Cache      │ Third-party
┌──────────────▼──────┐   ┌──────────▼─────────┐   ┌──────▼──────────────┐
│  PostgreSQL Schema  │   │    Redis Server    │   │ Chapa Payments API  │
│  Normalized Event,  │   │  Pub/Sub Channel,  │   │ Webhook Callbacks,  │
│  Ticket & Log Store │   │  Scan Debouncing   │   │ Transaction Verify  │
└─────────────────────┘   └────────────────────┘   └─────────────────────┘`,
    },
    domainModules: [
      "Domain Architecture",
      "Chapa Payment",
      "Better Auth",
      "Zod Validation",
      "WebSockets",
      "QR Check-in",
      "Audit Logging",
      "Redis Caching",
    ],
  },
  {
    id: "crime-management-system",
    title: "Centralized Crime Management System (CCMS)",
    repoName: "Crime_managment_system",
    githubUrl: "https://github.com/fasikaill/Crime_managment_system",
    tagline: "Next.js & Python/FastAPI system for case management, evidence chains, and legal records",
    summary:
      "A large-scale software engineering system linking a typed Next.js frontend with a high-performance Python/FastAPI backend, designed to handle multi-department law enforcement workflows, evidentiary chain of custody, and legal cases.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "TanStack React Query",
      "Zustand",
      "React Hook Form",
      "Recharts",
      "Vitest",
      "Playwright",
      "Storybook",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "Alembic",
      "Pydantic",
      "Docker",
    ],
    keyCapabilities: [
      "Structured incident reporting, case progression stages, and case creation workflows",
      "Evidence cataloging and digital tracking with custody status verification",
      "Personnel, officer, and department hierarchy tracking with permission scopes",
      "Legal and court proceedings linkage with docket notes and case outcomes",
      "Administrative system health metrics, location hierarchies, and crime classification",
      "Data tables with multi-field filtering, sorting, pagination, and state caching",
      "Python FastAPI backend with asynchronous endpoints and Pydantic validation",
      "PostgreSQL database management with SQLAlchemy ORM and Alembic schema migrations",
      "Automated frontend verification with Vitest, Playwright E2E, and Storybook components",
    ],
    architecture: {
      frontend: "Next.js + TypeScript + Radix UI + Zustand + TanStack Query",
      backend: "Python 3 + FastAPI (Asynchronous REST) + Pydantic v2",
      dataStorage: "PostgreSQL + SQLAlchemy 2.0 ORM + Alembic Migrations + Redis",
      services: "Docker Compose Environment + Playwright Test Harness",
      asciiDiagram: `┌────────────────────────────────────────────────────────────────────────┐
│                  Next.js Enterprise Frontend Layer                     │
│  ├── [Cases & Incidents]    [Evidence Chain]      [Officers & Depts]   │
│  ├── [Legal / Court Dockets] [System Health]       [Reports & Analytics]│
│  └── State Management: Zustand (client session) + React Query (cache)  │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │ Bearer JWT + REST JSON API
┌────────────────────────────────────▼───────────────────────────────────┐
│                      Python / FastAPI Backend Engine                   │
│  ├── Pydantic Schemas (Input Sanitization & Data Contracts)            │
│  ├── JWT Security, Password Hashing & Role Dependency Injection        │
│  ├── Modular Routers: /cases, /evidence, /departments, /legal, /system │
│  └── Asynchronous SQLAlchemy Sessions & Database Transactions          │
└──────────────┬─────────────────────┬────────────────────┬──────────────┘
               │ Alembic Migrations  │ In-Memory          │ Containerization
┌──────────────▼──────┐   ┌──────────▼─────────┐   ┌──────▼──────────────┐
│ PostgreSQL Database │   │    Redis Engine    │   │   Docker Compose    │
│ Complex Relational  │   │  Token Invalidation│   │   Reproducible Dev  │
│ Schema & Indexes    │   │  & Rate Limiting   │   │   & Service Linking │
└─────────────────────┘   └────────────────────┘   └─────────────────────┘`,
    },
    domainModules: [
      "Case Progression",
      "Evidence Custody",
      "Department Matrix",
      "Court Workflows",
      "FastAPI Backend",
      "Alembic Migrations",
      "Docker Setup",
      "Vitest & Playwright",
    ],
  },
];
