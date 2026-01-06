<a href="#">
  <img alt="Vic AI - The Ultimate AI Assistant" src="app/(chat)/opengraph-image.png">
  <h1 align="center">🤖 Vic AI</h1>
</a>

<p align="center">
    <strong>Vic AI</strong> is a powerful AI assistant that can code applications from scratch, solve complex problems, and handle any development task you throw at it.
</p>

<p align="center">
  <a href="https://chat-sdk.dev"><strong>Read Docs</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## 🚀 Vic AI Capabilities

### 💻 **Advanced Coding Assistant**
- **Full-Stack Development**: Build complete applications from scratch in any language
- **Code Generation**: Create components, APIs, databases, and entire project structures
- **Bug Fixing**: Analyze and fix complex issues in existing codebases
- **Code Review**: Provide detailed feedback and optimization suggestions

### 🛠️ **Project Creation Tools**
- **Template Generation**: Create boilerplate projects for React, Vue, Node.js, Python, and more
- **Architecture Planning**: Design system architecture and database schemas
- **API Development**: Build RESTful APIs, GraphQL endpoints, and microservices
- **Testing**: Generate comprehensive test suites and documentation

### 🧠 **AI-Powered Features**
- **Natural Language to Code**: Describe what you want, get working code
- **Smart Debugging**: Intelligent error detection and resolution
- **Performance Optimization**: Analyze and improve code performance
- **Security Analysis**: Identify and fix security vulnerabilities

### 🎨 **Modern Tech Stack**
- [Next.js](https://nextjs.org) App Router with React Server Components
- [AI SDK](https://ai-sdk.dev/docs/introduction) for advanced AI capabilities
- [shadcn/ui](https://ui.shadcn.com) with [Tailwind CSS](https://tailwindcss.com)
- [Neon Serverless Postgres](https://vercel.com/marketplace/neon) for data persistence
- [Auth.js](https://authjs.dev) for secure authentication

## Model Providers

This template uses the [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) to access multiple AI models through a unified interface. The default configuration includes [xAI](https://x.ai) models (`grok-2-vision-1212`, `grok-3-mini`) routed through the gateway.

### AI Gateway Authentication

**For Vercel deployments**: Authentication is handled automatically via OIDC tokens.

**For non-Vercel deployments**: You need to provide an AI Gateway API key by setting the `AI_GATEWAY_API_KEY` environment variable in your `.env.local` file.

With the [AI SDK](https://ai-sdk.dev/docs/introduction), you can also switch to direct LLM providers like [OpenAI](https://openai.com), [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), and [many more](https://ai-sdk.dev/providers/ai-sdk-providers) with just a few lines of code.

## Deploy Your Own

You can deploy your own version of the Next.js AI Chatbot to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/templates/next.js/nextjs-ai-chatbot)

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various AI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm db:migrate # Setup database or apply latest database changes
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000).
