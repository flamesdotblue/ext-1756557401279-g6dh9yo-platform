import React from 'react';
import { Sparkles, Shield, Zap, PenTool } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-first design',
    desc: 'Turn a brief into a pixel-perfect layout, content, and brand palette in seconds.'
  },
  {
    icon: Zap,
    title: '1-click deploy',
    desc: 'Publish to a blazing-fast edge CDN with SSL, analytics, and forms pre-wired.'
  },
  {
    icon: PenTool,
    title: 'Smart content',
    desc: 'Regenerate copy, translate, and auto-SEO with a single prompt inside the editor.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade',
    desc: 'SSO, roles & permissions, audit logs, and SOC2-ready infrastructure.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to ship fast</h2>
          <p className="mt-3 text-white/70">From idea to live site in minutes—not months. Powerful defaults, sensible guardrails.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 p-4 text-white/70 text-sm bg-white/5">
          Tip: You can keep iterating with prompts. Ask the AI to “make the hero bolder” or “add pricing FAQs” and watch changes apply live.
        </div>
      </div>
    </section>
  );
}
