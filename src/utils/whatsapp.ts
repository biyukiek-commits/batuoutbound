import { siteConfig } from "../data/site";

export interface WhatsAppMessageOptions {
  packageTitle?: string;
  serviceTitle?: string;
  participantCount?: string | number;
  date?: string;
  customMessage?: string;
}

/**
 * Generate a WhatsApp chat URL with properly encoded message parameters.
 */
export function getWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const number = siteConfig.whatsappNumber;

  let message = "";

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.packageTitle) {
    message = `Halo, saya tertarik dengan paket *${options.packageTitle}*. Mohon informasi detail rundown, fasilitas, dan penawarannya.`;
  } else if (options.serviceTitle) {
    message = `Halo, saya ingin konsultasi mengenai layanan *${options.serviceTitle}* di Batu Malang. Mohon rekomendasi program yang tepat.`;
  } else if (options.participantCount) {
    message = `Halo, saya ingin konsultasi kegiatan gathering/outbound untuk perkiraan ${options.participantCount} peserta${
      options.date ? ` pada tanggal ${options.date}` : ""
    } di Batu Malang.`;
  } else {
    message = "Halo, saya ingin bertanya dan konsultasi tentang paket kegiatan outbound di Batu Malang.";
  }

  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

