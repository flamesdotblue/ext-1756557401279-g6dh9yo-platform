import React from 'react';
import { Rocket, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0)_0%,rgba(10,10,10,0.15)_45%,rgba(10,10,10,0.6)_70%,rgba(10,10,10,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            New: Voice-powered AI site builder
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Build stunning websites with AI in minutes
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Describe your idea. Our AI designs, writes, and launches a high-converting site complete with SEO, analytics, and CMS.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4" id="start">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-white/90"
            >
              <Rocket className="h-4 w-4" /> Start free trial
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 font-medium hover:bg-white/10"
            >
              <Play className="h-4 w-4" /> Watch demo
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
            <div>No credit card required</div>
            <div className="h-1 w-1 rounded-full bg-white/30" />
            <div>Free custom domain for 14 days</div>
            <div className="h-1 w-1 rounded-full bg-white/30" />
            <div>Cancel anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
