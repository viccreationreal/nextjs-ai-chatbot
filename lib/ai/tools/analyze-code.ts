import { tool } from "ai";
import { z } from "zod";

export const analyzeCodeTool = tool({
  description: `Analyze code for bugs, performance issues, security vulnerabilities, and best practices. 
  Provides detailed feedback and optimization suggestions.`,
  parameters: z.object({
    code: z.string().describe("The code to analyze"),
    language: z.string().describe("Programming language of the code"),
    analysisType: z.enum([
      "full",
      "security", 
      "performance",
      "bugs",
      "style",
      "architecture"
    ]).describe("Type of analysis to perform"),
    context: z.string().optional().describe("Additional context about the code's purpose")
  }),
  execute: async ({ code, language, analysisType, context }) => {
    // This would typically use static analysis tools
    // For now, we'll return a structured analysis that the AI can use
    
    const analysis = {
      language,
      analysisType,
      context,
      codeLength: code.length,
      linesOfCode: code.split('\n').length,
      
      // Simulated analysis results
      issues: [] as Array<{
        type: 'error' | 'warning' | 'info';
        category: string;
        message: string;
        line?: number;
        suggestion: string;
      }>,
      
      metrics: {
        complexity: 'medium',
        maintainability: 'good',
        testability: 'good',
        performance: 'good'
      },
      
      suggestions: [] as string[],
      
      bestPractices: [] as string[]
    };

    // Basic analysis patterns (in a real implementation, this would be much more sophisticated)
    const codeLines = code.split('\n');
    
    // Check for common issues
    codeLines.forEach((line, index) => {
      const lineNumber = index + 1;
      
      // Security checks
      if (analysisType === 'full' || analysisType === 'security') {
        if (line.includes('eval(') || line.includes('innerHTML')) {
          analysis.issues.push({
            type: 'warning',
            category: 'Security',
            message: 'Potential XSS vulnerability detected',
            line: lineNumber,
            suggestion: 'Use safer alternatives like textContent or proper sanitization'
          });
        }
        
        if (line.includes('password') && line.includes('console.log')) {
          analysis.issues.push({
            type: 'error',
            category: 'Security',
            message: 'Sensitive information logged to console',
            line: lineNumber,
            suggestion: 'Remove console.log statements containing sensitive data'
          });
        }
      }
      
      // Performance checks
      if (analysisType === 'full' || analysisType === 'performance') {
        if (line.includes('document.getElementById') && language === 'javascript') {
          analysis.issues.push({
            type: 'info',
            category: 'Performance',
            message: 'Consider caching DOM queries',
            line: lineNumber,
            suggestion: 'Store DOM references in variables to avoid repeated queries'
          });
        }
      }
      
      // Style checks
      if (analysisType === 'full' || analysisType === 'style') {
        if (line.trim().length > 120) {
          analysis.issues.push({
            type: 'warning',
            category: 'Style',
            message: 'Line too long',
            line: lineNumber,
            suggestion: 'Break long lines for better readability'
          });
        }
      }
    });

    // Add general suggestions based on language
    if (language === 'javascript' || language === 'typescript') {
      analysis.suggestions.push(
        'Consider using TypeScript for better type safety',
        'Add JSDoc comments for better documentation',
        'Use modern ES6+ features where appropriate'
      );
      
      analysis.bestPractices.push(
        'Use const/let instead of var',
        'Implement proper error handling',
        'Follow consistent naming conventions',
        'Add unit tests for critical functions'
      );
    }
    
    if (language === 'python') {
      analysis.suggestions.push(
        'Follow PEP 8 style guidelines',
        'Add type hints for better code clarity',
        'Use docstrings for function documentation'
      );
      
      analysis.bestPractices.push(
        'Use virtual environments',
        'Handle exceptions appropriately',
        'Follow the DRY principle',
        'Write comprehensive tests'
      );
    }

    return {
      success: true,
      analysis: {
        ...analysis,
        summary: `Analyzed ${analysis.linesOfCode} lines of ${language} code. Found ${analysis.issues.length} issues.`,
        score: Math.max(100 - (analysis.issues.filter(i => i.type === 'error').length * 20) - (analysis.issues.filter(i => i.type === 'warning').length * 10), 0)
      }
    };
  }
});
