import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-neutral-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500" />
            <span className="font-semibold tracking-tight">AuraSites AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden md:inline-block px-4 py-2 rounded-md border border-white/20 hover:border-white/40 text-sm">Pricing</a>
            <a href="#start" className="inline-block px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:bg-white/90 text-sm">Start free</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500" />
            <span>AuraSites AI</span>
          </div>
          <p>© {new Date().getFullYear()} AuraSites, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
