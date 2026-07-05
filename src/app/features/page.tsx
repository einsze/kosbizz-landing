import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FinalCTA } from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Fitur Lengkap — KosBizz',
  description:
    '12 modul KosBizz untuk manajemen operasional properti sewa: dari AI Discovery, KTP Trust Network, sampai Analytics Dashboard.',
};

const modules = [
  {
    num: '01',
    icon: '👤',
    title: 'Partner Management',
    desc: 'Onboarding Partner via Admin dengan verifikasi lapangan. Multi-property under one owner.',
    features: [
      'Verifikasi properti langsung di lokasi',
      'Multi-property per Partner',
      'Subscription management',
    ],
  },
  {
    num: '02',
    icon: '🏢',
    title: 'Property Management',
    desc: 'Kelola multiple property dengan info terstruktur — alamat, fasilitas, rules, foto, dan info pembayaran.',
    features: [
      'Structured facilities & rules',
      'Photo gallery',
      'Info rekening pembayaran',
      'Publish/unpublish control',
    ],
  },
  {
    num: '03',
    icon: '🚪',
    title: 'Unit Management',
    desc: 'Setiap unit dengan pricing per cycle_type, availability, foto, dan fasilitas spesifik.',
    features: [
      'Harga per cycle (jam/hari/bulan/tahun)',
      'Availability calendar (untuk apartment jam-an)',
      'Fasilitas per unit',
      'Photo gallery',
    ],
  },
  {
    num: '04',
    icon: '🔍',
    title: 'Visitor Management',
    desc: 'Track calon tenant dari pertama chat sampai konversi. Multiple conversation paralel dengan Partner berbeda.',
    features: [
      'Pra-tenant state',
      'Conversation paralel',
      'Preferences snapshot untuk AI',
      'Auto-cleanup 90 hari inactive',
    ],
  },
  {
    num: '05',
    icon: '📝',
    title: 'Rental Management',
    desc: 'Unified model untuk semua tipe sewa dengan cycle fleksibel (hourly/daily/weekly/monthly/yearly/custom).',
    features: [
      'Semua siklus dalam 1 sistem',
      'Custom duration mode',
      'Extend fleksibel per renewal',
      'Semua bayar dimuka',
    ],
  },
  {
    num: '06',
    icon: '🆔',
    title: 'KTP Trust Network',
    desc: 'Identitas persisten tahan ganti nomor WA. Cross-Partner intelligence untuk screening tenant.',
    features: [
      'AI Vision OCR (1-2 detik)',
      'Konfirmasi manual Partner',
      'Hidden Notes cross-Partner',
      'Zero identity exposure',
    ],
  },
  {
    num: '07',
    icon: '💰',
    title: 'Payment Management',
    desc: 'Track pembayaran upfront dengan bukti transfer, konfirmasi manual, dan discount approval workflow.',
    features: [
      'Upload bukti transfer via WA',
      'Konfirmasi manual Partner',
      'Discount approval flow (Staff → Partner)',
      'Analytics discount',
    ],
  },
  {
    num: '08',
    icon: '💬',
    title: 'WhatsApp Chatbot Engine',
    desc: 'AI parsing intent, workflow execution, smart routing ke Staff yang tepat berdasarkan assignment.',
    features: [
      'Natural language understanding',
      'Multi-turn conversation memory',
      'Intent classification untuk tenant/visitor',
      'Auto-routing ke Staff On Duty',
    ],
  },
  {
    num: '09',
    icon: '🔧',
    title: 'Maintenance Ticket',
    desc: 'Tenant lapor via WhatsApp, AI auto-categorize, sistem assign ke Staff yang berwenang.',
    features: [
      'Auto-create dari percakapan',
      'Kategori: AC/plumbing/electrical/dll',
      'Priority: low/normal/high/urgent',
      'Timeline comment + resolution notes',
    ],
  },
  {
    num: '10',
    icon: '📋',
    title: 'Notes 3-Layer System',
    desc: 'Public info untuk visitor, Regular Notes untuk operational, Hidden Notes untuk trust network.',
    features: [
      'Public info (property + unit)',
      'Regular Notes key-value (Kost/Kontrakan)',
      'Hidden Notes cross-Partner (KTP-level)',
      'Archive dengan audit trail',
    ],
  },
  {
    num: '11',
    icon: '📢',
    title: 'Broadcast & Notifications',
    desc: 'Kirim pengumuman kolektif dengan target segmentation, delivery tracking, dan scheduled send.',
    features: [
      'Target: semua/per-property/per-unit/custom',
      'Variables: nama_tenant, nama_property, unit',
      'Scheduled broadcast',
      'Delivery tracking per-recipient',
      'Template save & reuse',
    ],
  },
  {
    num: '12',
    icon: '📊',
    title: 'Reporting & Analytics',
    desc: 'Occupancy, revenue, staff performance, discount analytics — real-time di satu tempat.',
    features: [
      'Occupancy rate per property',
      'Revenue estimate + forecasting',
      'Staff performance metrics',
      'Broadcast performance analytics',
      'Discount trend analysis',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-gradient text-white">
        {/* Sketch background full-bleed */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg_fitur.webp')",
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

        <div className="hero-blob w-[500px] h-[500px] bg-brand-accent -top-40 -right-40" />
        <div className="hero-blob w-[400px] h-[400px] bg-cyan-500 -bottom-32 -left-32" />

        <Navbar variant="transparent" />

        <div className="container-content relative z-10 pt-32 sm:pt-40 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-white/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
              12 Modul MVP
            </div>

            <h1 className="heading-1 mb-6">
              <span className="text-gradient">
                Semua fitur yang Anda butuhkan
                <br />
                untuk kelola properti sewa.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
              Bukan koleksi fitur random. Setiap modul dirancang untuk saling
              terhubung membentuk <strong className="font-semibold text-[#A7F3D0]">operating system operasional</strong>{' '}
              yang lengkap.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white [clip-path:polygon(0_100%,100%_100%,100%_60%,0_100%)]" />
      </section>

      {/* Modules grid */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="space-y-6">
            {modules.map((mod, i) => (
              <div
                key={mod.num}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start p-8 sm:p-10 rounded-3xl transition-all duration-300 ${
                  i % 2 === 0
                    ? 'bg-brand-bg border border-slate-200/60'
                    : 'bg-white border border-slate-200/60'
                } hover:border-brand-accent/30 hover:shadow-lg hover:shadow-brand-purple/5`}
              >
                {/* Left: icon + number */}
                <div className="lg:col-span-3">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-brand-gradient text-white flex items-center justify-center text-3xl shadow-lg shadow-brand-purple/20 flex-shrink-0">
                      {mod.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-1">
                        Modul {mod.num}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-brand-navy leading-tight">
                        {mod.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Right: description + features */}
                <div className="lg:col-span-9">
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-5">
                    {mod.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {mod.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom callout */}
      <section className="py-16 bg-gradient-to-b from-white to-brand-bg">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="heading-3 mb-4 text-brand-navy">
              Semua modul berjalan{' '}
              <span className="text-brand-purple">dalam satu platform</span>.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tidak perlu switch antar aplikasi. Tidak perlu copy-paste data.
              WhatsApp jadi antarmuka utama, dashboard jadi otak manajemen —
              semuanya tersinkron real-time.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
