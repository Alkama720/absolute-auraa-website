import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CLINIC_PHONE } from '../seo';

export const WhatsAppWidget: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/919082400696?text=' +
    encodeURIComponent('Hello ABSOLUT AURAA Clinic, I would like to inquire about a consultation and treatment in Colaba.');

  return (
    <div className="floating-actions" aria-label="Quick contact buttons">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp pulse"
        aria-label="Chat with ABSOLUT AURAA on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <a
        href={`tel:${CLINIC_PHONE}`}
        className="floating-btn floating-btn--call"
        aria-label="Call ABSOLUT AURAA Clinic"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};
