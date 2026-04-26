import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Zap, Shield, Code, Layers } from 'lucide-react'

export default function DatabasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow">
              Database Architecture
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Comprehensive overview of our Prisma ORM schema, Neon PostgreSQL integration, and database design patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="border-b border-blue-500/20">
                <CardTitle className="text-slate-100 flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  Prisma Schema
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-700 font-mono text-sm text-slate-300 mb-4">
                  <pre className="whitespace-pre-wrap">{`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

model Person {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}`}</pre>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-300">Primary Key</Badge>
                    <span className="text-slate-300">id: Auto-incrementing integer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-300">Unique</Badge>
                    <span className="text-slate-300">email: Unique constraint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-500/20 text-green-300">Timestamp</Badge>
                    <span className="text-slate-300">createdAt: Auto-generated</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm">
              <CardHeader className="border-b border-blue-500/20">
                <CardTitle className="text-slate-100 flex items-center gap-2">
                  <Server className="h-6 w-6" />
                  Database Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-100">Neon PostgreSQL</h4>
                      <p className="text-slate-400 text-sm">Serverless PostgreSQL with auto-scaling, branching, and instant provisioning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-100">Prisma v7 ORM</h4>
                      <p className="text-slate-400 text-sm">Type-safe database access with automatic client generation and migrations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-100">Connection Pooling</h4>
                      <p className="text-slate-400 text-sm">Optimized connection management with Neon adapter for serverless environments</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/30 backdrop-blur-sm mb-12">
            <CardHeader className="border-b border-blue-500/20">
              <CardTitle className="text-slate-100 flex items-center gap-2">
                <Code className="h-6 w-6" />
                CRUD Operations Implementation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-100 mb-3">Server Actions</h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="bg-slate-950/50 p-3 rounded border border-slate-700">
                      <code className="text-cyan-300">createPerson(data)</code>
                      <p className="text-slate-400 mt-1">Inserts new person record</p>
                    </div>
                    <div className="bg-slate-950/50 p-3 rounded border border-slate-700">
                      <code className="text-cyan-300">getPeople()</code>
                      <p className="text-slate-400 mt-1">Retrieves all persons ordered by creation date</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100 mb-3">Database Operations</h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="bg-slate-950/50 p-3 rounded border border-slate-700">
                      <code className="text-cyan-300">updatePerson(id, data)</code>
                      <p className="text-slate-400 mt-1">Updates existing person record</p>
                    </div>
                    <div className="bg-slate-950/50 p-3 rounded border border-slate-700">
                      <code className="text-cyan-300">deletePerson(id)</code>
                      <p className="text-slate-400 mt-1">Removes person record by ID</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-slate-400 mb-6">
              All database operations are type-safe and use Prisma's generated client with Neon PostgreSQL adapter.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back to Person Search
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}