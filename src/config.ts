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
