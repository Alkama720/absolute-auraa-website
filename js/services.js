/* =========================================================
   ABSOLUT AURAA — Services
   Service data, rendering, filtering, modal
   ========================================================= */

(function() {
  const servicesData = [
    {
      id: 'acne',
      title: 'Acne Treatment',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Advanced protocols combining medical-grade therapies to clear active acne and prevent future breakouts.',
      description: 'Our comprehensive acne management programme addresses every dimension of acne — from hormonal triggers to bacterial overgrowth. Using a combination of medical-grade facials, targeted medications, and advanced light therapy, we deliver visible clearing while protecting your skin\'s long-term health.',
      benefits: ['Reduction in active breakouts within 4–6 weeks', 'Decreased inflammation and redness', 'Balanced oil production', 'Prevention of new acne scars', 'Improved skin texture and tone'],
      procedure: 'Treatment begins with an in-depth skin analysis to identify acne type and triggers. A customised protocol may include chemical peels, blue light therapy, extraction, and prescription topicals. Sessions are typically scheduled every 2–4 weeks.',
      candidates: 'Suitable for all acne types — comedonal, inflammatory, cystic, and hormonal. Effective for teenagers and adults.',
      recovery: 'Minimal to no downtime for most protocols. Some treatments may cause mild redness for 24–48 hours.'
    },
    {
      id: 'acne-scars',
      title: 'Acne Scar Treatment',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Sophisticated scar revision techniques to restore smooth, even skin texture after acne.',
      description: 'Acne scars don\'t have to be permanent. Our scar revision protocols use advanced technologies — from fractional lasers to microneedling with PRP — to stimulate collagen remodelling and progressively smooth out depressed and raised scars.',
      benefits: ['Significant improvement in scar depth', 'Smoother, more even skin texture', 'Stimulated natural collagen production', 'Progressive results over multiple sessions', 'Improved skin confidence'],
      procedure: 'After assessing scar type (ice pick, boxcar, rolling), we design a multi-session plan combining fractional CO2 laser, microneedling, chemical peels, and PRP therapy for optimal results.',
      candidates: 'Ideal for patients with post-acne scarring. Best results when acne is well-controlled.',
      recovery: '2–5 days of redness depending on treatment intensity. Sun protection is essential during recovery.'
    },
    {
      id: 'pigmentation',
      title: 'Pigmentation Treatment',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Targeted therapies for dark spots, uneven tone, and hyperpigmentation for radiant, even-toned skin.',
      description: 'Whether caused by sun damage, hormonal changes, or post-inflammatory marks, our pigmentation protocols use a layered approach — combining laser toning, chemical peels, and medical-grade lightening agents — to restore your skin\'s natural luminosity.',
      benefits: ['Visibly reduced dark spots and patches', 'More even, luminous skin tone', 'Controlled melanin production', 'Long-lasting results with proper care', 'Suitable for Indian skin tones'],
      procedure: 'Treatment begins with identifying the depth and cause of pigmentation. A protocol combining Q-switched laser, customised peels, and topical lightening agents is designed for gradual, safe correction.',
      candidates: 'Effective for sun damage, melasma, post-acne marks, and general hyperpigmentation.',
      recovery: 'Minimal downtime. Mild peeling may occur for 2–3 days after certain treatments.'
    },
    {
      id: 'melasma',
      title: 'Melasma Treatment',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Specialised protocols for stubborn melasma using gentle yet effective approaches for Indian skin.',
      description: 'Melasma requires patience and expertise. Our protocols are specifically designed for Indian skin tones, using a gentle but persistent approach that combines low-fluence laser toning, tranexamic acid therapy, and medical-grade skincare to manage this chronic condition effectively.',
      benefits: ['Gradual lightening of melasma patches', 'Reduced recurrence with maintenance plan', 'Safe for darker skin tones', 'Improved overall skin radiance', 'Ongoing management support'],
      procedure: 'A combination of oral and topical tranexamic acid, gentle laser toning sessions, and prescription skincare formulated for melasma management.',
      candidates: 'Patients with hormonal or sun-induced melasma. Especially effective for those who haven\'t responded to topical treatments alone.',
      recovery: 'No downtime. Results are gradual over 8–12 weeks.'
    },
    {
      id: 'laser-hair-removal',
      title: 'Laser Hair Removal',
      category: 'laser',
      image: 'assets/images/treatment-laser.png',
      excerpt: 'Permanent hair reduction using advanced diode laser technology, safe for all skin types.',
      description: 'Our FDA-approved diode laser system delivers permanent hair reduction with precision and comfort. The technology is calibrated for Indian skin tones, offering effective results across all body areas with minimal discomfort.',
      benefits: ['Up to 90% permanent hair reduction', 'Safe for all skin types', 'Virtually painless with cooling technology', 'No ingrown hairs', 'Smooth, hair-free skin long-term'],
      procedure: 'A series of 6–8 sessions spaced 4–6 weeks apart for optimal results. The laser targets hair follicles during the growth phase for permanent reduction.',
      candidates: 'Suitable for men and women. Effective on all body areas — face, underarms, legs, bikini, back, chest.',
      recovery: 'Zero downtime. Mild redness for a few hours post-session.'
    },
    {
      id: 'hydrafacial',
      title: 'Hydra Facial',
      category: 'skin',
      image: 'assets/images/hydrafacial.png',
      excerpt: 'The ultimate luxury facial — cleanse, extract, and hydrate in one indulgent session.',
      description: 'Our signature HydraFacial combines deep cleansing, gentle exfoliation, painless extractions, and intense hydration in a single 45-minute session. The result? Instantly plumper, brighter, more radiant skin with zero irritation.',
      benefits: ['Immediate visible glow', 'Deep pore cleansing', 'Intense hydration', 'Fine line reduction', 'Suitable for all skin types'],
      procedure: 'A 4-step process: cleansing + exfoliation, acid peel, painless extraction, and antioxidant + hyaluronic acid infusion. Optional boosters available for targeted concerns.',
      candidates: 'Perfect for everyone — especially before events, weddings, or as monthly maintenance.',
      recovery: 'Zero downtime. Makeup can be applied immediately. Skin glows for 5–7 days.'
    },
    {
      id: 'chemical-peel',
      title: 'Chemical Peel',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Medical-grade peels to resurface, brighten, and rejuvenate your skin from within.',
      description: 'Our customised chemical peels use controlled concentrations of glycolic, salicylic, lactic, and mandelic acids to accelerate cell turnover, reduce pigmentation, and reveal smoother, brighter skin beneath.',
      benefits: ['Brighter, more even complexion', 'Reduced fine lines', 'Minimised pore size', 'Improved skin texture', 'Reduced acne and post-acne marks'],
      procedure: 'After thorough skin analysis, the appropriate peel type and concentration is selected. Application takes 15–20 minutes with a neutralising step and post-peel care protocol.',
      candidates: 'Suitable for dull skin, pigmentation, acne, fine lines, and uneven texture.',
      recovery: 'Light peeling for 2–3 days. Sun protection mandatory.'
    },
    {
      id: 'microneedling',
      title: 'Microneedling',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Collagen-boosting therapy for scars, fine lines, and overall skin rejuvenation.',
      description: 'Using a medical-grade derma pen, microneedling creates controlled micro-injuries that trigger your skin\'s natural healing response. The result is a surge in collagen and elastin production, gradually improving texture, tone, and firmness.',
      benefits: ['Stimulated collagen production', 'Reduced acne scars and stretch marks', 'Improved skin firmness', 'Minimised pore size', 'Enhanced product absorption'],
      procedure: 'After numbing the treatment area, the derma pen creates controlled micro-channels. PRP or growth factor serums are applied for enhanced results. Sessions take 30–45 minutes.',
      candidates: 'Ideal for acne scars, fine lines, enlarged pores, stretch marks, and overall rejuvenation.',
      recovery: 'Redness for 24–48 hours. Full recovery within 3–5 days.'
    },
    {
      id: 'prp',
      title: 'PRP Therapy',
      category: 'hair',
      image: 'assets/images/treatment-hair.png',
      excerpt: 'Harness your body\'s own growth factors for hair restoration and skin rejuvenation.',
      description: 'Platelet-Rich Plasma therapy concentrates your blood\'s natural growth factors and reintroduces them to stimulate cellular regeneration. For hair loss, PRP revitalises dormant follicles. For skin, it accelerates healing and collagen synthesis.',
      benefits: ['Natural hair regrowth stimulation', 'Reduced hair thinning', 'Enhanced skin healing', 'Boosted collagen for facial rejuvenation', 'Completely natural — uses your own blood'],
      procedure: 'A small blood sample is drawn, processed in a centrifuge to concentrate platelets, and precisely injected into the scalp or skin using fine needles. Sessions take 45–60 minutes.',
      candidates: 'Effective for early to moderate hair loss, hair thinning, post-procedure healing, and facial rejuvenation.',
      recovery: 'Minimal — mild soreness for 24 hours. Resume activities immediately.'
    },
    {
      id: 'hair-treatment',
      title: 'Hair Loss Treatment',
      category: 'hair',
      image: 'assets/images/treatment-hair.png',
      excerpt: 'Comprehensive hair restoration programmes combining medical, topical, and advanced therapies.',
      description: 'Our hair restoration programme begins with a thorough trichological assessment — including hair pull tests, scalp analysis, and blood work — to identify the root cause of hair loss. Treatment plans may combine PRP, mesotherapy, low-level laser therapy, and medical management.',
      benefits: ['Identified root cause of hair loss', 'Customised multi-modal treatment', 'Visible regrowth within 3–4 months', 'Strengthened existing hair', 'Long-term maintenance plan'],
      procedure: 'A combination of in-clinic treatments (PRP, mesotherapy, laser) and at-home protocols (medications, topicals, supplements) designed for progressive improvement.',
      candidates: 'Men and women experiencing hair thinning, pattern baldness, seasonal hair fall, or post-partum hair loss.',
      recovery: 'No downtime for most treatments. Results are gradual and progressive.'
    },
    {
      id: 'botox',
      title: 'Botox',
      category: 'cosmetic',
      image: 'assets/images/treatment-cosmetic.png',
      excerpt: 'Precision anti-wrinkle injections for natural-looking smoothing of fine lines and expression marks.',
      description: 'Our Botox treatments are administered with an artistic eye for natural proportions. Using micro-doses of botulinum toxin, we relax targeted muscles to soften forehead lines, crow\'s feet, and frown lines while preserving your natural expressions.',
      benefits: ['Visibly smoother fine lines and wrinkles', 'Natural-looking results', 'Quick — 15-minute procedure', 'No downtime', 'Results last 4–6 months'],
      procedure: 'After facial analysis, precise micro-injections are placed in targeted muscles. The procedure takes 15–20 minutes. Results appear within 3–7 days and peak at 2 weeks.',
      candidates: 'Suitable for anyone wanting to soften dynamic wrinkles — forehead, between brows, crow\'s feet. Also used for jawline slimming and excessive sweating.',
      recovery: 'Zero downtime. Avoid lying flat for 4 hours post-treatment.'
    },
    {
      id: 'dermal-fillers',
      title: 'Dermal Fillers',
      category: 'cosmetic',
      image: 'assets/images/treatment-cosmetic.png',
      excerpt: 'Volume restoration and facial contouring using premium hyaluronic acid fillers.',
      description: 'Our dermal filler treatments use only premium, FDA-approved hyaluronic acid products to restore lost volume, enhance facial contours, and rejuvenate areas that have lost fullness. Every injection is guided by an understanding of facial anatomy and aesthetic balance.',
      benefits: ['Restored facial volume', 'Enhanced lips and cheekbones', 'Softened nasolabial folds', 'Under-eye hollow correction', 'Immediate, natural-looking results'],
      procedure: 'After detailed facial assessment and discussion of your goals, HA fillers are precisely injected using fine cannulas or needles. The procedure takes 20–40 minutes.',
      candidates: 'Ideal for volume loss, thin lips, hollow cheeks, under-eye hollows, jawline definition, and nasolabial folds.',
      recovery: 'Mild swelling for 24–48 hours. Results are immediate and last 12–18 months.'
    },
    {
      id: 'anti-aging',
      title: 'Anti-Aging Treatment',
      category: 'cosmetic',
      image: 'assets/images/antiaging.png',
      excerpt: 'Comprehensive rejuvenation programmes to slow visible ageing and restore youthful vitality.',
      description: 'Ageing is natural — but it doesn\'t have to be accelerated. Our anti-aging protocols combine cutting-edge treatments with evidence-based skincare to address fine lines, sagging, volume loss, and dull skin for a genuinely youthful appearance.',
      benefits: ['Reduced fine lines and wrinkles', 'Improved skin elasticity', 'Restored facial volume', 'Enhanced skin radiance', 'Long-term prevention strategy'],
      procedure: 'A bespoke combination of Botox, fillers, skin tightening, PRP, and medical-grade skincare, tailored to your specific ageing concerns and goals.',
      candidates: 'Anyone concerned with visible ageing signs. Preventive protocols available from age 30+.',
      recovery: 'Varies by treatment combination. Most protocols involve minimal to no downtime.'
    },
    {
      id: 'skin-tightening',
      title: 'Skin Tightening',
      category: 'laser',
      image: 'assets/images/treatment-laser.png',
      excerpt: 'Non-surgical lifting and tightening using radiofrequency and ultrasound technology.',
      description: 'Our non-invasive skin tightening treatments use radiofrequency and HIFU technology to stimulate deep collagen contraction and neo-collagen synthesis, resulting in firmer, tighter skin without surgery or significant downtime.',
      benefits: ['Non-surgical lifting effect', 'Tighter, firmer skin', 'Jawline and neck definition', 'Stimulated deep collagen', 'Progressive improvement over months'],
      procedure: 'Energy-based devices deliver targeted heat to the dermal and sub-dermal layers, triggering collagen contraction and new collagen formation. Sessions take 30–60 minutes.',
      candidates: 'Ideal for mild to moderate skin laxity on face, neck, and body. Not a replacement for surgical facelift.',
      recovery: 'Zero to minimal downtime. Mild warmth and redness for a few hours.'
    },
    {
      id: 'laser-toning',
      title: 'Laser Toning',
      category: 'laser',
      image: 'assets/images/treatment-laser.png',
      excerpt: 'Gentle laser treatments for overall skin brightening, tone correction, and pore refinement.',
      description: 'Laser toning uses low-fluence Q-switched Nd:YAG laser to gently break down excess melanin, stimulate collagen, and refine pores — resulting in clearer, brighter, more luminous skin with each session.',
      benefits: ['Brighter, more even skin tone', 'Reduced pore size', 'Gentle on all skin types', 'Cumulative brightening effect', 'Zero downtime'],
      procedure: 'A series of gentle laser passes over the face. No numbing required. Each session takes 15–20 minutes. Best results with 6–10 sessions spaced 1–2 weeks apart.',
      candidates: 'Excellent for overall skin brightening, mild pigmentation, large pores, and dull skin.',
      recovery: 'No downtime at all. Often called a "lunchtime laser" — resume activities immediately.'
    },
    {
      id: 'carbon-facial',
      title: 'Carbon Facial',
      category: 'laser',
      image: 'assets/images/treatment-laser.png',
      excerpt: 'The "Hollywood Peel" — deep pore cleansing and instant radiance in a single session.',
      description: 'Also known as the Hollywood Peel, the carbon facial involves applying a layer of medical-grade liquid carbon to the skin, then using Q-switched laser to blast it away — taking dead skin cells, oil, and impurities with it.',
      benefits: ['Instant glow and radiance', 'Deep pore cleansing', 'Reduced oiliness', 'Improved skin texture', 'Gentle exfoliation'],
      procedure: 'Carbon lotion is applied to the face and allowed to penetrate pores. The laser then targets the carbon particles, vaporising them along with dead cells and impurities. Takes 20–30 minutes.',
      candidates: 'Perfect for oily skin, enlarged pores, dull complexion. Ideal pre-event treatment.',
      recovery: 'Absolutely zero downtime. Skin looks immediately radiant.'
    },
    {
      id: 'scar-treatment',
      title: 'Scar Revision',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Advanced scar minimisation for surgical scars, injury scars, and keloids.',
      description: 'Our scar revision protocols address all scar types using a combination of fractional lasers, steroid injections, silicone therapy, and microneedling to progressively flatten, fade, and smooth problematic scars.',
      benefits: ['Flatter, less visible scars', 'Improved texture and colour', 'Reduced itching and discomfort', 'Enhanced confidence', 'Customised multi-session approach'],
      procedure: 'Treatment depends on scar type — hypertrophic, keloid, atrophic, or contracture. A combination approach is typically most effective.',
      candidates: 'Patients with surgical scars, injury scars, burn scars, keloids, or stretch marks.',
      recovery: 'Varies by treatment. Typically 2–5 days of redness or mild swelling.'
    },
    {
      id: 'mole-removal',
      title: 'Mole Removal',
      category: 'medical',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Safe and precise removal of moles, skin tags, and benign growths.',
      description: 'Using radiofrequency cautery or laser, we safely remove unwanted moles, skin tags, warts, and other benign growths with minimal scarring. All removed tissue can be sent for histopathological examination if needed.',
      benefits: ['Quick and virtually painless', 'Minimal scarring', 'Same-day procedure', 'Histopathology option available', 'Clean, precise results'],
      procedure: 'After numbing the area, the mole or growth is precisely removed using RF cautery or CO2 laser. The procedure takes just 10–20 minutes.',
      candidates: 'Anyone with cosmetically bothersome moles, skin tags, warts, or sebaceous cysts.',
      recovery: 'Minimal. Small scab forms and heals within 7–10 days.'
    },
    {
      id: 'rosacea',
      title: 'Rosacea Management',
      category: 'medical',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Specialised protocols to manage rosacea symptoms and reduce facial redness.',
      description: 'Rosacea requires a gentle, consistent approach. Our management protocols combine laser/IPL treatments for visible blood vessels, anti-inflammatory medications, and a curated skincare routine to calm, control, and minimise rosacea symptoms.',
      benefits: ['Reduced facial redness', 'Fewer flare-ups', 'Treated visible blood vessels', 'Calmed sensitive skin', 'Long-term management plan'],
      procedure: 'A combination of vascular laser/IPL treatments, prescription topicals, and trigger identification and management.',
      candidates: 'Patients with persistent facial redness, visible blood vessels, flushing, or papulopustular rosacea.',
      recovery: 'Mild redness for 24–48 hours post-laser. Topical treatments have no downtime.'
    },
    {
      id: 'psoriasis',
      title: 'Psoriasis Treatment',
      category: 'medical',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Comprehensive psoriasis management combining phototherapy, medications, and lifestyle guidance.',
      description: 'Our psoriasis management programme takes a holistic approach — combining targeted phototherapy (NB-UVB), topical and systemic medications, and lifestyle modifications to control symptoms, prevent flares, and improve quality of life.',
      benefits: ['Controlled plaques and scaling', 'Reduced itching and discomfort', 'Fewer flare-ups', 'Improved quality of life', 'Holistic management approach'],
      procedure: 'Treatment depends on psoriasis type and severity. May include narrowband UVB phototherapy, topical steroids, retinoids, and systemic medications when needed.',
      candidates: 'All forms and severities of psoriasis — plaque, guttate, inverse, pustular.',
      recovery: 'No downtime for most treatments. Phototherapy sessions are quick and painless.'
    },
    {
      id: 'vitiligo',
      title: 'Vitiligo Treatment',
      category: 'medical',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Advanced phototherapy and medical treatments for vitiligo repigmentation.',
      description: 'Our vitiligo management protocols combine targeted NB-UVB phototherapy, excimer laser, topical immunomodulators, and melanocyte-stimulating treatments to encourage repigmentation and halt disease progression.',
      benefits: ['Stimulated repigmentation', 'Halted disease progression', 'Targeted treatment of patches', 'Improved skin uniformity', 'Ongoing monitoring and support'],
      procedure: 'A combination of NB-UVB phototherapy, excimer laser for targeted areas, and topical treatments to stimulate melanocyte activity.',
      candidates: 'Patients with stable or active vitiligo. Early intervention yields best results.',
      recovery: 'No downtime. Repigmentation is gradual over weeks to months.'
    },
    {
      id: 'skin-allergy',
      title: 'Skin Allergy Treatment',
      category: 'medical',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Expert diagnosis and management of eczema, dermatitis, urticaria, and allergic skin conditions.',
      description: 'We provide comprehensive evaluation and management of allergic skin conditions including atopic dermatitis, contact dermatitis, urticaria, and drug allergies. Our approach includes trigger identification, immediate relief, and long-term management strategies.',
      benefits: ['Accurate diagnosis', 'Rapid symptom relief', 'Trigger identification', 'Long-term management plan', 'Improved quality of life'],
      procedure: 'Detailed history, patch testing if indicated, prescription of appropriate anti-inflammatory treatments, and development of an avoidance and maintenance plan.',
      candidates: 'Patients with chronic or recurrent skin allergies, eczema, hives, or contact dermatitis.',
      recovery: 'Treatment provides progressive relief. No procedural downtime.'
    },
    {
      id: 'medical-facials',
      title: 'Medical Facials',
      category: 'skin',
      image: 'assets/images/hydrafacial.png',
      excerpt: 'Clinical-grade facials designed by dermatologists for targeted skin concerns.',
      description: 'Unlike salon facials, our medical facials use pharmaceutical-grade products and clinical techniques. Each facial is customised to address specific concerns — acne, ageing, pigmentation, or hydration — delivering visible results, not just relaxation.',
      benefits: ['Clinically effective ingredients', 'Customised to your skin type', 'Visible results after one session', 'No harsh or unsuitable products', 'Dermatologist-supervised'],
      procedure: 'Deep cleansing, enzyme exfoliation, professional extraction, targeted serum infusion, LED therapy, and protective moisturisation. 45–60 minute sessions.',
      candidates: 'Everyone. Facials are customised for acne-prone, dry, oily, sensitive, ageing, and pigmented skin.',
      recovery: 'No downtime. Skin feels refreshed and glowing immediately.'
    },
    {
      id: 'stretch-marks',
      title: 'Stretch Mark Treatment',
      category: 'skin',
      image: 'assets/images/treatment-skin.png',
      excerpt: 'Advanced treatments to fade and smooth stretch marks using laser and microneedling.',
      description: 'Our stretch mark treatment protocols use fractional laser, microneedling with PRP, and radiofrequency to stimulate collagen remodelling within the stretch mark, progressively improving colour, texture, and depth.',
      benefits: ['Faded stretch mark colour', 'Improved skin texture', 'Stimulated collagen in stretch marks', 'Suitable for all body areas', 'Progressive improvement'],
      procedure: 'A combination of fractional CO2 or Er:YAG laser, microneedling with PRP, and topical treatments. Multiple sessions recommended.',
      candidates: 'Post-pregnancy stretch marks, growth spurts, weight fluctuation marks on abdomen, thighs, arms, and breasts.',
      recovery: '2–3 days of redness. Full results develop over 3–6 months.'
    }
  ];

  // ── Render Services ──
  const grid = document.getElementById('servicesGrid');
  const tabs = document.querySelectorAll('.tabs .tab');
  let activeFilter = 'all';

  function renderServices(filter = 'all') {
    const filtered = filter === 'all' ? servicesData : servicesData.filter(s => s.category === filter);
    grid.innerHTML = '';

    filtered.forEach((service, index) => {
      const card = document.createElement('div');
      card.className = `service-card animate-on-scroll stagger-${(index % 6) + 1}`;
      card.dataset.serviceId = service.id;
      card.innerHTML = `
        <div class="service-card__img-wrap">
          <img src="${service.image}" alt="${service.title}" class="service-card__img" loading="lazy" decoding="async">
          <span class="service-card__category">${service.category}</span>
        </div>
        <div class="service-card__body">
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__text">${service.excerpt}</p>
          <span class="service-card__link">Learn More →</span>
        </div>
      `;
      grid.appendChild(card);
    });

    // Re-observe new elements
    const newElements = grid.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    newElements.forEach(el => obs.observe(el));

    // Add click handlers
    grid.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.serviceId));
    });
  }

  // ── Tab Filtering ──
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('tab--active');
      tab.setAttribute('aria-selected', 'true');
      activeFilter = tab.dataset.filter;
      renderServices(activeFilter);
    });
  });

  // ── Service Modal ──
  // Create modal element
  const modal = document.createElement('div');
  modal.className = 'service-modal';
  modal.id = 'serviceModal';
  modal.innerHTML = `
    <div class="service-modal__backdrop" id="serviceModalBackdrop"></div>
    <div class="service-modal__content" role="dialog" aria-modal="true" aria-label="Treatment details">
      <button class="service-modal__close" id="serviceModalClose" aria-label="Close treatment details">✕</button>
      <img src="" alt="" class="service-modal__hero" id="modalHero">
      <div class="service-modal__body" id="modalBody"></div>
    </div>
  `;
  document.body.appendChild(modal);

  function openModal(serviceId) {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return;

    document.getElementById('modalHero').src = service.image;
    document.getElementById('modalHero').alt = service.title;
    document.getElementById('modalBody').innerHTML = `
      <h2 class="service-modal__title">${service.title}</h2>
      <p class="service-modal__description">${service.description}</p>

      <div class="service-modal__section">
        <h3 class="service-modal__section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Key Benefits
        </h3>
        <ul class="service-modal__list">
          ${service.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>

      <div class="service-modal__section">
        <h3 class="service-modal__section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          Procedure Overview
        </h3>
        <p style="color: var(--text-secondary); line-height: var(--lh-relaxed);">${service.procedure}</p>
      </div>

      <div class="service-modal__section">
        <h3 class="service-modal__section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          Ideal Candidates
        </h3>
        <p style="color: var(--text-secondary); line-height: var(--lh-relaxed);">${service.candidates}</p>
      </div>

      <div class="service-modal__section">
        <h3 class="service-modal__section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Recovery
        </h3>
        <p style="color: var(--text-secondary); line-height: var(--lh-relaxed);">${service.recovery}</p>
      </div>

      <div class="service-modal__cta">
        <a href="#booking" class="btn btn--primary" onclick="document.getElementById('serviceModal').classList.remove('active'); Utils.unlockScroll();">Book This Treatment</a>
      </div>
    `;

    modal.classList.add('active');
    Utils.lockScroll();
  }

  // Close modal
  document.getElementById('serviceModalBackdrop').addEventListener('click', () => {
    modal.classList.remove('active');
    Utils.unlockScroll();
  });

  document.getElementById('serviceModalClose').addEventListener('click', () => {
    modal.classList.remove('active');
    Utils.unlockScroll();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      Utils.unlockScroll();
    }
  });

  // Initial render
  renderServices();
})();
