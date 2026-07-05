const steps = [
  {
    num: '1',
    icon: '💬',
    title: 'Chat di WhatsApp',
    desc: 'Sebutkan area, budget, dan kebutuhan Anda dalam bahasa sehari-hari.',
  },
  {
    num: '2',
    icon: '🔍',
    title: 'Pilih dari hasil AI',
    desc: 'AI kasih list properti yang cocok. Klik detail langsung buka halaman properti.',
  },
  {
    num: '3',
    icon: '🤝',
    title: 'Hubungi Partner',
    desc: 'Deal via WA yang sama — semuanya tercatat rapi tanpa pindah platform.',
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <div className="text-center mb-14 sm:mb-16">
          <span className="eyebrow mb-4">Cara Kerja</span>
          <h2 className="heading-2 mt-3 text-brand-navy">
            Dari pertanyaan sampai deal,
            <br />
            hanya <span className="text-brand-purple">3 langkah</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-brand-bg rounded-2xl p-8 border border-slate-200/60 hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-purple/5 transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 -left-1 w-11 h-11 rounded-xl bg-brand-gradient text-white flex items-center justify-center font-black text-lg shadow-lg shadow-brand-purple/20">
                {step.num}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 mt-2">{step.icon}</div>

              <h3 className="text-xl font-bold mb-2 text-brand-navy">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
