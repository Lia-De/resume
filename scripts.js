
const translations = {
    en: {
        title: "Digital Designer & Developer",
        about: "The skills I bring to the table is a constantly learning mindset, broad knowledge in programming and a focus on making a product useable and rational for actual users.",
        side-contact: "Contact"
        // Add other sections here
    },
    se: {
        title: "Digital Designer & Utvecklare",
        about: "Jag har med mig en ",
        side-contact: "Kontakt"
        // Add other sections here
    }
    // Add more languages as needed
};

let currentLanguage = 'en'; // Set a default language

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'sv' : 'en'; // Toggle between languages
    const elements = document.querySelectorAll("[id]"); // Select all elements with an id

    elements.forEach(el => {
        if (translations[currentLanguage][el.id]) {
            el.textContent = translations[currentLanguage][el.id];
        }
    });
}


