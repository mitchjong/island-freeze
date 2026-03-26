import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c1a2e] text-white/60 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧊</span>
              <span className="text-white font-bold text-lg">
                Island <span className="text-cyan-400">Freeze</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Tropical frozen cocktails and slushies made fresh daily. Cool
              down the island way.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Hours
            </h3>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-white">11:00 – 22:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-white">10:00 – 23:00</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-white">12:00 – 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Island Freeze. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
