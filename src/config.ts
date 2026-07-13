/**
 * Konfigurasi global untuk landing page.
 */
export const config = {
  brand: {
    name: 'KosBizz',
    tagline: 'Operating system operasional properti sewa Indonesia',
    domain: 'kosbizz.com',
  },
  contact: {
    waNumber: '6285218028600',
    waMessage: '',
    email: 'hello@kosbizz.com',
    location: 'Tangerang, Indonesia',
  },
  siteUrl: 'https://kosbizz.com',
};

/**
 * Generate WA link. Kalau tidak ada pesan (default), link tanpa ?text= —
 * biar pengunjung ketik sendiri (lebih natural, tidak terasa macro-based).
 */
export function waLink(customMessage?: string): string {
  const msg = customMessage ?? config.contact.waMessage;
  const base = `https://wa.me/${config.contact.waNumber}`;
  return msg ? `${base}?text=${encodeURIComponent(msg)}` : base;
}
