import React from 'react'

function ErrorPage() {
  return (
    
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
          404 Error
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold mb-4 tracking-tight">
          Oops!
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-200">
          Page Not Found
        </h2>

        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          The page you are looking for does not exist, has been removed,
          or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 shadow-lg"
          >
            Go Back
          </button>

          <a
            href="/"
            className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 shadow-lg"
          >
            Back to Home
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}
export default ErrorPage;