import Link from "next/link";

const features = [
  {
    icon: "🍹",
    title: "Frozen Cocktails",
    desc: "Classic and tropical cocktails blended to icy perfection.",
  },
  {
    icon: "🌊",
    title: "Tropical Slushies",
    desc: "Alcohol-free island flavors for the whole family.",
  },
  {
    icon: "🌴",
    title: "Fresh Ingredients",
    desc: "Real fruit, premium spirits, and locally inspired flavors.",
  },
];

const bestsellers = [
  {
    name: "Blue Lagoon Freeze",
    desc: "Blue curacao, vodka, lemonade — blended with crushed ice.",
    price: "AWG 14",
    emoji: "💙",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    name: "Mango Tango Slush",
    desc: "Fresh mango, rum, lime juice, tropical vibes.",
    price: "AWG 13",
    emoji: "🥭",
    color: "from-orange-400/20 to-yellow-400/20",
  },
  {
    name: "Passion Fruit Margarita",
    desc: "Tequila, passion fruit, triple sec, crushed ice.",
    price: "AWG 15",
    emoji: "🍊",
    color: "from-pink-500/20 to-orange-400/20",
  },
  {
    name: "Coconut Colada Freeze",
    desc: "Creamy coconut, pineapple, white rum, ice.",
    price: "AWG 14",
    emoji: "🥥",
    color: "from-teal-400/20 to-cyan-300/20",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0c1a2e 0%, #0e4f6e 50%, #0891b2 100%)",
        }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
            <span>🧊</span>
            <span>Now open — come taste the difference</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Cool Down
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
              }}
            >
              The Island Way
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Handcrafted frozen cocktails and tropical slushies made fresh every
            day. The perfect escape in every sip.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              See Our Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
            >
              Find Us
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 27.5C672 35 768 40 864 37.5C960 35 1056 25 1152 20C1248 15 1344 15 1392 15L1440 15V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Why Island Freeze?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every drink is crafted with care, using fresh fruit and premium
              spirits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Fan Favorites
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our most-loved frozen creations — try one today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((item) => (
              <div
                key={item.name}
                className={`bg-gradient-to-br ${item.color} border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:scale-105 transition-transform`}
              >
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm flex-1 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-cyan-700 font-bold text-base">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0891b2 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl mb-6">🌴</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Visit Us Today
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Drop in and let us mix you something special. We&apos;re open daily
            and ready to freeze the moment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0c1a2e] font-bold px-8 py-4 rounded-full hover:bg-cyan-100 transition-colors"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </>
  );
}
