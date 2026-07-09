import { waLink } from '@/config';

const tiers = [
  {
    name: 'Starter',
    tagline: 'Untuk kost/kontrakan tunggal',
    priceIdr: '149.000',
    trial: '2 bulan free trial',
    highlight: false,
    features: [
      '1 property, max 20 unit',
      '1 staff',
      '100 broadcast/bulan',
      '20 KTP OCR/bulan',
      'Standard reports (4 jenis)',
      'WhatsApp support 24 jam',
    ],
    cta: 'Mulai dari Starter',
  },
  {
    name: 'Growth',
    tagline: 'Untuk multi-property menengah',
    priceIdr: '399.000',
    trial: '2 bulan free trial',
    highlight: true,
    badge: 'Paling Populer',
    features: [
      '3 property, max 80 unit',
      '5 staff dengan shift management',
      '500 broadcast/bulan',
      '100 KTP OCR/bulan',
      'Full analytics dashboard',
      'Escalation & assignment flow',
      'Priority support 4 jam',
      '1× onboarding session',
    ],
    cta: 'Pilih Growth',
  },
  {
    name: 'Business',
    tagline: 'Untuk operator profesional',
    priceIdr: '899.000',
    trial: 'Butuh commitment',
    highlight: false,
    features: [
      'Unlimited property, max 300 unit',
      'Unlimited staff',
      'Unlimited broadcast (fair use)',
      'Unlimited KTP OCR (fair use)',
      'Cross-Property Command Center',
      'Custom RBAC',
      'AI Broadcast Assist',
      'API access (Fase 2)',
      'Dedicated support 1 jam',
      '2× onboarding session/tahun',
    ],
    cta: 'Konsultasi Business',
  },
];

const trustBadges = [
  { icon: '✓', text: 'Tanpa kontrak jangka panjang' },
  { icon: '✓', text: 'Batalkan kapan saja' },
  { icon: '✓', text: 'Tidak ada biaya reactivation' },
  { icon: '✓', text: 'Data Anda selalu aman' },
];

export function PlanPreview() {
  return (
    <section id="plan" className="section-padding bg-gradient-to-b from-brand-bg to-white">
      <div className="container-content">
        <div className="text-center mb-14 sm:mb-16">
          <span className="eyebrow mb-4">Plan Sesuai Skala Bisnis</span>
          <h2 className="heading-2 mt-3 text-brand-navy">
            Mulai kecil.
            <br />
            <span className="text-brand-purple">Tumbuh sesuai kebutuhan.</span>
          </h2>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Semua Partner dapat kualitas AI dan trust network yang sama.
            Yang beda hanya skala bisnis dan tools untuk manage.
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                tier.highlight
                  ? 'bg-brand-gradient text-white shadow-2xl shadow-brand-purple/25 lg:scale-105 border-2 border-brand-accent'
                  : 'bg-white border border-slate-200 hover:border-brand-accent/30 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-brand-purple text-xs font-bold uppercase tracking-wider shadow-lg">
                    ⭐ {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-black tracking-tight mb-1 ${
                    tier.highlight ? 'text-white' : 'text-brand-navy'
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm ${
                    tier.highlight ? 'text-white/80' : 'text-slate-600'
                  }`}
                >
                  {tier.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm font-semibold ${
                      tier.highlight ? 'text-white/80' : 'text-slate-500'
                    }`}
                  >
                    Rp
                  </span>
                  <span
                    className={`text-5xl font-black tracking-tight ${
                      tier.highlight ? 'text-white' : 'text-brand-purple'
                    }`}
                  >
                    {tier.priceIdr}
                  </span>
                  <span
                    className={`text-sm ${
                      tier.highlight ? 'text-white/70' : 'text-slate-500'
                    }`}
                  >
                    /bulan
                  </span>
                </div>
                <div
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md mt-2 ${
                    tier.highlight
                      ? 'bg-white/15 text-white'
                      : 'bg-brand-purple/10 text-brand-purple'
                  }`}
                >
                  {tier.trial}
                </div>
              </div>

              {/* CTA */}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all mb-8 ${
                  tier.highlight
                    ? 'bg-white text-brand-purple hover:bg-slate-100 shadow-lg'
                    : 'bg-brand-purple text-white hover:bg-brand-purple/90'
                }`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <div>
                <div
                  className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                    tier.highlight ? 'text-white/70' : 'text-slate-500'
                  }`}
                >
                  Termasuk:
                </div>
                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`inline-flex items-center justify-center w-4 h-4 rounded-full mt-0.5 flex-shrink-0 ${
                          tier.highlight ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          tier.highlight ? 'text-white/90' : 'text-slate-700'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise card */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-brand-light mb-2">
                Enterprise
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-2">
                Skala besar? Butuh custom?
              </h3>
              <p className="text-white/70 max-w-md">
                Untuk operator dengan &gt;300 unit atau kebutuhan khusus seperti
                white-label, integrasi ERP, atau SLA custom.
              </p>
            </div>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-white text-brand-navy font-bold rounded-xl hover:bg-slate-100 transition-all"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="inline-flex items-center gap-2 text-sm text-slate-600"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                {badge.icon}
              </span>
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
