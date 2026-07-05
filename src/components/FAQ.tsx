const faqs = [
  {
    q: 'Berapa biaya untuk saya sebagai calon tenant menggunakan KosBizz?',
    a: 'Gratis. Calon tenant tidak dikenakan biaya. KosBizz mengambil pendapatan dari langganan Partner (pemilik properti), bukan dari tenant.',
  },
  {
    q: 'Apakah data KTP saya aman?',
    a: 'Ya. KosBizz comply dengan UU Perlindungan Data Pribadi (UU 27/2022). Kami minta consent eksplisit sebelum menyimpan KTP Anda. Data reputasi dibagikan antar-Partner tanpa membuka identitas Anda. Anda dapat menarik consent atau menghapus data kapan saja.',
  },
  {
    q: 'Bagaimana KosBizz menjamin properti yang saya lihat memang ada dan asli?',
    a: 'Setiap Partner didaftarkan setelah tim KosBizz mengunjungi lokasi properti secara langsung. Kami verifikasi keaslian kost, kontrakan, atau apartemen di lapangan sebelum properti bisa listing di platform kami.',
  },
  {
    q: 'Saya pemilik kost — bagaimana cara mendaftar sebagai Partner?',
    a: 'Klik tombol "Jadi Partner" di atas atau chat kami di WhatsApp. Tim akan menjadwalkan pertemuan offline untuk verifikasi properti dan onboarding. Registrasi bersifat undangan setelah verifikasi lokasi.',
  },
  {
    q: 'Kalau tenant kabur atau bermasalah, apakah KosBizz bertanggung jawab?',
    a: 'KosBizz menyediakan tool untuk membantu Partner screening tenant (KTP verification + reputasi cross-Partner), tapi transaksi terjadi langsung antara tenant dan Partner. Kami tidak menjadi pihak dalam transaksi sewa itu sendiri.',
  },
  {
    q: 'Apakah bisa integrasi dengan sistem accounting yang sudah kami pakai?',
    a: 'Untuk plan Business, kami menyediakan API access (di Fase 2 pengembangan) yang bisa diintegrasikan dengan sistem accounting Anda. Untuk kebutuhan integrasi khusus, silakan konsultasi Enterprise.',
  },
  {
    q: 'Bagaimana kalau saya sebagai Partner mau berhenti berlangganan?',
    a: 'Anda bisa berhenti kapan saja tanpa penalti. Ada masa Grace Period 30 hari setelah langganan habis di mana semua fungsi tetap normal. Data Anda tetap tersimpan hingga 6 bulan setelah suspensi, siap direstore kalau Anda kembali.',
  },
  {
    q: 'Apakah support 24/7?',
    a: 'SLA response berbeda per plan: Starter 24 jam, Growth 4 jam, Business 1 jam (jam kerja). Untuk Enterprise, kami menyediakan dedicated support dengan SLA khusus sesuai kebutuhan.',
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content max-w-3xl">
        <div className="text-center mb-12 sm:mb-14">
          <span className="eyebrow mb-4">Pertanyaan Populer</span>
          <h2 className="heading-2 mt-3 text-brand-navy">
            Ada yang <span className="text-brand-purple">masih ingin ditanyakan?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-brand-bg rounded-2xl border border-slate-200/60 overflow-hidden hover:border-brand-accent/30 transition-colors"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4">
                <span className="font-semibold text-brand-navy text-base sm:text-lg pr-4">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-purple text-lg font-bold group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
