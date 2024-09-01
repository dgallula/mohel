// Fonction pour définir la langue
function setLanguage(lang) {
  // Récupérer tous les éléments ayant un attribut data-lang
  const elements = document.querySelectorAll('[data-lang-fr], [data-lang-en], [data-lang-he], [data-lang-es]');
  
  // Mettre à jour le texte en fonction de la langue choisie
  elements.forEach(el => {
      if (el.hasAttribute(`data-lang-${lang}`)) {
          el.innerText = el.getAttribute(`data-lang-${lang}`);
      }
  });
  
  // Mettre à jour les attributs `aria-label` des boutons de langue
  const buttons = document.querySelectorAll('.language-buttons button');
  buttons.forEach(button => {
      const ariaLabel = button.getAttribute(`aria-label`).replace(/(Changer la langue en|Change language to|שנה שפה ל|Cambiar el idioma a) .*/, `Changer la langue en ${lang === 'fr' ? 'français' : lang === 'en' ? 'anglais' : lang === 'he' ? 'hébreu' : 'espagnol'}`);
      button.setAttribute('aria-label', ariaLabel);
  });
}

// Ajouter un écouteur d'événement pour les boutons de langue
document.querySelectorAll('.language-buttons button').forEach(button => {
  button.addEventListener('click', (event) => {
      const lang = event.target.getAttribute('onclick').match(/'(\w+)'/)[1];
      setLanguage(lang);
  });
});

// Définir la langue par défaut (français)
setLanguage('fr');
