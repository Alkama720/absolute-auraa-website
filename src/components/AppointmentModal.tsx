import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/services';
import { CLINIC_PHONE, CLINIC_DISPLAY_PHONE } from '../seo';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: defaultTreatment || 'HydraFacial Glow',
    date: '',
    time: '11:00 AM',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare clean WhatsApp message without emojis
    const message = `*New Appointment Request — ABSOLUT AURAA Clinic (Colaba)*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Treatment:* ${formData.treatment}\n` +
      `*Preferred Date:* ${formData.date || 'Earliest available'}\n` +
      `*Preferred Time:* ${formData.time}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '') +
      `\nSent from website appointment booking.`;

    const whatsappUrl = `https://wa.me/919082400696?text=${encodeURIComponent(message)}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <CheckCircle2 size={64} className="text-gold" style={{ margin: '0 auto 1.5rem' }} />
            <h3 className="section-title">Thank You, {formData.name}!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Redirecting you to our direct WhatsApp concierge for instant confirmation...
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-label section-label--center">Private Consultation</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginTop: '0.25rem' }}>
                Book Your <span>Appointment</span>
              </h3>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                ABSOLUT AURAA Cosmetic Clinic • 4th Pasta Lane, Colaba, Mumbai
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="form-input"
                    placeholder="e.g. +91 90824 00696"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Treatment of Interest *</label>
                <select
                  className="form-select"
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                >
                  <option value="General Consultation">Consultation & Skin Analysis &amp; Skin Analysis</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Bridal Glow Package">Custom Bridal &amp; Party Glow Package</option>
                  <option value="Other">Other Aesthetic Concern</option>
                </select>
              </div>

              <div className="modal-grid-2">
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time</label>
                  <select
                    className="form-select"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Skin Concerns or Notes (Optional)</label>
                <textarea
                  rows={2}
                  className="form-textarea"
                  placeholder="Tell us about your skin concerns, past treatments, or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary btn--lg"
                style={{ width: '100%', marginTop: '0.75rem' }}
              >
                <Send size={16} />
                <span>Confirm Appointment via WhatsApp</span>
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(212,185,106,0.2)' }}>
              <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)' }}>
                Prefer to call directly?{' '}
              </span>
              <a
                href={`tel:${CLINIC_PHONE}`}
                style={{ fontSize: 'var(--fs-xs)', color: 'var(--gold-dark)', fontWeight: 600 }}
              >
                <Phone size={12} style={{ display: 'inline', marginRight: '4px' }} />
                {CLINIC_DISPLAY_PHONE}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
