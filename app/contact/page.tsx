import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Location | Island Freeze",
  description: "Find Island Freeze — hours, location, and how to get in touch.",
};

const hours = [
  { day: "Monday – Friday", time: "11:00 – 22:00" },
  { day: "Saturday", time: "10:00 – 23:00" },
  { day: "Sunday", time: "12:00 – 21:00" },
];

export default function ContactPage() {
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
          <div className="text-5xl mb-4">📍</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Find Us
          </h1>
          <p className="text-white/70 text-lg">
            Drop by for a frozen treat or send us a message.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>📍</span> Location
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Palm Beach, Aruba
                <br />
                Near the beach strip — look for the blue sign!
              </p>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>🕐</span> Opening Hours
              </h2>
              <ul className="space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 text-gray-600 text-sm">
                    <span>{h.day}</span>
                    <span className="font-semibold text-gray-900">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone / Social */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>📞</span> Get in Touch
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+2975550000"
                    className="text-cyan-700 hover:underline font-medium"
                  >
                    +297 555-0000
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:hello@islandfreeze.com"
                    className="text-cyan-700 hover:underline font-medium"
                  >
                    hello@islandfreeze.com
                  </a>
                </li>
                <li>
                  Instagram:{" "}
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline font-medium"
                  >
                    @islandfreeze.aw
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5" action="#" method="POST">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
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
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Ask us anything or leave a note..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100 border-t border-gray-200 h-64 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-4xl mb-3">🗺️</div>
          <p className="text-sm">Map embed — add your Google Maps iframe here</p>
        </div>
      </section>
    </>
  );
}
