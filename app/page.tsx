import Link from "next/link";
import Image from "next/image";

const barBenefits = [
  {
    icon: "🎁",
    title: "Machine Is Free",
    desc: "Island Freeze installs a fully branded frozen cocktail machine at your location at no upfront cost. No capital required from your side.",
    highlight: true,
  },
  {
    icon: "⚡",
    title: "Faster Service, Less Labor",
    desc: "Pull the handle and serve. No liquor pouring, no ice, no measuring. Anyone on your staff can operate it from day one.",
    highlight: false,
  },
  {
    icon: "📊",
    title: "~70% Gross Margin",
    desc: "Pre-dosed, standardized product means consistent cost per drink — and ~70% gross margin on every cup sold.",
    highlight: false,
  },
  {
    icon: "🔁",
    title: "Guests Come Back",
    desc: "Guests keep the reusable Island Freeze tumbler and return for refills. Built-in repeat business and brand visibility on the beach.",
    highlight: false,
  },
  {
    icon: "✅",
    title: "Consistent Every Time",
    desc: "No over-pouring, no shrinkage, no alcohol theft risk. Every drink is the same — perfect quality, perfect margin.",
    highlight: false,
  },
  {
    icon: "🌊",
    title: "Stops Traffic Cold",
    desc: "The machine is a visual magnet. Layered frozen colors in a branded cup create instant impulse purchases from passing guests.",
    highlight: false,
  },
];

const flavors = [
  {
    name: "Sunny Margarita-Style",
    desc: "Bright, citrus-forward. The top-selling flavor and gateway product.",
    color: "from-yellow-400/20 to-orange-400/20",
    emoji: "🍋",
    badge: "Top Seller",
  },
  {
    name: "Blue Hawaiian",
    desc: "Tropical, smooth, and visually striking. A natural impulse buy.",
    color: "from-cyan-400/20 to-blue-500/20",
    emoji: "🌊",
    badge: "Visual Seller",
  },
  {
    name: "Mango Margarita",
    desc: "Sweet, tropical mango with a margarita twist — crowd-pleaser for beach crowds.",
    color: "from-orange-300/20 to-yellow-300/20",
    emoji: "🥭",
    badge: "Fan Favorite",
  },
  {
    name: "Strawberry Daiquiri",
    desc: "Classic, vibrant, and universally loved. A strong seller at beach bars and resorts.",
    color: "from-red-400/20 to-pink-400/20",
    emoji: "🍓",
    badge: "Classic",
  },
  {
    name: "Watermelon Margarita",
    desc: "Fresh watermelon flavor with a margarita kick — refreshing and visually striking.",
    color: "from-green-400/20 to-red-300/20",
    emoji: "🍉",
    badge: "Refreshing",
  },
  {
    name: "Pink Lemonade",
    desc: "Bold and refreshing. Ideal for layered combinations and premium drink formats.",
    color: "from-pink-400/20 to-rose-400/20",
    emoji: "🩷",
    badge: "Premium Layer",
  },
];

const venues = [
  { label: "Beach Bars", emoji: "🍹" },
  { label: "Restaurants", emoji: "🍽️" },
  { label: "Hotels & Resorts", emoji: "🏨" },
  { label: "Pool Bars", emoji: "🏊" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0c1a2e 0%, #0d3d5e 45%, #1281b0 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Now available for bars &amp; restaurants in Aruba</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Frozen Cocktails.
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                  }}
                >
                  Built to Scale.
                </span>
              </h1>

              <p className="text-xl text-white/70 mb-4 leading-relaxed max-w-lg">
                Island Freeze™ is a turnkey frozen cocktail system for beach bars,
                resorts, and tourist destinations.
              </p>

              {/* Free machine callout */}
              <div className="inline-flex items-center gap-3 bg-cyan-500/20 border border-cyan-400/30 rounded-2xl px-5 py-3 mb-8">
                <span className="text-2xl">🎁</span>
                <div>
                  <p className="text-white font-bold text-sm">The machine is provided free.</p>
                  <p className="text-cyan-200 text-xs">Zero upfront cost. Zero installation fees.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/partner"
                  className="bg-[#1a9bd4] hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30 text-center"
                >
                  Get the Machine Free
                </Link>
                <Link
                  href="/system"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all text-center"
                >
                  See How It Works
                </Link>
              </div>
            </div>

            {/* Machine image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />
                <Image
                  src="/images/machine-3.png"
                  alt="Island Freeze branded frozen cocktail machine"
                  width={420}
                  height={540}
                  className="relative z-10 drop-shadow-2xl max-h-[500px] w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 27.5C672 35 768 40 864 37.5C960 35 1056 25 1152 20C1248 15 1344 15 1392 15L1440 15V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Why bars need it */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Why Bars Choose Island Freeze
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              No blenders. No measuring. No training required. Just pull the
              handle, serve a stunning frozen cocktail, and watch the revenue stack up.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {barBenefits.map((b) => (
              <div
                key={b.title}
                className={`p-7 rounded-2xl border transition-shadow hover:shadow-md ${
                  b.highlight
                    ? "border-cyan-200 bg-cyan-50"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className={`font-bold mb-2 ${b.highlight ? "text-cyan-800" : "text-gray-900"}`}>
                  {b.title}
                </h3>
                <p className={`text-sm leading-relaxed ${b.highlight ? "text-cyan-700" : "text-gray-500"}`}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cup + souvenir visual */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/cup-tumbler.png"
                alt="Island Freeze reusable souvenir tumbler"
                width={340}
                height={460}
                className="rounded-2xl object-cover shadow-xl max-h-[460px] w-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                A Souvenir That Works for You
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Every Island Freeze is served in a branded reusable souvenir cup.
                Guests keep it, take it home, and return for refills at a discounted
                price — turning a one-time sale into a repeat customer and walking
                advertisement all in one.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Guests carry the brand across the beach and beyond",
                  "Refill model creates built-in return visits",
                  "Eco-friendly — reusable, no single-use plastic",
                  "Refill discount keeps guests coming back",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#1a9bd4] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flavors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Three Signature Flavors
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Powered by Clubtails® — proven ready-to-drink bases formulated for
              perfect frozen performance. Layer them, mix them, serve them in
              reusable souvenir cups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {flavors.map((f) => (
              <div
                key={f.name}
                className={`bg-gradient-to-br ${f.color} border border-gray-200 rounded-2xl p-7 flex flex-col gap-3`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{f.emoji}</span>
                  <span className="text-xs font-bold bg-white/60 text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg">{f.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/system"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Explore the Full System
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Perfect for Any Venue in Aruba
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Wherever tourists gather, Island Freeze performs. High volume,
            fast service, and zero training required.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {venues.map((v) => (
              <div key={v.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center gap-3">
                <span className="text-4xl">{v.emoji}</span>
                <span className="font-semibold text-gray-800 text-sm">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + CTA */}
      <section
        className="py-20 text-white"
        style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #1281b0 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16">
            {[
              { stat: "~70%", label: "Gross margin per drink" },
              { stat: "50+", label: "Drinks served per day, per bar" },
              { stat: "Free", label: "Machine — installed & maintained" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-2">
                  {s.stat}
                </div>
                <div className="text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Ready to Add Island Freeze to Your Bar?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              The machine is free. The product is supplied. The margins are
              real. Let&apos;s talk about bringing Island Freeze to your bar or
              restaurant in Aruba.
            </p>
            <Link
              href="/partner"
              className="inline-block bg-white text-[#0c1a2e] font-bold px-8 py-4 rounded-full hover:bg-cyan-100 transition-colors text-lg"
            >
              Become a Partner Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
