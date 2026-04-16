export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-blue-500/20 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="group">
            <h3 className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3 glow">Person Search</h3>
            <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">A modern, high-tech search application to discover people by name with real-time database integration and seamless authentication.</p>
          </div>
          <div className="group">
            <h4 className="font-bold text-slate-100 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="/" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group/link">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                Home
              </a></li>
              <li><a href="/about" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group/link">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                About
              </a></li>
            </ul>
          </div>
          <div className="group">
            <h4 className="font-bold text-slate-100 mb-4 text-lg">Developer</h4>
            <p className="text-sm text-slate-400 mb-3 group-hover:text-cyan-400 transition-colors duration-300">Dylan Mylz</p>
            <p className="text-xs text-slate-500">&copy; {currentYear} Person Search. All rights reserved.</p>
          </div>
        </div>
        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p className="hover:text-blue-400 transition-colors duration-300">Built with Next.js 16 • React 19 • Prisma v7 • Neon DB • NextAuth.js</p>
            <div className="flex gap-2 text-slate-600">
              <span className="px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300">TypeScript</span>
              <span className="px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300">Tailwind CSS</span>
              <span className="px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 transition-colors duration-300">Google OAuth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

