/**
 * Vic AI Configuration
 * Advanced AI assistant specialized in software development
 */

export const VIC_AI_CAPABILITIES = {
  // Core Development Skills
  languages: [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust', 'C++', 'C#',
    'PHP', 'Ruby', 'Swift', 'Kotlin', 'Dart', 'Scala', 'Elixir'
  ],
  
  frameworks: {
    frontend: ['React', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js', 'Gatsby'],
    backend: ['Express.js', 'Fastify', 'Django', 'Flask', 'Spring Boot', 'Gin', 'Actix'],
    mobile: ['React Native', 'Flutter', 'Ionic', 'Xamarin'],
    desktop: ['Electron', 'Tauri', 'Qt', 'WPF']
  },
  
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Cassandra', 'DynamoDB'],
  
  cloud: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Netlify', 'Railway', 'Heroku'],
  
  devops: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform'],
  
  // Specialized Skills
  specializations: [
    'Full-Stack Development',
    'API Design & Development',
    'Database Architecture',
    'System Design',
    'Performance Optimization',
    'Security Analysis',
    'Test-Driven Development',
    'Code Review & Refactoring',
    'DevOps & Deployment',
    'Microservices Architecture'
  ]
};

export const VIC_AI_TEMPLATES = {
  // Quick project templates Vic AI can generate
  projects: {
    'react-app': {
      name: 'React Application',
      description: 'Modern React app with TypeScript, Tailwind CSS, and best practices',
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    'nextjs-fullstack': {
      name: 'Next.js Full-Stack App',
      description: 'Complete Next.js application with API routes, database, and authentication',
      stack: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth.js', 'Tailwind CSS']
    },
    'express-api': {
      name: 'Express.js API',
      description: 'RESTful API with Express.js, TypeScript, and database integration',
      stack: ['Express.js', 'TypeScript', 'PostgreSQL', 'JWT', 'Swagger']
    },
    'python-fastapi': {
      name: 'FastAPI Application',
      description: 'High-performance Python API with automatic documentation',
      stack: ['FastAPI', 'Python', 'SQLAlchemy', 'Pydantic', 'PostgreSQL']
    },
    'react-native-app': {
      name: 'React Native Mobile App',
      description: 'Cross-platform mobile application with navigation and state management',
      stack: ['React Native', 'TypeScript', 'React Navigation', 'Redux Toolkit']
    },
    'microservice': {
      name: 'Microservice Architecture',
      description: 'Scalable microservice with Docker, monitoring, and API gateway',
      stack: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL']
    }
  }
};

export const VIC_AI_PROMPTS = {
  // Enhanced prompts for different development scenarios
  codeGeneration: `
    Generate production-ready, well-documented code that follows industry best practices.
    Include error handling, type safety, and comprehensive comments.
  `,
  
  debugging: `
    Analyze the code thoroughly, identify potential issues, and provide detailed
    explanations with multiple solution approaches.
  `,
  
  architecture: `
    Design scalable, maintainable system architecture with proper separation of concerns,
    security considerations, and performance optimization.
  `,
  
  testing: `
    Create comprehensive test suites including unit tests, integration tests,
    and end-to-end tests with proper mocking and coverage.
  `
};

export const VIC_AI_EXAMPLES = {
  // Example interactions to showcase capabilities
  quickStart: [
    "Create a todo app with React and TypeScript",
    "Build a REST API for a blog platform",
    "Set up a PostgreSQL database schema for e-commerce",
    "Generate a responsive landing page with animations",
    "Create a real-time chat application with WebSockets",
    "Build a mobile app for expense tracking",
    "Set up CI/CD pipeline for a Node.js application",
    "Create a microservice for user authentication"
  ]
};
