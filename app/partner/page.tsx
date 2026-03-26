import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Us | Island Freeze",
  description:
    "Apply to become an Island Freeze bar partner or inquire about franchise opportunities.",
};

const partnerTypes = [
  {
    icon: "🍹",
    title: "Bar or Beach Club",
    desc: "Add a fully branded frozen cocktail machine to your bar at zero upfront cost. Earn strong margins on every drink.",
  },
  {
    icon: "🍽️",
    title: "Restaurant",
    desc: "Boost your beverage revenue with a fast, consistent frozen cocktail offering that requires no bartending skill.",
  },
  {
    icon: "🏨",
    title: "Hotel or Resort",
    desc: "Offer a premium frozen cocktail experience at your pool bar, beach club, or lobby. Ideal for high-traffic tourist venues.",
  },
  {
    icon: "🎪",
    title: "Event or Pop-Up",
    desc: "Need Island Freeze for a special event, festival, or pop-up in Aruba? Get in touch and we&apos;ll make it happen.",
  },
];

const faqs = [
  {
    q: "Is the machine really free?",
    a: "Yes. Island Freeze installs and maintains a fully branded frozen cocktail machine at your location at no charge. You purchase the Clubtails® product through us and earn strong retail margins on every drink sold.",
  },
  {
    q: "What product do I order?",
    a: "You order Clubtails® ready-to-drink cocktail product through Island Freeze. It arrives ready to pour into the machine — no measuring, no spirits handling, no bartender training required.",
  },
  {
    q: "What are the margins?",
    a: "Island Freeze is designed for approximately 70% gross margin at the bar level. With 50 drinks per day at average retail pricing, partner bars generate strong recurring revenue with minimal labor cost.",
  },
  {
    q: "Which flavors are available?",
    a: "We launch with three flavors: Sunny Margarita-Style, Blue Hawaiian, and Pink Lemonade. Each machine operates with two to three flavors simultaneously. High-volume locations can add a second machine.",
  },
  {
    q: "How quickly can we get started?",
    a: "Once we agree on the terms, machine installation and product delivery can typically be arranged within a few weeks. We handle the setup — you just start serving.",
  },
];

export default function PartnerPage() {
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
          <div className="text-5xl mb-4">🤝</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Partner With Us</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Bring Island Freeze to your bar, resort, or market. The machine is
            free. The margins are real. The system is ready.
          </p>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              Who We Partner With
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((p) => (
              <div
                key={p.title}
                className="text-center p-7 rounded-2xl border border-gray-100 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form + FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
              Apply to Partner
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Fill out the form and we&apos;ll be in touch within 48 hours to schedule a meeting in Aruba.
            </p>
            <form className="space-y-5" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Business Name
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="Beach Bar, Resort, Venue..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Location / Area in Aruba
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Palm Beach, Eagle Beach, Oranjestad..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@yourbar.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+297 ..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Type of Partnership
                </label>
                <select
                  name="partnership_type"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm bg-white"
                >
                  <option value="">Select...</option>
                  <option value="bar">Bar or Beach Club</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel or Resort</option>
                  <option value="event">Event or Pop-Up</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tell Us More (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Number of locations, average weekly covers, questions..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a9bd4] hover:bg-cyan-500 text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
              >
                Submit Application
              </button>
              <p className="text-xs text-gray-400 text-center">
                We typically respond within 48 hours.
              </p>
            </form>
          </div>

          {/* FAQs */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-cyan-50 border border-cyan-100 rounded-2xl">
              <p className="text-sm text-cyan-800">
                <strong>Questions?</strong> Reach us directly at{" "}
                <a href="mailto:hello@islandfreeze.com" className="underline">
                  hello@islandfreeze.com
                </a>{" "}
                and we&apos;ll get back to you quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #0c1a2e 0%, #1281b0 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            Have a Quick Question?
          </h2>
          <p className="text-white/70 mb-6">
            Reach us directly at{" "}
            <a
              href="mailto:hello@islandfreeze.com"
              className="text-cyan-400 hover:underline"
            >
              hello@islandfreeze.com
            </a>
          </p>
          <Link
            href="/system"
            className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Learn How the System Works
          </Link>
        </div>
      </section>
    </>
  );
}
