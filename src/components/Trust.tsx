const trustPoints = [
  {
    icon: '🆔',
    title: 'Verifikasi KTP Digital',
    desc: 'Setiap tenant screening lewat KTP scan + AI Vision. Data reputasi terlindungi antar-Partner tanpa buka identitas.',
  },
  {
    icon: '🔐',
    title: 'Data Anda Terlindungi',
    desc: 'Comply UU Perlindungan Data Pribadi. Consent eksplisit untuk KTP. Anda bisa tarik atau hapus data kapan saja.',
  },
  {
    icon: '📍',
    title: 'Properti Terverifikasi Langsung',
    desc: 'Tim KosBizz mengunjungi setiap kost, kontrakan, dan apartemen sebelum listing. Kami jamin keaslian properti karena datang ke lokasi.',
  },
];

export function Trust() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="text-center mb-14 sm:mb-16">
          <span className="eyebrow mb-4">Kenapa KosBizz Bisa Dipercaya</span>
          <h2 className="heading-2 mt-3 text-brand-navy">
            Bukan cuma marketplace.
            <br />
            <span className="text-brand-purple">Kami jamin di lapangan.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-gradient-to-br from-brand-bg to-white rounded-2xl p-8 border border-slate-200/60 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-gradient-soft flex items-center justify-center text-3xl mb-5">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-navy">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
