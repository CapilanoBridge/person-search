import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Code2, Zap, Shield } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
      <CardHeader className="border-b border-blue-500/20">
        <CardTitle className="text-slate-100">🚀 Project Overview</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="mb-4 text-slate-300">
          Person Search is a high-tech demonstration project showcasing the power of Next.js 16, React 19, and modern web technologies. 
          It provides a sleek, high-performance interface for searching and managing user information with real-time database synchronization.
        </p>
        <p className="mb-4 text-slate-300">
          This project leverages Next.js 16 with the App Router, React 19, TypeScript, Prisma v7 ORM, Neon serverless PostgreSQL, 
          and NextAuth.js for authentication to create a responsive, secure, and accessible user experience.
        </p>
        <p className="text-slate-300">
          Key features include advanced search functionality, server-side actions, real-time database operations, 
          Google OAuth authentication, and a sophisticated dark-mode-optimized high-tech design with custom animations.
        </p>
      </CardContent>
    </Card>
  )
}

function TechStack() {
  const technologies = [
    { icon: <Code2 className="h-5 w-5" />, name: 'Next.js 16', desc: 'React framework with Turbopack' },
    { icon: <Zap className="h-5 w-5" />, name: 'React 19', desc: 'Modern UI library' },
    { icon: <Shield className="h-5 w-5" />, name: 'TypeScript', desc: 'Type-safe development' },
  ]

  return (
    <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">💻 Technology Stack</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          'Next.js 16 with Turbopack',
          'React 19',
          'TypeScript 5',
          'Tailwind CSS 3',
          'Prisma v7 ORM',
          'Neon PostgreSQL',
          'NextAuth.js v5',
          'Zod Validation',
          'React Hook Form',
          'shadcn/ui Components',
          'Google OAuth 2.0',
          'Custom CSS Animations'
        ].map((tech) => (
          <div key={tech} className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 hover:border-cyan-500/60 transition-colors">
            <p className="text-cyan-300 font-semibold text-sm">✨ {tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild className="bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/50">
        <Link href="https://www.linkedin.com/in/callumbir/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Link>
      </Button>
      <Button asChild variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
        <Link href="https://github.com/gocallum" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Link>
      </Button>
      <Button asChild className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/50">
        <Link href="https://x.com/callumbir">
          <Twitter className="mr-2 h-4 w-4" /> Twitter
        </Link>
      </Button>
    </div>
  )
}

function DeveloperInfo() {
  return (
    <Card className="mb-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
      <CardHeader className="border-b border-blue-500/20">
        <CardTitle className="text-slate-100">👨‍💻 About the Developer</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="mb-4 text-slate-300">
          Hi, I&apos;m <code className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-sm font-semibold border border-cyan-500/50">Dylan Mylz</code>, the developer behind Person Search. I&apos;m passionate about creating 
          high-performance, user-friendly web applications using cutting-edge technologies and modern best practices.
        </p>
        <p className="mb-6 text-slate-300">
          This project demonstrates my expertise in Next.js 16, React 19, TypeScript, database design with Prisma, 
          authentication systems, and modern frontend development. I&apos;m always learning and innovating!
        </p>
        <SocialLinks />
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-20 relative z-10">
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow">About Person Search</h1>
          <p className="text-slate-400 text-lg">A modern, high-tech web application showcasing cutting-edge technologies</p>
        </div>
        
        <ProjectOverview />
        <TechStack />
        <DeveloperInfo />
        
        <Button asChild className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold px-6 py-2 hover:shadow-lg hover:shadow-cyan-500/50">
          <Link href="/">
            ← Back to Home
          </Link>
        </Button>
      </main>
    </div>
  )
}

