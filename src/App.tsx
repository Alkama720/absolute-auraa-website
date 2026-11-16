import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { AppointmentModal } from './components/AppointmentModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { ServiceArea } from './pages/ServiceArea';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Pricing } from './pages/Pricing';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const openBooking = (treatmentName: string = '') => {
    setSelectedTreatment(treatmentName);
    setIsBookingOpen(true);
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenBooking={() => openBooking('')} />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home onOpenBooking={() => openBooking('')} />} />
          <Route path="/about" element={<About onOpenBooking={() => openBooking('')} />} />
          <Route path="/services" element={<Services onOpenBooking={() => openBooking('')} />} />
          <Route path="/services/:slug" element={<ServiceDetail onOpenBooking={() => openBooking('')} />} />
          <Route path="/pricing" element={<Pricing onOpenBooking={(t) => openBooking(t || '')} />} />
          <Route path="/service-areas/:slug" element={<ServiceArea onOpenBooking={() => openBooking('')} />} />
          <Route path="/gallery" element={<Gallery onOpenBooking={() => openBooking('')} />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home onOpenBooking={() => openBooking('')} />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppWidget />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultTreatment={selectedTreatment}
      />
    </div>
  );
};

export default App;
