import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "da" | "en";

const translations = {
  da: {
    // Nav
    "nav.home": "Forside",
    "nav.services": "Ydelser",
    "nav.projects": "Referencer",
    "nav.about": "Om os",
    "nav.contact": "Kontakt",
    "nav.cta": "Få et tilbud",

    // Hero
    "hero.title": "Professionel maler i København",
    "hero.subtitle": "Kvalitetsbevidst malerarbejde til private og erhverv. Indendørs og udendørs maling udført med præcision og omhu — i København og omegn.",
    "hero.cta": "Få et tilbud",
    "hero.services": "Se vores ydelser",

    // Services section
    "services.title": "Vores Ydelser",
    "services.interior.title": "Indendørs maling",
    "services.interior.desc": "Professionel maling af vægge, lofter og træværk i dit hjem eller erhverv.",
    "services.exterior.title": "Udendørs maling",
    "services.exterior.desc": "Facader, træværk og vedligeholdelse af bygninger mod vind og vejr.",
    "services.commercial.title": "Erhvervsløsninger",
    "services.commercial.desc": "Malerarbejde til kontorer, butikker og virksomheder i hele Storkøbenhavn.",
    "services.renovation.title": "Renovering & Istandsættelse",
    "services.renovation.desc": "Komplet malerarbejde ved renovering af lejligheder og huse.",
    "services.woodwork.title": "Træværk & Lakering",
    "services.woodwork.desc": "Professionel behandling og lakering af døre, vinduer og paneler.",
    "services.wallpaper.title": "Tapetsering",
    "services.wallpaper.desc": "Ekspert opsætning af tapet i alle stilarter og materialer.",

// ===== Extended Services Page =====

// Hero
"services.extended.hero.title": "Professionelle Maler- & Renoveringsydelser",
"services.extended.hero.subtitle": "Vi tilbyder komplette løsninger indenfor malerarbejde, spartling og indvendig renovering i hele Danmark.",
"services.extended.hero.trust1": "100% tilfredshed",
"services.extended.hero.trust2": "Gratis og uforpligtende tilbud",
"services.extended.hero.trust3": "Hurtig respons",

// Category 1
"services.extended.category1.title": "Malerarbejde (Indendørs)",
"services.extended.category1.item1": "Maling af vægge (1–2 lag)",
"services.extended.category1.item2": "Maling af lofter",
"services.extended.category1.item3": "Maling af paneler (plinte)",
"services.extended.category1.item4": "Maling af dør- og vindueskarme",
"services.extended.category1.item5": "Maling af indvendige døre",
"services.extended.category1.item6": "Maling af gelændere",
"services.extended.category1.item7": "Opfriskning af lejligheder efter fraflytning",
"services.extended.category1.item8": "Maling af badeværelser og køkkener (tørre zoner)",

// Category 2
"services.extended.category2.title": "Spartling & Klargøring",
"services.extended.category2.item1": "Fuldspartling af vægge og lofter",
"services.extended.category2.item2": "Spartling af gips samlinger (Uniflott)",
"services.extended.category2.item3": "Armeringstape mod revner",
"services.extended.category2.item4": "Montering af plast- eller metalhjørner",
"services.extended.category2.item5": "Professionel slibning",
"services.extended.category2.item6": "Påføring af primer (grunding)",
"services.extended.category2.item7": "Reparation af revner og ujævnheder",

// Category 3
"services.extended.category3.title": "Montage & Finisearbejde",
"services.extended.category3.item1": "Montering af gipsplader",
"services.extended.category3.item2": "Opsætning af nedhængte lofter",
"services.extended.category3.item3": "Fjernelse af gammelt tapet",
"services.extended.category3.item4": "Opsætning af nyt tapet",
"services.extended.category3.item5": "Opsætning af glasfilt",
"services.extended.category3.item6": "Montering af dekorative paneler",
"services.extended.category3.item7": "Lokal reparation af beskadigede vægge",

// Category 4
"services.extended.category4.title": "Komplet Indvendig Renovering",
"services.extended.category4.item1": "Totalrenovering af lejligheder",
"services.extended.category4.item2": "Klargøring efter lejere",
"services.extended.category4.item3": "Reparation efter vandskader",
"services.extended.category4.item4": "Genopbygning af vægge efter nedrivning",
"services.extended.category4.item5": "Nedrivning af ikke-bærende vægge",
"services.extended.category4.item6": "Afsluttende finish til aflevering",

// CTA
"services.extended.cta.title": "Få et gratis tilbud i dag",
"services.extended.cta.subtitle": "Kontakt os og lad os hjælpe dig med dit næste projekt.",
"services.extended.cta.button": "Kontakt os nu",

    // Projects section
    "projects.title": "Udvalgte Projekter",
    "projects.subtitle": "Se et udvalg af vores seneste malerarbejde i København og omegn.",
    "projects.1.title": "Lejlighed i Frederiksberg",
    "projects.1.desc": "Komplet indvendig maling af 3-værelses lejlighed.",
    "projects.2.title": "Villa i Hellerup",
    "projects.2.desc": "Udvendig facademaling og vedligeholdelse.",
    "projects.3.title": "Kontor i Nordhavn",
    "projects.3.desc": "Erhvervsmaling af nyt kontorfællesskab.",
    "projects.4.title": "Træværk i Charlottenlund",
    "projects.4.desc": "Lakering af vinduer og døre i privatbolig.",
    "projects.5.title": "Badeværelse i Vanløse",
    "projects.5.desc": "Maling og fugtisolering af badeværelse.",
    "projects.6.title": "Etageejendom i Østerbro",
    "projects.6.desc": "Facade- og trappeopgang maling.",

    // Testimonials
    "testimonials.title": "Hvad siger vores kunder?",
    "testimonials.1.text": "Fantastisk arbejde og meget professionelt. MANMALER leverede til tiden og resultatet var over al forventning.",
    "testimonials.1.author": "Mette H., København",
    "testimonials.2.text": "Pålidelig og flot resultat. Vi bruger dem altid til vores lejligheder. Kan varmt anbefales!",
    "testimonials.2.author": "Lars K., Roskilde",
    "testimonials.3.text": "Hurtig, professionel og til en fair pris. Vores kontor ser fantastisk ud nu.",
    "testimonials.3.author": "Thomas B., Nordhavn",

    // Why us
    "why.title": "Hvorfor vælge MANMALER?",
    "why.subtitle": "Vi leverer kvalitetsbevidst malerarbejde med fokus på præcision, pålidelighed og tilfredse kunder.",
    "why.experience.title": "Erfaring & Ekspertise",
    "why.experience.desc": "Mange års erfaring med både private hjem og erhvervsprojekter i København.",
    "why.quality.title": "Høj Kvalitet",
    "why.quality.desc": "Vi bruger kun kvalitetsmaterialer og sikrer et professionelt resultat hver gang.",
    "why.pricing.title": "Gennemsigtige Priser",
    "why.pricing.desc": "Ingen skjulte omkostninger – du får et klart og uforpligtende tilbud.",
    "why.reliable.title": "Pålidelig Service",
    "why.reliable.desc": "Vi overholder aftaler og afleverer altid til tiden.",

    // CTA
    "cta.title": "Få et gratis og uforpligtende tilbud",
    "cta.subtitle": "Kontakt os i dag og få svar inden for 24 timer.",
    "cta.button": "Kontakt os nu",

    // About page
    "about.title": "Om MANMALER",
    "about.subtitle": "Din lokale maler i København og omegn",
    "about.story.title": "Vores Historie",
    "about.story.p1": "MANMALER blev grundlagt med en simpel vision: at levere malerarbejde af højeste kvalitet til private og erhvervskunder i Storkøbenhavn. Med base i Jylland dækker vi hele København og omegn inden for 70 km.",
    "about.story.p2": "Vi er stolte af vores håndværk og tror på, at hvert projekt fortjener den samme dedikation og opmærksomhed på detaljer — uanset størrelse.",
    "about.story.p3": "Vores team af erfarne malere kombinerer traditionelle teknikker med moderne materialer for at sikre et holdbart og smukt resultat.",
    "about.values.title": "Vores Værdier",
    "about.values.1.title": "Kvalitet Først",
    "about.values.1.desc": "Vi går aldrig på kompromis med kvaliteten af vores arbejde eller materialer.",
    "about.values.2.title": "Kundetilfredshed",
    "about.values.2.desc": "Din tilfredshed er vores højeste prioritet. Vi stopper ikke, før du er glad.",
    "about.values.3.title": "Ansvarlighed",
    "about.values.3.desc": "Vi behandler dit hjem som vores eget og rydder altid op efter os.",
    "about.area.title": "Vores Dækningsområde",
    "about.area.desc": "Vi arbejder i København og alle omkringliggende byer inden for 70 km, herunder Frederiksberg, Hellerup, Roskilde, Hillerød, Køge og mange flere.",

    // Contact page
    "contact.title": "Kontakt Os",
    "contact.subtitle": "Få et gratis og uforpligtende tilbud på dit næste malerprojekt.",
    "contact.name": "Navn",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.message": "Besked",
    "contact.send": "Send besked",
    "contact.info.title": "Kontaktinformation",
    "contact.info.phone": "+45 00 00 00 00",
    "contact.info.email": "kontakt@manmaler.dk",
    "contact.info.address": "Danmark",
    "contact.info.hours": "Åbningstider",
    "contact.info.hours.weekdays": "Man-Fre: 07:00 - 17:00",
    "contact.info.hours.weekend": "Lør-Søn: Lukket",

    // Footer
    "footer.company": "Professionel maler i København og omegn.",
    "footer.contact": "Kontakt",
    "footer.address": "Adresse",
    "footer.rights": "Alle rettigheder forbeholdes.",

    // Services page
    "services.page.title": "Vores Ydelser",
    "services.page.subtitle": "Vi tilbyder et bredt udvalg af professionelle malerydelser til private og erhverv i København og omegn.",
    "services.process.title": "Vores Proces",
    "services.process.1.title": "Besigtigelse",
    "services.process.1.desc": "Vi kommer forbi og vurderer opgaven gratis og uforpligtende.",
    "services.process.2.title": "Tilbud",
    "services.process.2.desc": "Du modtager et detaljeret og gennemsigtigt tilbud.",
    "services.process.3.title": "Udførelse",
    "services.process.3.desc": "Vores erfarne team udfører arbejdet med præcision.",
    "services.process.4.title": "Aflevering",
    "services.process.4.desc": "Vi afleverer et perfekt resultat — til tiden.",
  },

  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.cta": "Get a Quote",

    // Hero
    "hero.title": "Professional Painter in Copenhagen",
    "hero.subtitle": "Quality-conscious painting for private and commercial clients. Interior and exterior painting carried out with precision and care — in Copenhagen and surrounding areas.",
    "hero.cta": "Get a Quote",
    "hero.services": "See Our Services",

    // Services section
    "services.title": "Our Services",
    "services.interior.title": "Interior Painting",
    "services.interior.desc": "Professional painting of walls, ceilings, and woodwork in your home or business.",
    "services.exterior.title": "Exterior Painting",
    "services.exterior.desc": "Facades, woodwork, and building maintenance against the elements.",
    "services.commercial.title": "Commercial Solutions",
    "services.commercial.desc": "Painting for offices, shops, and businesses throughout Greater Copenhagen.",
    "services.renovation.title": "Renovation & Restoration",
    "services.renovation.desc": "Complete painting work for apartment and house renovations.",
    "services.woodwork.title": "Woodwork & Lacquering",
    "services.woodwork.desc": "Professional treatment and lacquering of doors, windows, and panels.",
    "services.wallpaper.title": "Wallpapering",
    "services.wallpaper.desc": "Expert wallpaper installation in all styles and materials.",

// ===== Extended Services Page =====

// Hero
"services.extended.hero.title": "Professional Painting & Renovation Services",
"services.extended.hero.subtitle": "We provide complete solutions in painting, plastering and interior renovation throughout Denmark.",
"services.extended.hero.trust1": "100% satisfaction",
"services.extended.hero.trust2": "Free, no-obligation quote",
"services.extended.hero.trust3": "Fast response",

// Category 1
"services.extended.category1.title": "Interior Painting",
"services.extended.category1.item1": "Wall painting (1–2 coats)",
"services.extended.category1.item2": "Ceiling painting",
"services.extended.category1.item3": "Painting of baseboards",
"services.extended.category1.item4": "Painting of door and window frames",
"services.extended.category1.item5": "Interior door painting",
"services.extended.category1.item6": "Railing painting",
"services.extended.category1.item7": "Apartment refresh after moving out",
"services.extended.category1.item8": "Bathroom and kitchen painting (dry areas)",

// Category 2
"services.extended.category2.title": "Plastering & Preparation",
"services.extended.category2.item1": "Full wall and ceiling plastering",
"services.extended.category2.item2": "Drywall joint filling (Uniflott)",
"services.extended.category2.item3": "Crack reinforcement tape",
"services.extended.category2.item4": "Plastic or metal corner installation",
"services.extended.category2.item5": "Professional sanding",
"services.extended.category2.item6": "Primer application",
"services.extended.category2.item7": "Repair of cracks and imperfections",

// Category 3
"services.extended.category3.title": "Installation & Finishing",
"services.extended.category3.item1": "Drywall installation",
"services.extended.category3.item2": "Suspended ceilings",
"services.extended.category3.item3": "Old wallpaper removal",
"services.extended.category3.item4": "New wallpaper installation",
"services.extended.category3.item5": "Glass fiber installation",
"services.extended.category3.item6": "Decorative panel installation",
"services.extended.category3.item7": "Local wall repairs",

// Category 4
"services.extended.category4.title": "Complete Interior Renovation",
"services.extended.category4.item1": "Turnkey apartment renovation",
"services.extended.category4.item2": "Refurbishment after tenants",
"services.extended.category4.item3": "Water damage repairs",
"services.extended.category4.item4": "Wall reconstruction after demolition",
"services.extended.category4.item5": "Non-load-bearing wall demolition",
"services.extended.category4.item6": "Final finishing for handover",

// CTA
"services.extended.cta.title": "Get a Free Quote Today",
"services.extended.cta.subtitle": "Contact us and let us help you with your next project.",
"services.extended.cta.button": "Contact Us Now",

    // Projects section
    "projects.title": "Featured Projects",
    "projects.subtitle": "See a selection of our latest painting work in Copenhagen and surroundings.",
    "projects.1.title": "Apartment in Frederiksberg",
    "projects.1.desc": "Complete interior painting of a 3-room apartment.",
    "projects.2.title": "Villa in Hellerup",
    "projects.2.desc": "Exterior facade painting and maintenance.",
    "projects.3.title": "Office in Nordhavn",
    "projects.3.desc": "Commercial painting of a new shared office space.",
    "projects.4.title": "Woodwork in Charlottenlund",
    "projects.4.desc": "Lacquering of windows and doors in a private home.",
    "projects.5.title": "Bathroom in Vanløse",
    "projects.5.desc": "Painting and moisture insulation of a bathroom.",
    "projects.6.title": "Apartment Building in Østerbro",
    "projects.6.desc": "Facade and staircase painting.",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.1.text": "Fantastic work and very professional. MANMALER delivered on time and the result exceeded all expectations.",
    "testimonials.1.author": "Mette H., Copenhagen",
    "testimonials.2.text": "Reliable and beautiful result. We always use them for our apartments. Highly recommended!",
    "testimonials.2.author": "Lars K., Roskilde",
    "testimonials.3.text": "Fast, professional, and at a fair price. Our office looks amazing now.",
    "testimonials.3.author": "Thomas B., Nordhavn",

    // Why us
    "why.title": "Why Choose MANMALER?",
    "why.subtitle": "We deliver quality-conscious painting with focus on precision, reliability, and satisfied customers.",
    "why.experience.title": "Experience & Expertise",
    "why.experience.desc": "Years of experience with both private homes and commercial projects in Copenhagen.",
    "why.quality.title": "High Quality",
    "why.quality.desc": "We only use quality materials and ensure a professional result every time.",
    "why.pricing.title": "Transparent Pricing",
    "why.pricing.desc": "No hidden costs — you get a clear and non-binding quote.",
    "why.reliable.title": "Reliable Service",
    "why.reliable.desc": "We keep our agreements and always deliver on time.",

    // CTA
    "cta.title": "Get a Free, No-Obligation Quote",
    "cta.subtitle": "Contact us today and get a response within 24 hours.",
    "cta.button": "Contact Us Now",

    // About page
    "about.title": "About MANMALER",
    "about.subtitle": "Your local painter in Copenhagen and surroundings",
    "about.story.title": "Our Story",
    "about.story.p1": "MANMALER was founded with a simple vision: to deliver the highest quality painting services to private and commercial clients in Greater Copenhagen. Based in Jutland, we cover all of Copenhagen and surroundings within 70 km.",
    "about.story.p2": "We are proud of our craftsmanship and believe that every project deserves the same dedication and attention to detail — regardless of size.",
    "about.story.p3": "Our team of experienced painters combines traditional techniques with modern materials to ensure a durable and beautiful result.",
    "about.values.title": "Our Values",
    "about.values.1.title": "Quality First",
    "about.values.1.desc": "We never compromise on the quality of our work or materials.",
    "about.values.2.title": "Customer Satisfaction",
    "about.values.2.desc": "Your satisfaction is our highest priority. We don't stop until you're happy.",
    "about.values.3.title": "Responsibility",
    "about.values.3.desc": "We treat your home as our own and always clean up after ourselves.",
    "about.area.title": "Our Coverage Area",
    "about.area.desc": "We work in Copenhagen and all surrounding cities within 70 km, including Frederiksberg, Hellerup, Roskilde, Hillerød, Køge, and many more.",

    // Contact page
    "contact.title": "Contact Us",
    "contact.subtitle": "Get a free, no-obligation quote for your next painting project.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "+45 00 00 00 00",
    "contact.info.email": "kontakt@manmaler.dk",
    "contact.info.address": "Denmark",
    "contact.info.hours": "Opening Hours",
    "contact.info.hours.weekdays": "Mon-Fri: 07:00 - 17:00",
    "contact.info.hours.weekend": "Sat-Sun: Closed",

    // Footer
    "footer.company": "Professional painter in Copenhagen and surroundings.",
    "footer.contact": "Contact",
    "footer.address": "Address",
    "footer.rights": "All rights reserved.",

    // Services page
    "services.page.title": "Our Services",
    "services.page.subtitle": "We offer a wide range of professional painting services for private and commercial clients in Copenhagen and surroundings.",
    "services.process.title": "Our Process",
    "services.process.1.title": "Inspection",
    "services.process.1.desc": "We visit and assess the job for free, no obligation.",
    "services.process.2.title": "Quote",
    "services.process.2.desc": "You receive a detailed and transparent quote.",
    "services.process.3.title": "Execution",
    "services.process.3.desc": "Our experienced team carries out the work with precision.",
    "services.process.4.title": "Delivery",
    "services.process.4.desc": "We deliver a perfect result — on time.",
  },
};

type TranslationKey = keyof typeof translations.da;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("da");

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}