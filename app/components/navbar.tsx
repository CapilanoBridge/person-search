// app/components/navbar.tsx
'use client'

import Link from 'next/link';
import { Search, Moon, Sun, Github, Database } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-blue-500/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-12 float">
                <Search className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow">Person Search</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 relative group">
              Home
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 relative group">
              About
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link href="/database" className="text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 relative group">
              <Database className="h-4 w-4 inline mr-1" />
              Database
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Link href="/github" className="text-slate-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 relative group">
              <Github className="h-4 w-4 inline mr-1" />
              GitHub
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Toggle theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}