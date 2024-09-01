
  function changeLanguage(lang) {
    const translations = {
        "en": {
            "siteTitle": "Mohel David Gallula",
            "navServices": "Services",
            "navAbout": "About",
            "navContact": "Contact",
            "servicesTitle": "Our Services",
            "servicesDescription": "Description of services offered...",
            "aboutTitle": "About Me",
            "aboutDescription": "Biography and qualifications...",
            "contactTitle": "Contact",
            "contactDescription": "How to reach me...",
            "footerText": "All rights reserved © 2024 Mohel David Gallula"
        },
        "fr": {
            "siteTitle": "Mohel David Gallula",
            "navServices": "Services",
            "navAbout": "À Propos",
            "navContact": "Contact",
            "servicesTitle": "Nos Services",
            "servicesDescription": "Description des services offerts...",
            "aboutTitle": "À Propos de Moi",
            "aboutDescription": "Biographie et qualifications...",
            "contactTitle": "Contact",
            "contactDescription": "Comment me joindre...",
            "footerText": "Tous droits réservés © 2024 Mohel David Gallula"
        },
        "he": {
            "siteTitle": "מוהל דוד גאלולה",
            "navServices": "שירותים",
            "navAbout": "אודות",
            "navContact": "צור קשר",
            "servicesTitle": "השירותים שלנו",
            "servicesDescription": "תיאור השירותים המוצעים...",
            "aboutTitle": "אודותי",
            "aboutDescription": "ביוגרפיה והכישורים...",
            "contactTitle": "צור קשר",
            "contactDescription": "איך ליצור קשר...",
            "footerText": "כל הזכויות שמורות © 2024 מוהל דוד גאלולה"
        },
        "es": {
            "siteTitle": "Mohel David Gallula",
            "navServices": "Servicios",
            "navAbout": "Acerca de",
            "navContact": "Contacto",
            "servicesTitle": "Nuestros Servicios",
            "servicesDescription": "Descripción de los servicios ofrecidos...",
            "aboutTitle": "Sobre Mí",
            "aboutDescription": "Biografía y calificaciones...",
            "contactTitle": "Contacto",
            "contactDescription": "Cómo contactarme...",
            "footerText": "Todos los derechos reservados © 2024 Mohel David Gallula"
        }
    };

    const elementsToTranslate = {
        "site-title": "siteTitle",
        "nav-services": "navServices",
        "nav-about": "navAbout",
        "nav-contact": "navContact",
        "services-title": "servicesTitle",
        "services-description": "servicesDescription",
        "about-title": "aboutTitle",
        "about-description": "aboutDescription",
        "contact-title": "contactTitle",
        "contact-description": "contactDescription",
        "footer-text": "footerText"
    };

    for (let id in elementsToTranslate) {
        document.getElementById(id).textContent = translations[lang][elementsToTranslate[id]];
    }
}

