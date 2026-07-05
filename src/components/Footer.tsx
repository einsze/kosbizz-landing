import Link from 'next/link';
import { config } from '@/config';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container-content">
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="KosBizz"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {config.brand.tagline}.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Produk
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/features/"
                  className="text-white/60 hover:text-white transition"
                >
                  Fitur
                </Link>
              </li>
              <li>
                <Link href="/#plan" className="text-white/60 hover:text-white transition">
                  Plan
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition">
                  Homepage
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Perusahaan
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="text-white/60">Tentang KosBizz</span>
              </li>
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="text-white/60 hover:text-white transition"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="text-white/60">Terms of Service</span>
              </li>
              <li>
                <span className="text-white/60">Privacy Policy</span>
              </li>
              <li>
                <span className="text-white/60">PDP Notice</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center gap-4 text-sm text-white/60 mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>📧 {config.contact.email}</span>
            <span>📍 {config.contact.location}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div>
            © {new Date().getFullYear()} KosBizz. All rights reserved.
          </div>
          <div>
            Made with care for property owners across Indonesia.
          </div>
        </div>
      </div>
    </footer>
  );
}
