import { waLink } from '@/config';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white py-20 sm:py-24">
      <div className="hero-blob w-[500px] h-[500px] bg-brand-accent -top-40 -right-40" />
      <div className="hero-blob w-[400px] h-[400px] bg-cyan-500 -bottom-32 -left-32" />

      <div className="container-content relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-white/70 mb-4">
            Siap Mulai?
          </span>
          <h2 className="heading-2">
            <span className="text-gradient">Mari mulai hari ini.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* For Visitor */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all group">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-3">Cari properti?</h3>
            <p className="text-white/75 mb-6 leading-relaxed">
              Chat AI KosBizz di WhatsApp. Sebutkan area, budget, dan kebutuhan Anda.
              Hasil match akan datang dalam hitungan detik.
            </p>
            <a
              href={waLink('halo, saya ingin cari properti')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Chat Sekarang
            </a>
          </div>

          {/* For Partner */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all group">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-3">Punya properti?</h3>
            <p className="text-white/75 mb-6 leading-relaxed">
              Ngobrol dulu dengan tim kami. Kami akan menjadwalkan pertemuan
              offline untuk verifikasi properti dan onboarding.
            </p>
            <a
              href={waLink('halo, saya pemilik properti dan ingin jadi Partner')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-white text-brand-purple font-bold rounded-xl hover:bg-slate-100 transition-all"
            >
              Jadwal Konsultasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
