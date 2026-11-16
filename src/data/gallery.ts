export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinic' | 'treatment' | 'equipment';
  image: string;
  alt: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Luxury Reception & Lounge',
    category: 'clinic',
    image: '/assets/images/clinic-reception.jpg',
    alt: 'ABSOLUT AURAA luxury reception and patient lounge in Colaba Mumbai',
  },
  {
    id: '2',
    title: 'Private Specialist Consultation Suite',
    category: 'clinic',
    image: '/assets/images/consultation-room.jpg',
    alt: 'Private consultation room with specialist Rizwana Sayed at ABSOLUT AURAA',
  },
  {
    id: '3',
    title: 'Clinical Treatment Room',
    category: 'clinic',
    image: '/assets/images/treatment-room.png',
    alt: 'Sterile high-tech treatment room at ABSOLUT AURAA Colaba',
  },
  {
    id: '4',
    title: 'Advanced FDA-Approved Lasers & Equipment',
    category: 'equipment',
    image: '/assets/images/treatment-equipment.jpg',
    alt: 'Laser and aesthetic skin treatment equipment at ABSOLUT AURAA Colaba',
  },
  {
    id: '5',
    title: 'Serene Patient Waiting Lounge',
    category: 'clinic',
    image: '/assets/images/waiting-lounge.png',
    alt: 'Serene patient waiting area at ABSOLUT AURAA',
  },
  {
    id: '6',
    title: 'Medical-Grade Skincare Formulations',
    category: 'treatment',
    image: '/assets/images/product-display.jpg',
    alt: 'Clinical skincare and post-treatment care products used at the Colaba clinic',
  },
  {
    id: '7',
    title: 'Signature HydraFacial & Glow Therapy',
    category: 'treatment',
    image: '/assets/images/hydrafacial.png',
    alt: 'HydraFacial skin treatment session at ABSOLUT AURAA',
  },
  {
    id: '8',
    title: 'Laser Skin Rejuvenation & Toning',
    category: 'treatment',
    image: '/assets/images/treatment-laser.png',
    alt: 'Laser skin toning procedure at ABSOLUT AURAA Colaba',
  },
];
