import { waLink } from '@/config';
import { Navbar } from './Navbar';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      {/* Sketch background overlay - full coverage with dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg_hero.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay untuk keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-brand-purple/95 via-brand-blue/70 to-brand-navy/60"
        aria-hidden="true"
      />

      {/* Blob background effects */}
      <div className="hero-blob w-[500px] h-[500px] bg-brand-accent -top-40 -right-40" />
      <div className="hero-blob w-[400px] h-[400px] bg-cyan-500 -bottom-32 -left-32" />

      <Navbar variant="transparent" />

      <div className="container-content relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-white/80 mb-6 sm:mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wa-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-wa-green" />
            </span>
            WhatsApp-First Property Discovery
          </div>

          {/* Headline */}
          <h1 className="heading-1 mb-6">
            <span className="text-gradient">
              Cari tempat tinggal jadi
              <br />
              semudah kirim pesan.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed font-light">
            Sebutkan area, budget, dan kebutuhan Anda — AI KosBizz temukan{' '}
            <strong className="font-semibold text-[#A7F3D0]">
              kost, kontrakan, atau apartemen
            </strong>{' '}
            yang cocok. Tanpa scroll berjam-jam, tanpa filter ribet.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg w-full sm:w-auto"
            >
              <WhatsAppIcon />
              Chat Sekarang di WhatsApp
              <ArrowRightIcon />
            </a>
          </div>

          {/* Example prompt hint */}
          <div className="text-sm text-white/60 font-light">
            Contoh:{' '}
            <span className="font-mono text-white/80">
              &ldquo;kost tangerang 900rb bawa kucing&rdquo;
            </span>
          </div>
        </div>
      </div>

      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_60%,0_100%)]" />
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}
