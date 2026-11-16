export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'skin' | 'hair' | 'laser' | 'cosmetic' | 'anti-aging';
  /** Optional short descriptor. Keep these factual and clinical — do not use it
   *  for unearned social proof like "Most Popular" unless it reflects real data. */
  badge?: string;
  image: string;
  excerpt: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  pricingStarting: string;
  duration: string;
  recoveryTime: string;
  benefits: string[];
  procedureSteps: { title: string; desc: string }[];
  candidates: string;
  recovery: string;
  faqs: ServiceFaq[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'acne-treatment',
    slug: 'acne-treatment',
    title: 'Advanced Acne Treatment & Clearance',
    shortTitle: 'Acne Treatment',
    category: 'skin',
    image: '/assets/images/acne-clearance.jpg',
    excerpt: 'Clinical protocols combining medical-grade salicylic peels, blue light therapy, and active sebum regulation for clear, breakout-free skin.',
    description: 'Our comprehensive acne management programme in Colaba, Mumbai addresses every dimension of persistent acne — from hormonal breakouts and bacterial overgrowth to excess sebum. Using clinical-grade chemical peels, painless comedone extractions, blue light phototherapy, and customized medical regimens, we clear active acne rapidly while preserving skin barrier integrity.',
    metaTitle: 'Acne Treatment in Colaba Mumbai | ABSOLUT AURAA Cosmetic Clinic',
    metaDescription: 'Best acne treatment in Colaba, Mumbai by Rizwana Sayed. Medical peels, blue light therapy & sebum regulation for stubborn, cystic & hormonal acne. Book consultation.',
    metaKeywords: 'acne treatment colaba, best acne treatment mumbai, cystic acne treatment colaba, chemical peel for acne south mumbai, acne clinic near me colaba',
    pricingStarting: '₹2,500',
    duration: '45–60 mins',
    recoveryTime: 'Zero to 24 hrs',
    benefits: [
      'Visible reduction in active inflamed breakouts within 3–4 weeks',
      'Targeted regulation of excess sebum and unclogging of pores',
      'Minimised redness, swelling, and post-inflammatory erythema',
      'Active prevention of new permanent acne scars',
      'Personalised at-home barrier repair and maintenance plan'
    ],
    procedureSteps: [
      { title: '1. In-Depth Skin & Sebum Analysis', desc: 'Digital evaluation of pore congestion, inflammatory markers, and skin barrier health.' },
      { title: '2. Medicated Double Cleansing & Steaming', desc: 'Gentle antibacterial purification to prep pores for safe, sterile extractions.' },
      { title: '3. Targeted Salicylic / Mandelic Peel', desc: 'Medical-grade acid peel to dissolve deep comedones and eliminate acne-causing bacteria.' },
      { title: '4. Blue LED Phototherapy & Calming Mask', desc: '415nm antibacterial blue light followed by a soothing botanical cryo-mask.' }
    ],
    candidates: 'Ideal for teenagers and adults experiencing active acne, comedones, cystic blemishes, or hormonal breakouts.',
    recovery: 'Zero to minimal downtime. Mild erythema usually subsides within a few hours.',
    faqs: [
      {
        question: 'How many sessions are required to clear severe acne?',
        answer: 'Most patients notice marked improvement within 2–3 sessions. A full protocol typically involves 4–6 sessions spaced 2 weeks apart along with targeted topical skincare.'
      },
      {
        question: 'Will the acne come back after treatment?',
        answer: 'We focus on root-cause management and provide continuous maintenance regimens so your skin stays clear, balanced, and healthy long-term.'
      },
      {
        question: 'Is acne treatment painful?',
        answer: 'Not at all. We use gentle, medical-grade techniques with cooling masks to ensure maximum comfort throughout the session.'
      }
    ]
  },
  {
    id: 'acne-scar-treatment',
    slug: 'acne-scar-treatment',
    title: 'Acne Scar Revision & Fractional Laser',
    shortTitle: 'Acne Scar Revision',
    category: 'skin',
    badge: 'High Impact',
    image: '/assets/images/rf-microneedling.jpg',
    excerpt: 'State-of-the-art fractional laser, microneedling with PRP, and subcision to remodel collagen and smooth out deep scars.',
    description: 'Acne scars do not have to be permanent. At ABSOLUT AURAA in Colaba, our scar revision protocols combine FDA-cleared fractional CO2 / Erbium laser resurfacing, medical microneedling with Platelet-Rich Plasma (PRP), TCA cross, and subcision. This multi-modality approach breaks down fibrotic scar tissue and stimulates rapid, natural collagen remodelling.',
    metaTitle: 'Acne Scar Treatment in Colaba Mumbai | Laser Scar Removal South Mumbai',
    metaDescription: 'Eliminate rolling, boxcar & ice pick scars with fractional laser & PRP microneedling at ABSOLUT AURAA Colaba. Expert scar revision in South Mumbai.',
    metaKeywords: 'acne scar treatment colaba, fractional co2 laser mumbai, microneedling prp for scars colaba, ice pick scar removal south mumbai, laser scar removal near me',
    pricingStarting: '₹4,500',
    duration: '60–75 mins',
    recoveryTime: '2–4 days',
    benefits: [
      'Significant, progressive reduction in scar depth and indentation',
      'Smoother, refined skin texture and tightened pore structure',
      'Natural stimulation of type-I and type-III dermal collagen',
      'Effective on ice-pick, boxcar, and rolling post-acne scars',
      'Safe protocols precisely calibrated for Indian skin tones'
    ],
    procedureSteps: [
      { title: '1. Scar Mapping & Classification', desc: 'Precision assessment identifying whether scars are rolling, boxcar, or ice-pick type.' },
      { title: '2. Topical Anesthetic Application', desc: 'High-grade numbing cream applied for 30 minutes ensuring a painless procedure.' },
      { title: '3. Fractional Laser / DermaPen Microneedling', desc: 'Microthermal zones stimulate deep collagen regeneration without surface damage.' },
      { title: '4. Autologous PRP / Growth Factor Infusion', desc: 'Concentrated healing factors applied to accelerate tissue healing and maximize results.' }
    ],
    candidates: 'Recommended for anyone with depressed acne scars, textural irregularities, or enlarged pores once active acne is stabilized.',
    recovery: 'Mild sunburn-like redness and gentle peeling for 2–4 days. Strict broad-spectrum SPF is required.',
    faqs: [
      {
        question: 'Are results from acne scar treatments permanent?',
        answer: 'Yes! The new collagen generated by fractional laser and microneedling permanently lifts the scar base and smooths the skin surface.'
      },
      {
        question: 'Can dark Indian skin develop hyperpigmentation from lasers?',
        answer: 'Our lasers and energy parameters are specifically calibrated for melanin-rich Indian skin types to deliver safe, effective scar revision with zero post-inflammatory hyperpigmentation risk.'
      }
    ]
  },
  {
    id: 'hydrafacial',
    slug: 'hydrafacial',
    title: 'Signature HydraFacial & Medi-Facials',
    shortTitle: 'HydraFacial Glow',
    category: 'cosmetic',
    badge: 'Signature Treatment',
    image: '/assets/images/hydrafacial-glow.jpg',
    excerpt: 'The gold standard 4-in-1 medical facial — vortex deep cleansing, acid exfoliation, painless suction extraction, and hyaluronic infusion.',
    description: 'Experience Mumbai’s most luxurious medical-grade facial at ABSOLUT AURAA, Colaba. Using patented vortex fusion technology, our signature HydraFacial extracts deep blackheads, clears sebum congestion, gently exfoliates dead layers, and saturates the skin with medical antioxidants, peptides, and hyaluronic acid for instantaneous red-carpet luminosity.',
    metaTitle: 'Original HydraFacial in Colaba Mumbai | Medi-Facial Clinic South Mumbai',
    metaDescription: 'Get instant glass skin with HydraFacial at ABSOLUT AURAA Cosmetic Clinic Colaba. Deep pore cleansing, vortex extraction & peptide hydration. Book now!',
    metaKeywords: 'hydrafacial colaba, best hydrafacial in south mumbai, medi facial colaba, glass skin facial mumbai, bridal glow facial colaba',
    pricingStarting: '₹3,500',
    duration: '45–60 mins',
    recoveryTime: 'Instant Glow / Zero Downtime',
    benefits: [
      'Instant radiant glass-skin glow with zero downtime or redness',
      'Painless vortex suction removal of stubborn blackheads and whiteheads',
      'Intense dermal hydration with high-concentration hyaluronic acid',
      'Noticeable softening of fine lines and tightening of open pores',
      'Ideal pre-wedding, party, or monthly luxury skin maintenance'
    ],
    procedureSteps: [
      { title: '1. Vortex Cleansing & Exfoliation', desc: 'Dead cell removal and gentle resurfacing using lactic and glucosamine solutions.' },
      { title: '2. Gentle Glycolic-Salicylic Acid Peel', desc: 'Loosens deep debris and impurities without post-peel flaking or discomfort.' },
      { title: '3. Painless Vortex Extraction', desc: 'Automated vacuum suction draws out blackheads, sebum plugs, and dirt from deep within pores.' },
      { title: '4. Antioxidant & Hyaluronic Infusion', desc: 'Potent cocktail of peptides, antioxidants, and hyaluronic acid pushed deep into the dermal matrix.' }
    ],
    candidates: 'Suitable for all skin types, including sensitive and acne-prone skin, for both men and women.',
    recovery: 'Zero downtime. You can immediately attend events or apply makeup with a glowing complexion.',
    faqs: [
      {
        question: 'How long does the HydraFacial glow last?',
        answer: 'The luminous hydration and plump finish typically lasts 1 to 2 weeks, with progressive skin health improvements when performed monthly.'
      },
      {
        question: 'Is HydraFacial safe before a major event or wedding?',
        answer: 'Yes! It is the perfect treatment 2 to 3 days before a wedding or party because it leaves zero redness and creates a flawless makeup canvas.'
      }
    ]
  },
  {
    id: 'pigmentation-melasma',
    slug: 'pigmentation-melasma',
    title: 'Pigmentation, Melasma & Skin Brightening',
    shortTitle: 'Pigmentation & Melasma',
    category: 'skin',
    badge: 'Clinical Excellence',
    image: '/assets/images/laser-toning-melasma.jpg',
    excerpt: 'Targeted Q-Switched laser toning, tranexamic acid protocols, and clinical depigmenting peels for spotless, radiant skin.',
    description: 'Hyper-pigmentation, sun spots, tanning, and stubborn melasma require nuanced clinical management. At ABSOLUT AURAA Colaba, we utilize advanced Q-Switched Nd:YAG laser toning, tranexamic micro-infusions, and customized glutathione antioxidant therapies to safely shatter melanin clusters and restore an even, luminous complexion across all Indian skin tones.',
    metaTitle: 'Pigmentation & Melasma Treatment in Colaba Mumbai | Laser Toning',
    metaDescription: 'Eliminate dark spots, sun damage & stubborn melasma with Q-Switched laser toning & depigmentation peels at ABSOLUT AURAA Colaba Mumbai.',
    metaKeywords: 'pigmentation treatment colaba, melasma treatment south mumbai, laser toning mumbai, dark spot removal colaba, skin brightening clinic mumbai',
    pricingStarting: '₹3,000',
    duration: '45 mins',
    recoveryTime: 'Zero Downtime',
    benefits: [
      'Visible lightening of dark patches, sun spots, and post-acne marks',
      'Targeted control of chronic melasma with maintenance protocols',
      'Even-toned, brighter skin with natural radiance',
      'Safe, non-ablative laser technology specially tuned for Indian skin',
      'Stimulated natural dermal collagen for refined skin texture'
    ],
    procedureSteps: [
      { title: '1. Wood’s Lamp & Melanin Depth Assessment', desc: 'Differentiating epidermal, dermal, or mixed pigmentation.' },
      { title: '2. Pre-Treatment Calming Cleanse', desc: 'Prepares the epidermis for even laser energy absorption.' },
      { title: '3. Q-Switched Nd:YAG Laser Toning', desc: 'Sub-cellular photo-acoustic pulses selectively fragment deep melanin without harming surrounding tissue.' },
      { title: '4. Tranexamic / Vitamin C Cryo-Infusion', desc: 'Electroporation infusion of potent tyrosinase inhibitors to prevent pigment rebound.' }
    ],
    candidates: 'Individuals with uneven skin tone, sun spots, freckles, tanning, melasma, or stubborn dark marks.',
    recovery: 'Zero downtime. Mild warmth for 15–30 minutes followed by instant radiance.',
    faqs: [
      {
        question: 'How many sessions are needed for melasma?',
        answer: 'Melasma typically requires a structured protocol of 6–8 laser toning sessions combined with medical-grade sun protection and depigmenting topicals.'
      },
      {
        question: 'Can pigmentation return after treatment?',
        answer: 'Without adequate sun protection, ultraviolet rays can stimulate melanocytes. We provide comprehensive SPF and maintenance guidance to ensure lasting clarity.'
      }
    ]
  },
  {
    id: 'laser-hair-removal',
    slug: 'laser-hair-removal',
    title: 'Painless Diode Laser Hair Removal',
    shortTitle: 'Laser Hair Removal',
    category: 'laser',
    badge: 'Permanent Reduction',
    image: '/assets/images/diode-laser-hair.jpg',
    excerpt: 'FDA-approved triple-wavelength diode laser with advanced ice-cool contact chilling for silky smooth, ingrown-free skin.',
    description: 'Say goodbye to painful waxing, ingrown hairs, and razor burns forever. ABSOLUT AURAA Cosmetic Clinic in Colaba offers gold-standard diode laser hair reduction featuring integrated sapphire cooling (-4°C). This allows for virtually painless treatments across full body, face, underarms, bikini, back, and chest for both women and men.',
    metaTitle: 'Painless Laser Hair Removal in Colaba Mumbai | ABSOLUT AURAA',
    metaDescription: 'Get up to 90% permanent hair reduction with painless diode laser at ABSOLUT AURAA Colaba. Full body, facial & bikini laser hair removal for Indian skin.',
    metaKeywords: 'laser hair removal colaba, best laser hair reduction south mumbai, painless diode laser mumbai, full body laser hair removal colaba, bikini laser colaba',
    pricingStarting: '₹1,999',
    duration: '20–90 mins',
    recoveryTime: 'Zero Downtime',
    benefits: [
      'Up to 90% permanent hair reduction after 6–8 sessions',
      'Ice-cool sapphire contact chilling makes treatment virtually painless',
      'Complete elimination of painful ingrown hairs, razor bumps, and folliculitis',
      'FDA-approved triple-wavelength technology safe for all Indian skin phototypes',
      'Significant time and cost savings compared to lifetime salon waxing'
    ],
    procedureSteps: [
      { title: '1. Area Consultation & Patch Test', desc: 'Skin sensitivity check and follicle thickness evaluation.' },
      { title: '2. Smooth Shaving & Grid Marking', desc: 'Skin is cleanly shaved and divided into precision grids for 100% coverage.' },
      { title: '3. Cooling Gel & Diode Laser Gliding', desc: 'In-motion laser technology rapidly destroys hair follicles at the root while cooling the epidermis.' },
      { title: '4. Post-Laser Soothing Gel', desc: 'Aloe-vera and zinc calming formulation applied to lock in comfort.' }
    ],
    candidates: 'Men and women seeking permanent reduction of unwanted hair on face, underarms, arms, legs, bikini, back, chest, or full body.',
    recovery: 'Zero downtime. Normal activities can be resumed immediately.',
    faqs: [
      {
        question: 'Is laser hair removal truly permanent?',
        answer: 'Yes, it provides permanent hair reduction by destroying the follicle germ cells. Maintenance touch-ups once or twice a year are recommended for hormonal areas.'
      },
      {
        question: 'Does diode laser hurt?',
        answer: 'Our advanced machine features -4°C active contact cooling, feeling like a soothing cool massage with mild, comfortable tingling.'
      }
    ]
  },
  {
    id: 'anti-aging-botox-fillers',
    slug: 'anti-aging-botox-fillers',
    title: 'Anti-Aging, Botox & Dermal Fillers',
    shortTitle: 'Anti-Aging & Fillers',
    category: 'anti-aging',
    badge: 'Artistry & Science',
    image: '/assets/images/botox-antiaging.jpg',
    excerpt: 'Natural-looking wrinkle smoothing, volume restoration, jawline contouring, and skin tightening by certified aesthetic specialists.',
    description: 'Look refreshed, rejuvenated, and gracefully youthful. At ABSOLUT AURAA Colaba, our anti-aging and facial rejuvenation treatments focus on bespoke subtlety — never overdone or frozen. Using US-FDA approved neuromodulators (Botox), hyaluronic acid dermal fillers (Juvederm, Restylane), and radiofrequency skin tightening, we lift sagging contours and smooth dynamic wrinkles.',
    metaTitle: 'Botox & Dermal Fillers in Colaba Mumbai | Anti-Aging Clinic',
    metaDescription: 'Natural anti-aging treatments, Botox, lip fillers & skin tightening at ABSOLUT AURAA Cosmetic Clinic Colaba Mumbai. Look 5–10 years younger naturally.',
    metaKeywords: 'botox colaba mumbai, dermal fillers south mumbai, anti aging clinic colaba, lip fillers colaba, skin tightening colaba, wrinkle reduction mumbai',
    pricingStarting: '₹6,000',
    duration: '30–60 mins',
    recoveryTime: 'Zero to 24 hrs',
    benefits: [
      'Softens forehead lines, crow’s feet, frown lines, and bunny lines',
      'Restores youthful volume in hollow under-eyes, cheeks, and temples',
      'Natural, hydrated lip enhancement and defined jawline contouring',
      'Non-surgical facial lifting with zero surgical downtime',
      'Preserves natural facial expressions for refined, sophisticated aesthetics'
    ],
    procedureSteps: [
      { title: '1. Facial Proportions & Symmetry Mapping', desc: 'Golden ratio facial analysis to tailor exact micro-injection sites.' },
      { title: '2. High-Strength Topical Numbing', desc: 'Ensures total patient comfort throughout the procedure.' },
      { title: '3. Precision Micro-Dosing Administration', desc: 'Ultra-fine needles deliver authentic FDA-approved products with millimeter precision.' },
      { title: '4. Post-Treatment Ice Compress & Aftercare', desc: 'Immediate recovery with comprehensive post-procedure instructions.' }
    ],
    candidates: 'Adults looking to smooth expression wrinkles, lift sagging skin, restore lost facial volume, or enhance facial contours.',
    recovery: 'Zero downtime. Mild swelling or pinpoint bruising, if any, resolves within 24–48 hours.',
    faqs: [
      {
        question: 'Will my face look frozen or unnatural?',
        answer: 'Never. Our philosophy is natural rejuvenation. We use conservative micro-dosing to soften wrinkles while preserving your natural smiles and expressions.'
      },
      {
        question: 'How long do Botox and Dermal Fillers last?',
        answer: 'Botox results last 4 to 6 months, while hyaluronic acid dermal fillers typically last between 9 to 18 months depending on the treated area.'
      }
    ]
  },
  {
    id: 'hair-prp-restoration',
    slug: 'hair-prp-restoration',
    title: 'Hair PRP & GFC Regrowth Therapy',
    shortTitle: 'Hair PRP & GFC',
    category: 'hair',
    badge: 'Clinically Proven',
    image: '/assets/images/hair-prp.jpg',
    excerpt: 'Autologous platelet-rich plasma and Growth Factor Concentrate (GFC) to stop hair loss, stimulate dormant follicles, and thicken thinning hair.',
    description: 'Reverse hair thinning and restore dense, healthy hair naturally. ABSOLUT AURAA in Colaba provides advanced autologous Platelet-Rich Plasma (PRP) and next-generation Growth Factor Concentrate (GFC) therapy. By isolating high-concentration platelets and growth factors from your own blood and infusing them into the scalp matrix, we awaken dormant follicles and arrest hair fall.',
    metaTitle: 'PRP Hair Treatment in Colaba Mumbai | GFC Hair Loss Doctor South Mumbai',
    metaDescription: 'Stop hair loss & regrow natural hair with PRP & GFC therapy at ABSOLUT AURAA Colaba Mumbai. Visible hair thickening within 6–8 weeks. Book now.',
    metaKeywords: 'prp hair treatment colaba, gfc hair therapy south mumbai, hair loss treatment colaba, hair regrowth clinic mumbai, hair thinning treatment colaba',
    pricingStarting: '₹3,500',
    duration: '45–60 mins',
    recoveryTime: 'Zero Downtime',
    benefits: [
      'Substantial reduction in active daily hair fall within 3–4 weeks',
      'Reactivates dormant follicles and increases hair shaft diameter',
      '100% natural, biocompatible therapy with zero allergy risk',
      'Highly effective for male and female pattern androgenetic alopecia',
      'Improves scalp vascularity, cellular health, and hair density'
    ],
    procedureSteps: [
      { title: '1. Trichoscopy & Scalp Density Analysis', desc: 'High-magnification digital scalp assessment to evaluate follicular miniaturization.' },
      { title: '2. Gentle Blood Draw & Centrifugation', desc: 'Double-spin centrifugation to isolate pure platelet-rich plasma and growth factors.' },
      { title: '3. Scalp Numbing Spray', desc: 'Topical cooling and vibration anesthesia for a comfortable procedure.' },
      { title: '4. Targeted Micro-Injections & Microneedling', desc: 'Precision delivery of growth factors directly into the follicular stem cell niche.' }
    ],
    candidates: 'Men and women experiencing early to moderate hair thinning, receding hairline, diffuse hair fall, or telogen effluvium.',
    recovery: 'Zero downtime. You can wash your hair the following morning and resume all routine activities immediately.',
    faqs: [
      {
        question: 'How soon can I see results from PRP/GFC hair therapy?',
        answer: 'Hair fall reduction is usually noticeable within 3–4 weeks, while visible new baby hair growth and density improvements appear after 2 to 3 sessions.'
      },
      {
        question: 'How many sessions of hair PRP are recommended?',
        answer: 'An initial series of 4 to 6 sessions spaced 3–4 weeks apart is recommended, followed by maintenance sessions every 4–6 months.'
      }
    ]
  },
  {
    id: 'chemical-peels-glow',
    slug: 'chemical-peels-glow',
    title: 'Medical Chemical Peels & Resurfacing',
    shortTitle: 'Chemical Peels',
    category: 'skin',
    badge: 'Radiance Booster',
    image: '/assets/images/chemical-peel-glow.jpg',
    excerpt: 'Customized AHA/BHA, retinol, and yellow peels to gently exfoliate dead layers, shrink pores, and unveil youthful, luminous skin.',
    description: 'Transform dull, fatigued skin with clinical-grade chemical peels at ABSOLUT AURAA, Colaba. Formulated with precise percentages of glycolic, salicylic, lactic, ferulic, and mandelic acids, our customized peels dissolve cellular adhesive bonds, stimulate epidermal turnover, and reveal baby-soft, luminous skin underneath.',
    metaTitle: 'Chemical Peels in Colaba Mumbai | Skin Resurfacing South Mumbai',
    metaDescription: 'Gentle, effective chemical peels in Colaba Mumbai for glowing skin, acne marks, fine lines & open pores. Expert professional skin care at ABSOLUT AURAA.',
    metaKeywords: 'chemical peel colaba, yellow peel mumbai, skin peeling treatment south mumbai, aha bha peel clinic colaba, skin rejuvenation colaba',
    pricingStarting: '₹2,000',
    duration: '30–45 mins',
    recoveryTime: '1–3 days',
    benefits: [
      'Accelerates skin cell turnover and removes stubborn dull layers',
      'Clears clogged pores, blackheads, and superficial post-acne blemishes',
      'Refines uneven texture and diminishes fine expression lines',
      'Customized strength suitable for sensitive and darker Indian skin types',
      'Enhances the absorption and effectiveness of your daily skincare'
    ],
    procedureSteps: [
      { title: '1. Skin pH Balancing Cleanse', desc: 'Prepares the epidermis for uniform, controlled peel penetration.' },
      { title: '2. Layered Medical Peel Application', desc: 'Monitored application of targeted acid blend tailored to your skin tolerance.' },
      { title: '3. Neutralisation & pH Reset', desc: 'Precision alkaline neutralising bath stopping acid activity instantly.' },
      { title: '4. Calming Peptide Mask & Mineral SPF', desc: 'Deep soothing hydration and broad-spectrum physical sun protection.' }
    ],
    candidates: 'Anyone with dull skin, uneven texture, mild hyperpigmentation, active congestion, or fine lines seeking radiant skin rejuvenation.',
    recovery: 'Minimal to mild micro-peeling for 2 to 3 days. Ample moisturizer and SPF recommended.',
    faqs: [
      {
        question: 'Will chemical peeling burn or damage my skin?',
        answer: 'No. Our peels are medical-grade, supervised by expert cosmetologists with exact neutralizing controls to ensure safe, controlled resurfacing.'
      },
      {
        question: 'Can I go to work immediately after a chemical peel?',
        answer: 'Yes! Most of our superficial to medium peels have zero social downtime, allowing you to return to work immediately with fresh glowing skin.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return SERVICES.find((s) => s.slug === slug);
};
