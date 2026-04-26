import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Star, GitBranch, Users } from 'lucide-react'

export default function GitHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow">
              GitHub Repository
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore the complete source code, documentation, and development history of the Person Search application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="border-b border-blue-500/20">
                <CardTitle className="text-slate-100 flex items-center gap-2">
                  <Github className="h-6 w-6" />
                  Repository Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-cyan-400" />
                    <span className="text-slate-300">person-search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-cyan-400" />
                    <span className="text-slate-300">CapilanoBridge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GitBranch className="h-5 w-5 text-cyan-400" />
                    <span className="text-slate-300">next15 branch</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="border-b border-blue-500/20">
                <CardTitle className="text-slate-100 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Full CRUD operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Prisma ORM integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    NextAuth.js authentication
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Responsive design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    TypeScript throughout
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link
              href="https://github.com/CapilanoBridge/person-search"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="h-5 w-5" />
              View on GitHub
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 text-center">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Person Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}