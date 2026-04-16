import UserSearch from './components/user-search';
import { TechnicalOverview } from './components/technical-overview';
import { UserDialog } from './components/user-dialog';
import { getPeople, createPerson, deletePerson } from './actions/actions';

export const dynamic = 'force-dynamic'

export default async function Home({ searchParams }: { searchParams: Promise<{ userId?: string }> }) {
  const people = await getPeople();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow">
              Find People Instantly
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Search and manage people with our modern, high-tech database interface. Experience seamless integration with real-time updates powered by Next.js 16 and Neon PostgreSQL.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold">⚡ Real-time Database</div>
              <div className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">🔐 Secure Authentication</div>
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-semibold">🚀 High Performance</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2 space-y-6">
              <UserSearch searchParams={searchParams} />
            </div>
            <div>
              <UserDialog />
            </div>
          </div>

          <TechnicalOverview />

          {/* ===== Prisma / Neon Section ===== */}
          <div className="mt-24 pt-20 border-t border-blue-500/20">
            <div className="mb-12">
              <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent glow">Person Database</h2>
              <p className="text-slate-400 text-lg">Manage your person records with Neon PostgreSQL and real-time synchronization</p>
            </div>

            {/* Add Person Form */}
            <form
              action={async (formData) => {
                'use server'
                await createPerson({
                  name: formData.get('name') as string,
                  email: formData.get('email') as string,
                })
              }}
              className="flex flex-col gap-4 mb-12 max-w-md p-6 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 backdrop-blur-sm"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-cyan-300">Full Name</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Enter full name"
                  className="w-full border border-blue-500/30 bg-slate-800/50 text-slate-100 placeholder-slate-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-cyan-300">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full border border-blue-500/30 bg-slate-800/50 text-slate-100 placeholder-slate-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 mt-2"
              >
                ✨ Add Person
              </button>
            </form>

            {/* People List */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-200 mb-6">Recent People ({people.length})</h3>
              {people.length === 0 ? (
                <div className="p-8 text-center border border-blue-500/20 rounded-lg bg-slate-800/30 backdrop-blur-sm">
                  <p className="text-slate-400">No people added yet. Create one to get started!</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {people.map((person) => (
                    <li
                      key={person.id}
                      className="flex justify-between items-center bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 p-4 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:border-cyan-500/50 group"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">{person.name}</p>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{person.email}</p>
                      </div>
                      <form action={async () => {
                        'use server'
                        await deletePerson(person.id)
                      }} className="ml-4">
                        <button className="px-4 py-2 bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 font-semibold rounded-lg transition-all duration-300 border border-red-500/30 hover:border-red-500/60">
                          ✕ Delete
                        </button>
                      </form>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}