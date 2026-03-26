import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0c1a2e] text-white/60 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Island Freeze"
              width={130}
              height={65}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed">
              A premium frozen cocktail system for Aruba&apos;s bars and
              restaurants. Fast service, real margins, zero upfront cost.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/system", label: "The System" },
                { href: "/about", label: "About Us" },
                { href: "/partner", label: "Partner With Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@islandfreeze.com" className="hover:text-cyan-400 transition-colors">
                  hello@islandfreeze.com
                </a>
              </li>
              <li>Aruba • Caribbean • Global</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/partner"
                className="inline-block bg-[#1a9bd4] hover:bg-cyan-400 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Island Freeze™ Aruba. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
