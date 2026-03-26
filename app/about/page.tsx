import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Island Freeze",
  description:
    "The story behind Island Freeze — a premium frozen cocktail system built for Aruba's bars and restaurants.",
};

const pillars = [
  {
    emoji: "🏝️",
    title: "Built for Aruba",
    desc: "Designed specifically for Aruba's high-traffic tourist environment — beach bars, restaurants, hotels, and pool bars where volume and speed drive revenue.",
  },
  {
    emoji: "📦",
    title: "Zero Complexity",
    desc: "The machine is free and fully maintained. Product is supplied directly. No capital investment, no training burden, no operational complexity for your staff.",
  },
  {
    emoji: "💰",
    title: "Real Margins",
    desc: "Pre-dosed, standardized product means ~70% gross margin on every drink — consistent, predictable, and impossible to over-pour.",
  },
];

export default function AboutPage() {
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
          <div className="text-5xl mb-4">🌴</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Island Freeze</h1>
          <p className="text-white/70 text-lg">
            A premium frozen cocktail system for Aruba&apos;s bars and restaurants.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              <strong className="text-gray-900">Island Freeze™</strong> was born
              from a simple observation: Aruba&apos;s bars and restaurants serve
              frozen cocktails the slow, wasteful, labor-intensive way — blenders,
              measured spirits, inconsistent results, and a bartender tied up for
              two minutes per drink.
            </p>
            <p>
              We built a better system. A commercial frozen cocktail machine, fully
              branded and installed for free, loaded with proven ready-to-drink
              bases. Pull the handle, serve a stunning layered cocktail in a branded
              souvenir cup, move on to the next guest.
            </p>
            <p>
              Island Freeze is made for Aruba — an island that welcomes over
              2 million tourists a year, where speed, visual appeal, and consistent
              quality translate directly into revenue. Our goal is simple: help
              Aruba&apos;s bars and restaurants sell more drinks, with less effort,
              at better margins.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-5xl mb-5">{p.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Image
            src="/images/logo-aruba.png"
            alt="Island Freeze Aruba"
            width={220}
            height={120}
            className="h-28 w-auto object-contain mx-auto mb-4"
          />
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Island Freeze™ Aruba — serving the island&apos;s bars and restaurants
            with a premium frozen cocktail system.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #1281b0 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Interested in Partnering?</h2>
          <p className="text-white/70 text-lg mb-8">
            If you run a bar or restaurant in Aruba, we&apos;d love to show you
            how Island Freeze works — and what it could add to your bottom line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partner"
              className="bg-[#1a9bd4] hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/system"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
