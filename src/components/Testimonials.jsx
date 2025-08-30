import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Amelia Chen',
    title: 'Founder, NovaCommerce',
    quote:
      'We launched a beautiful site in one afternoon. Conversions are up 38% with zero engineering time.',
  },
  {
    name: 'Marcus Albright',
    title: 'Head of Growth, Finch AI',
    quote:
      'The AI editor feels like magic. It understood our brand and produced better copy than our old agency.',
  },
  {
    name: 'Priya Nair',
    title: 'Marketing Lead, Zephyr Cloud',
    quote:
      'From domain to deploy in minutes. Our team now ships landing pages on demand for every campaign.',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by fast-moving teams</h2>
          <p className="mt-3 text-white/70">See how marketers and founders ship faster and grow with AuraSites AI.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Stars />
              <p className="mt-4 text-white/90">“{r.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-blue-500" />
                <div className="text-sm">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-white/60">{r.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
