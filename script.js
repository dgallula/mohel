
  // script.js
const translations = {
    en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        testimonials: 'Testimonials',
        contact: 'Contact',
        photos: 'Photos',
        welcome: 'Welcome to Mohel David Gallula\'s website',
        intro: 'Specialist in circumcision, with a family-oriented and traditional approach.',
        aboutTitle: 'About Me',
        aboutText: 'I am David Gallula, a Mohel with over 20 years of experience...',
        servicesTitle: 'Services',
        servicesText: 'I offer circumcision services for newborns...',
        testimonialsTitle: 'Testimonials',
        testimonialsQuote: '"David is an exceptional Mohel who took great care of our son with outstanding expertise."',
        testimonialsAuthor: 'Cohen Family',
        contactTitle: 'Contact',
        contactText: 'You can reach me by phone or email to schedule an appointment.',
        photosTitle: 'Photos',
        footerText: 'All rights reserved © 2024 Mohel David Gallula'
    },
    fr: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        testimonials: 'Témoignages',
        contact: 'Contact',
        photos: 'Photos',
        welcome: 'Bienvenue sur le site du Mohel David Gallula',
        intro: 'Spécialiste en circoncision, avec une approche familiale et respectueuse des traditions.',
        aboutTitle: 'À propos de Moi',
        aboutText: 'Je suis David Gallula, Mohel avec plus de 20 ans d\'expérience...',
        servicesTitle: 'Services',
        servicesText: 'Je propose des services de circoncision pour les nouveau-nés...',
        testimonialsTitle: 'Témoignages',
        testimonialsQuote: '"David est un Mohel exceptionnel qui a pris soin de notre fils avec une grande expertise."',
        testimonialsAuthor: 'Famille Cohen',
        contactTitle: 'Contact',
        contactText: 'Vous pouvez me contacter par téléphone ou par email pour prendre rendez-vous.',
        photosTitle: 'Photos',
        footerText: 'Tous droits réservés © 2024 Mohel David Gallula'
    },
    he: {
        home: 'בית',
        about: 'אודות',
        services: 'שירותים',
        testimonials: 'עדויות',
        contact: 'צור קשר',
        photos: 'תמונות',
        welcome: 'ברוכים הבאים לאתר של מוהל דוד גלוולה',
        intro: 'מומחה לברית מילה, עם גישה משפחתית ומכבדת את המסורת.',
        aboutTitle: 'אודותיי',
        aboutText: 'אני דוד גלוולה, מוהל עם יותר מ-20 שנות ניסיון...',
        servicesTitle: 'שירותים',
        servicesText: 'אני מציע שירותי ברית מילה לתינוקות...',
        testimonialsTitle: 'עדויות',
        testimonialsQuote: '"דוד הוא מוהל יוצא דופן שטיפל בבננו במומחיות רבה."',
        testimonialsAuthor: 'משפחת כהן',
        contactTitle: 'צור קשר',
        contactText: 'ניתן ליצור איתי קשר בטלפון או במייל כדי לקבוע פגישה.',
        photosTitle: 'תמונות',
        footerText: 'כל הזכויות שמורות © 2024 מוהל דוד גלוולה'
    },
    es: {
        home: 'Inicio',
        about: 'Acerca de',
        services: 'Servicios',
        testimonials: 'Testimonios',
        contact: 'Contacto',
        photos: 'Fotos',
        welcome: 'Bienvenido al sitio web de Mohel David Gallula',
        intro: 'Especialista en circuncisión, con un enfoque familiar y respetuoso de las tradiciones.',
        aboutTitle: 'Acerca de mí',
        aboutText: 'Soy David Gallula, un Mohel con más de 20 años de experiencia...',
        servicesTitle: 'Servicios',
        servicesText: 'Ofrezco servicios de circuncisión para recién nacidos...',
        testimonialsTitle: 'Testimonios',
        testimonialsQuote: '"David es un Mohel excepcional que cuidó de nuestro hijo con una gran experiencia."',
        testimonialsAuthor: 'Familia Cohen',
        contactTitle: 'Contacto',
        contactText: 'Puede contactarme por teléfono o por correo electrónico para programar una cita.',
        photosTitle: 'Fotos',
        footerText: 'Todos los derechos reservados © 2024 Mohel David Gallula'
    }
};

function changeLanguage(lang) {
    document.getElementById('nav-home').textContent = translations[lang].home;
    document.getElementById('nav-about').textContent = translations[lang].about;
    document.getElementById('nav-services').textContent = translations[lang].services;
    document.getElementById('nav-testimonials').textContent = translations[lang].testimonials;
    document.getElementById('nav-contact').textContent = translations[lang].contact;
    document.getElementById('nav-photos').textContent = translations[lang].photos;
    document.getElementById('home-title').textContent = translations[lang].welcome;
    document.getElementById('home-subtitle').textContent = translations[lang].intro;
    document.getElementById('about-title').textContent = translations[lang].aboutTitle;
    document.getElementById('about-description').textContent = translations[lang].aboutText;
    document.getElementById('services-title').textContent = translations[lang].servicesTitle;
    document.getElementById('services-description').textContent = translations[lang].servicesText;
    document.getElementById('testimonials-title').textContent = translations[lang].testimonialsTitle;
    document.getElementById('testimonials-quote').textContent = translations[lang].testimonialsQuote;
    document.getElementById('testimonials-author').textContent = translations[lang].testimonialsAuthor;
    document.getElementById('contact-title').textContent = translations[lang].contactTitle;
    document.getElementById('contact-description').textContent = translations[lang].contactText;
    document.getElementById('photos-title').textContent = translations[lang].photosTitle;
    document.getElementById('footer-text').textContent = translations[lang].footerText;
}

