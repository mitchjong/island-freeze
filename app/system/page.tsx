import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The System | Island Freeze",
  description:
    "How the Island Freeze frozen cocktail system works — machine, flavors, cups, and bar economics.",
};

const steps = [
  {
    num: "01",
    title: "We Install the Machine — Free",
    desc: "Island Freeze provides a fully branded commercial frozen cocktail machine at your location at no upfront cost. Each machine operates with two to three flavors simultaneously.",
  },
  {
    num: "02",
    title: "You Order the Clubtails® Product",
    desc: "Your stock is supplied through Island Freeze. Clubtails® are malt-based, pre-blended alcoholic beverages — no spirits, no measuring, no pouring. Just fill and freeze.",
  },
  {
    num: "03",
    title: "Serve in Seconds",
    desc: "Pull the handle. Serve a stunning layered frozen cocktail in a branded reusable souvenir cup. No training needed — your staff handles it on day one.",
  },
  {
    num: "04",
    title: "Repeat Business Built In",
    desc: "Guests keep the reusable Island Freeze tumbler. They return for refills, creating loyal repeat customers and free brand visibility across the beach.",
  },
];

const flavors = [
  {
    name: "Sunny Margarita-Style",
    desc: "Bright, citrus-forward, and the top-selling flavor. The gateway and anchor product — the drink that introduces guests to Island Freeze.",
    color: "border-yellow-300 bg-yellow-50",
    badge: "bg-yellow-100 text-yellow-800",
    badgeLabel: "Top Seller · Anchor Flavor",
    emoji: "🍋",
  },
  {
    name: "Blue Hawaiian",
    desc: "Tropical, smooth, and visually striking. A natural impulse buy driven by its vivid color. Guests photograph it, share it, and ask for it by name.",
    color: "border-cyan-300 bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-800",
    badgeLabel: "Visual Seller · Social Share",
    emoji: "🌊",
  },
  {
    name: "Mango Margarita",
    desc: "Sweet tropical mango with a margarita kick. A crowd-pleaser that appeals to a wide range of guests at beach bars and resorts.",
    color: "border-orange-300 bg-orange-50",
    badge: "bg-orange-100 text-orange-800",
    badgeLabel: "Fan Favorite",
    emoji: "🥭",
  },
  {
    name: "Strawberry Daiquiri",
    desc: "Classic, vibrant, and universally loved. A strong, consistent seller that drives volume across all venue types.",
    color: "border-red-300 bg-red-50",
    badge: "bg-red-100 text-red-800",
    badgeLabel: "Classic",
    emoji: "🍓",
  },
  {
    name: "Watermelon Margarita",
    desc: "Fresh watermelon flavor with a margarita twist — refreshing, eye-catching, and a natural social media seller.",
    color: "border-green-300 bg-green-50",
    badge: "bg-green-100 text-green-800",
    badgeLabel: "Refreshing",
    emoji: "🍉",
  },
  {
    name: "Pink Lemonade",
    desc: "Bold and refreshing. Ideal for layered combinations and premium drink formats. Creates upsell opportunities at beach bars and resorts.",
    color: "border-pink-300 bg-pink-50",
    badge: "bg-pink-100 text-pink-800",
    badgeLabel: "Premium Layer",
    emoji: "🩷",
  },
];

const comparison = [
  { category: "Service Speed", traditional: "Slow — blenders, labor", island: "Very fast — pull handle" },
  { category: "Labor Requirement", traditional: "Trained bartenders", island: "Minimal training" },
  { category: "Alcohol Control", traditional: "Over-pours & theft risk", island: "Fixed & consistent" },
  { category: "Visual Appeal", traditional: "Limited", island: "High — layered colors" },
  { category: "Sustainability", traditional: "Single-use cups", island: "Reusable souvenir cups" },
  { category: "Gross Margin", traditional: "Variable", island: "~70% consistent" },
  { category: "Scalability", traditional: "Low", island: "High / franchise-ready" },
];

export default function SystemPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-28 pb-16 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0d3d5e 60%, #1281b0 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">⚙️</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">The System</h1>
          <p className="text-white/70 text-lg">
            A complete frozen cocktail operation in a box — machine, product,
            cups, and branding. Zero upfront cost for your bar.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500">Four steps. Zero complexity.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-[#1a9bd4] opacity-40 leading-none pt-1 min-w-[2rem]">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                The Frozen Cocktail Machine
              </h2>
              <ul className="space-y-4 text-gray-600 text-sm">
                {[
                  "Commercial-grade machine with 3 independent 12-liter bowls",
                  "Serves three flavors simultaneously — or layered combinations",
                  "Output: 15–36 liters per hour at peak throughput",
                  "Fully branded with Island Freeze visuals and digital display",
                  "Installed and maintained by Island Freeze — no cost to you",
                  "High-volume locations can operate two machines (4 flavors)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1a9bd4] font-bold text-base mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-200/40 blur-3xl rounded-full" />
                <Image
                  src="/images/machine-3.png"
                  alt="Island Freeze branded machine"
                  width={400}
                  height={520}
                  className="relative z-10 drop-shadow-xl max-h-[480px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavors */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Three Core Flavors
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Powered by Clubtails® — malt-based, pre-blended ready-to-drink
              cocktails formulated for stable alcohol content and perfect frozen
              performance. Choose up to three flavors per machine.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {flavors.map((f) => (
              <div
                key={f.name}
                className={`border-2 ${f.color} rounded-2xl p-7`}
              >
                <div className="text-4xl mb-4">{f.emoji}</div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${f.badge} mb-3 inline-block`}>
                  {f.badgeLabel}
                </span>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{f.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/cup-tumbler.png"
                alt="Island Freeze Aruba reusable souvenir tumbler"
                width={320}
                height={440}
                className="rounded-2xl object-cover shadow-xl max-h-[440px] w-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Reusable Souvenir Cups
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Every Island Freeze is served in a branded reusable souvenir tumbler.
                Guests keep the cup, bringing it back for discounted refills. This drives
                repeat visits, creates a souvenir guests take home, and puts your brand
                on every beach.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Eco-friendly — reusable, no single-use plastic waste",
                  "Branded Island Freeze design with island-specific variant",
                  "Refill discount keeps guests coming back for more",
                  "Refill pricing drives return visits and higher lifetime value",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1a9bd4] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Island Freeze vs. Traditional Frozen Cocktails
            </h2>
          </div>
          <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-600">Category</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-400">Traditional</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#1a9bd4]">Island Freeze™</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-6 py-4 font-medium text-gray-800">{row.category}</td>
                    <td className="px-6 py-4 text-gray-400">{row.traditional}</td>
                    <td className="px-6 py-4 text-gray-900 font-semibold">{row.island}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #1281b0 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Partner?</h2>
          <p className="text-white/70 text-lg mb-8">
            The machine is free. The setup is turnkey. Fill out a short form
            and we&apos;ll be in touch within 48 hours.
          </p>
          <Link
            href="/partner"
            className="inline-block bg-[#1a9bd4] hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Apply to Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
}
