const signatureFeatures = [
  {
    icon: '🤖',
    title: 'AI Discovery',
    desc: 'Visitor tanya natural language, AI parse dan filter properti secara semantic. Bukan sekadar keyword match.',
  },
  {
    icon: '🆔',
    title: 'KTP Trust Network',
    desc: 'Screening tenant cross-Partner dengan AI Vision. Identitas persisten tahan ganti nomor WA.',
  },
  {
    icon: '💬',
    title: 'WhatsApp-First Ops',
    desc: 'Kelola tenant, konfirmasi pembayaran, respond maintenance — semua via WhatsApp yang familiar.',
  },
  {
    icon: '📢',
    title: 'Broadcast Terkontrol',
    desc: 'Kirim pengumuman kolektif dengan target segmentation dan delivery tracking per-recipient.',
  },
  {
    icon: '👥',
    title: 'Staff Management',
    desc: 'On Duty toggle, unit assignment, escalation flow. Delegate operasional, monitor performance.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'Occupancy, revenue, staff performance, discount analytics — real-time di satu tempat.',
  },
];

export function FeaturesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="text-center mb-14 sm:mb-16">
          <span className="eyebrow mb-4">Fitur Signature</span>
          <h2 className="heading-2 mt-3 text-brand-navy">
            Bukan chatbot.
            <br />
            <span className="text-brand-purple">Operating system properti.</span>
          </h2>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Setiap fitur dirancang untuk earn its place. Tidak ada yang di sana
            hanya karena &ldquo;mungkin dibutuhkan&rdquo;.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {signatureFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group bg-brand-bg hover:bg-white rounded-2xl p-7 border border-slate-200/60 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gradient-soft flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-brand-navy">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/features/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-purple font-semibold rounded-xl border-2 border-brand-purple/20 hover:border-brand-purple/40 transition-all"
          >
            Lihat Semua 12 Fitur
            <ArrowIcon />
          </a>
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
