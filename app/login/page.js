export default function LoginPage({ searchParams }) {
  const success = searchParams?.success === "true";

  return (
    <main className="min-h-[80vh] bg-[#0B1222] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl text-center">
        {success && (
          <div className="mb-4 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 px-4 py-3">
            ✅ Trial activated — welcome to DishFuse!
          </div>
        )}
        <h1 className="text-2xl font-bold mb-2">Login</h1>
        <p className="text-white/70 mb-6">Access your DishFuse dashboard</p>

        <form className="grid gap-3 text-left">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/10 focus:outline-none focus:border-[#F4C762]" />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/10 focus:outline-none focus:border-[#F4C762]" />
          </div>
          <button className="mt-2 w-full py-3 rounded-full font-bold text-[#0B1222] bg-gradient-to-r from-[#F4C762] to-[#EEB94A] shadow-lg hover:opacity-90">
            Login
          </button>
        </form>

        <div className="mt-4 text-sm text-white/70">
          New here?{" "}
          <a href="#pricing" className="text-[#F4C762] hover:text-white">
            Start Free 14-Day Trial
          </a>
        </div>
      </div>
    </main>
  );
}
