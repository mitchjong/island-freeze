import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Island Freeze",
  description: "Learn the story behind Island Freeze — born on the island, made for everyone.",
};

const values = [
  {
    emoji: "🌺",
    title: "Island Born",
    desc: "We&apos;re rooted in island culture — every recipe is inspired by the flavors and colors of the Caribbean.",
  },
  {
    emoji: "🍋",
    title: "Fresh & Real",
    desc: "No powders, no shortcuts. We use fresh fruit, quality spirits, and real ingredients in every drink.",
  },
  {
    emoji: "🤝",
    title: "Community First",
    desc: "Island Freeze was built to bring people together — a spot for locals and visitors alike.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-28 pb-16 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0e4f6e 60%, #0891b2 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">🌴</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Our Story</h1>
          <p className="text-white/70 text-lg">
            Born on the island, crafted with love.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none text-lg leading-relaxed space-y-6 text-gray-600">
            <p>
              <strong className="text-gray-900">Island Freeze</strong> started
              with a simple idea: what if every sip could feel like a vacation?
              Inspired by the vibrant flavors of the Caribbean, we set out to
              create frozen cocktails and slushies that capture the true spirit
              of island life.
            </p>
            <p>
              From the first batch of our Blue Lagoon Freeze to the beloved
              Tamarind Chill, every drink is made fresh to order — blended with
              real fruit, premium spirits, and a whole lot of passion.
            </p>
            <p>
              We&apos;re more than a drink spot. Island Freeze is a place to
              slow down, connect, and savor the moment. Whether you&apos;re a
              local stopping in after a long day or a visitor looking for
              something authentic — you&apos;ve found your spot.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              What We Stand For
            </h2>
            <p className="text-gray-500">The values that go into every drink.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-5xl mb-4">{v.emoji}</div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">
                  {v.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #0891b2 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Come Meet Us</h2>
          <p className="text-white/70 text-lg mb-8">
            We&apos;d love to mix you something special. Check our menu or
            swing by and say hello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Browse the Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Find Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
