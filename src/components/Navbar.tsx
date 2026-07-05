import Link from 'next/link';

interface NavbarProps {
  variant?: 'transparent' | 'solid';
}

export function Navbar({ variant = 'transparent' }: NavbarProps) {
  const isTransparent = variant === 'transparent';

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 ${
        isTransparent ? '' : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between py-5 sm:py-6">
          {/* Brand */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="KosBizz"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/features/"
              className={`hidden sm:inline text-sm font-medium transition ${
                isTransparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-slate-600 hover:text-brand-purple'
              }`}
            >
              Fitur
            </Link>
            <Link
              href="/#plan"
              className={`hidden sm:inline text-sm font-medium transition ${
                isTransparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-slate-600 hover:text-brand-purple'
              }`}
            >
              Plan
            </Link>
            <Link
              href="/#partner"
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition ${
                isTransparent
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur'
                  : 'bg-brand-purple text-white hover:bg-brand-purple/90'
              }`}
            >
              Untuk Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
