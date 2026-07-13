export function PartnerBanner() {
  return (
    <section
      id="partner"
      className="relative overflow-hidden bg-brand-gradient text-white py-20 sm:py-24 lg:py-32"
    >
      {/* Blob backgrounds */}
      <div className="hero-blob w-[500px] h-[500px] bg-brand-accent -top-40 -left-40" />
      <div className="hero-blob w-[400px] h-[400px] bg-cyan-500 -bottom-32 -right-32" />

      <div className="container-content relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-white/70 mb-6">
            Untuk Pemilik Properti
          </span>

          <h2 className="heading-2 mb-6">
            <span className="text-gradient">
              Punya kost, kontrakan,
              <br />
              atau apartemen sewa?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            KosBizz adalah <strong className="font-semibold text-[#A7F3D0]">operating system operasional</strong>{' '}
            yang menyatukan WhatsApp dan dashboard dalam satu platform.
            Percakapan jadi data. Data jadi keputusan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/features/"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-brand-purple font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Lihat Semua Fitur
              <ArrowIcon />
            </a>
            <a
              href="#plan"
              className="btn-secondary"
            >
              Lihat Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
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
