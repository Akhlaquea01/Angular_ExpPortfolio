import { ProjectEntry } from './types';

export const projects: ProjectEntry[] = [
  {
    name: 'iSource — Enterprise Strategic Sourcing Platform',
    description:
      'A high-scale, three-tier multi-tenant sourcing platform (Angular SPA → Node.js BFF → Spring Boot) with a lazy-loaded architecture of 30+ feature and 10+ routing modules.',
    highlights: [
      'Built a dual-shell routing system for diverse user personas, using route guards and resolvers for strict activity-based authorization and efficient data pre-fetching.',
      'Developed dynamic questionnaire engines, real-time multilingual auction monitoring, and Analysis 360 award-scenario comparison tools using Highcharts.',
      'Delivered an AI-powered autonomous negotiation chat featuring SSE streaming, multi-agent delegation, and MCP servers that exposed BFF endpoints as callable tools.',
      'Designed a Node.js Express BFF leveraging the API Quad pattern across 30+ entity groups, implementing SSO authentication, Joi validation, and Consul service discovery.',
    ],
    tech: [
      'Angular 14',
      'TypeScript',
      'RxJS',
      'Node.js',
      'Express',
      'Spring Boot',
      'PostgreSQL',
      'Redis',
      'AWS S3',
      'MCP',
      'SSE',
    ],
  },
  {
    name: 'BOM/BOQ Platform — Procurement Pricing Micro-Application',
    description:
      'A multi-service Bill of Materials platform built as an Angular micro-frontend embedded in a host shell, orchestrated by a primary BFF gateway and four specialized Node.js microservices.',
    highlights: [
      'Implemented high-performance pricing grid components using CDK virtual scroll and debounced inputs to flawlessly render base, alternate, and additional item data.',
      'Created a drag-and-drop BOM template builder with 15+ customizable column types and an advanced mathjs-based formula engine for dynamic calculated pricing.',
      'Engineered an asynchronous Excel processing pipeline to handle massive datasets, using chunked API persistence to eliminate timeout failures.',
      'Secured multi-tenant deployments by integrating HashiCorp Vault, Redis session caching, and JWT middleware, and containerized all 6 services with Docker.',
    ],
    tech: ['Angular 11', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'mathjs', 'Docker', 'ECR'],
  },
  {
    name: 'Merlin — Agentic AI Workflow Platform',
    description:
      'The frontend and integration layer for a procurement automation platform, bridging intuitive UIs with a robust external agentic workflow engine.',
    highlights: [
      'Engineered interactive visual node-graph workflows with GoJS to streamline supplier discovery and business process mapping.',
      'Built sophisticated data ingestion pipelines tailored to structure complex procurement data for optimal LLM consumption and AI-assisted event generation.',
    ],
    tech: ['Node.js', 'Angular', 'LiteLLM', 'GoJS', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'Sourcing Tool — eSourcing Platform',
    description:
      'Core sourcing modules and auction frameworks for a competitive supplier participation platform.',
    highlights: [
      'Designed core modules like RFx templates, bid evaluations, and supplier ranking, improving procurement efficiency by 45%.',
      'Developed auction frameworks such as Japanese and line-item reverse auctions, enhancing competitive supplier participation.',
    ],
    tech: ['Angular', 'TypeScript', 'Node.js'],
  },
];
