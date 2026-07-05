/**
 * Konfigurasi global untuk landing page.
 * TODO: Isi WA number dan email yang final.
 */
export const config = {
  brand: {
    name: 'KosBizz',
    tagline: 'Operating system operasional properti sewa Indonesia',
    domain: 'kosbizz.com',
  },
  contact: {
    // TODO: Ganti dengan WA number final (format tanpa + dan tanda kurung)
    // Contoh: '628123456789'
    waNumber: '628XXXXXXXXXX',
    waMessage: 'halo',
    email: 'hello@kosbizz.com',
    location: 'Tangerang, Indonesia',
  },
  siteUrl: 'https://kosbizz.com',
};

/**
 * Generate WA link dengan pesan pre-filled
 */
export function waLink(customMessage?: string): string {
  const msg = encodeURIComponent(customMessage ?? config.contact.waMessage);
  return `https://wa.me/${config.contact.waNumber}?text=${msg}`;
}
