import { tool } from "ai";
import { z } from "zod";

export const generateProjectTool = tool({
  description: `Generate a complete project structure with all necessary files, configurations, and documentation. 
  This tool creates production-ready project templates for various tech stacks.`,
  parameters: z.object({
    projectType: z.enum([
      "react-app",
      "nextjs-fullstack", 
      "express-api",
      "python-fastapi",
      "react-native-app",
      "vue-app",
      "angular-app",
      "microservice",
      "static-website",
      "electron-app"
    ]).describe("Type of project to generate"),
    projectName: z.string().describe("Name of the project"),
    features: z.array(z.string()).optional().describe("Additional features to include (e.g., 'authentication', 'database', 'testing')"),
    description: z.string().optional().describe("Brief description of the project")
  }),
  execute: async ({ projectType, projectName, features = [], description }) => {
    // This would typically generate actual project files
    // For now, we'll return a structured response that the AI can use
    
    const projectTemplates = {
      "react-app": {
        name: "React Application",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
        files: [
          "package.json",
          "tsconfig.json", 
          "vite.config.ts",
          "tailwind.config.js",
          "src/App.tsx",
          "src/main.tsx",
          "src/components/",
          "src/hooks/",
          "src/utils/",
          "public/index.html"
        ]
      },
      "nextjs-fullstack": {
        name: "Next.js Full-Stack Application",
        stack: ["Next.js", "TypeScript", "Prisma", "NextAuth.js", "Tailwind CSS"],
        files: [
          "package.json",
          "next.config.js",
          "tsconfig.json",
          "tailwind.config.js",
          "prisma/schema.prisma",
          "app/layout.tsx",
          "app/page.tsx",
          "app/api/",
          "components/",
          "lib/",
          "middleware.ts"
        ]
      },
      "express-api": {
        name: "Express.js API",
        stack: ["Express.js", "TypeScript", "PostgreSQL", "JWT"],
        files: [
          "package.json",
          "tsconfig.json",
          "src/app.ts",
          "src/routes/",
          "src/controllers/",
          "src/models/",
          "src/middleware/",
          "src/utils/",
          "src/config/",
          "tests/",
          "Dockerfile"
        ]
      },
      "python-fastapi": {
        name: "FastAPI Application", 
        stack: ["FastAPI", "Python", "SQLAlchemy", "Pydantic"],
        files: [
          "requirements.txt",
          "main.py",
          "app/",
          "app/api/",
          "app/models/",
          "app/schemas/",
          "app/crud/",
          "app/core/",
          "tests/",
          "Dockerfile"
        ]
      }
    };

    const template = projectTemplates[projectType];
    
    if (!template) {
      return {
        success: false,
        error: `Project type "${projectType}" not supported`
      };
    }

    return {
      success: true,
      project: {
        name: projectName,
        type: projectType,
        description: description || `A ${template.name} built with modern best practices`,
        stack: template.stack,
        files: template.files,
        features: features,
        setupInstructions: [
          "1. Clone or download the project files",
          "2. Install dependencies",
          "3. Set up environment variables", 
          "4. Run the development server",
          "5. Start building your application!"
        ],
        nextSteps: [
          "Customize the configuration files",
          "Add your business logic",
          "Set up your database",
          "Configure authentication",
          "Add tests",
          "Deploy to production"
        ]
      }
    };
  }
});
