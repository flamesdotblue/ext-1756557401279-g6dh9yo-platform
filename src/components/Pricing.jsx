import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    highlight: false,
    features: [
      '1 AI-generated site',
      'Basic templates',
      'SSL & analytics',
      'Community support',
    ],
    cta: 'Start free',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    highlight: true,
    features: [
      'Unlimited pages',
      'Custom domains',
      'AI copy + SEO toolkit',
      'Forms & CMS',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    period: '',
    highlight: false,
    features: [
      'SSO & RBAC',
      'Audit logs',
      'SLAs & dedicated support',
      'Security reviews',
    ],
    cta: 'Book a demo',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan to start building. Upgrade anytime as you grow.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 bg-white/5 ${tier.highlight ? 'border-white/30 ring-2 ring-white/20' : 'border-white/10'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                {tier.highlight && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500">Popular</span>
                )}
              </div>
              <div className="mt-4">
                <div className="text-3xl font-semibold">{tier.price}</div>
                <div className="text-sm text-white/60">{tier.period}</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.name === 'Enterprise' ? '#demo' : '#start'}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium ${tier.highlight ? 'bg-white text-neutral-900 hover:bg-white/90' : 'border border-white/20 bg-white/5 hover:bg-white/10'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-white/60">Prices in USD. billed monthly. Cancel anytime.</p>
      </div>
    </section>
  );
}
