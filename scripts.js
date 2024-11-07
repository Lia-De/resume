
const translations = {
    en: {
        languageButton: "Svenska",
        title: "Digital Designer & Developer",
        about: "The skills I bring to the table is a constantly learning mindset, broad knowledge in programming and a focus on making a product useable and rational for actual users.",
        sidecontact: "Contact",
        goal1: "Through design, I want to contribute to making life a little better, a little easier and a little more fun, by solving the right problem in the right way",
        goal2: "In order to really know that you understand something - try to explain it to someone else",
        goal3: "No knowledge is in vain - the more I know the more I have the capability to do",
        // Add other sections here
    },
    se: {
        languageButton: "English",
        title: "Digital Designer & Utvecklare",
        about: "Jag är alltid intresserad av att lära mig mer, och har med mig en bred bas av programmering samt en fokus på att ta fram en produkt som är användbar och rationellt designad.",
        sidecontact: "Kontakt",
        goal1: "Jag vill med design bidra till att göra livet lite bättre, lite enklare, lite roligare genom att lösa rätt problem på rätt sätt.",
        goal2: "För att verkligen veta om du förstår - förklara det för någon annan.",
        goal3: "En kunskap är aldrig förgäves - ju mer jag kan desto mer har jag möjlighet att göra",
        // Add other sections here
    }
    // Add more languages as needed
};

let currentLanguage = 'en'; // Set a default language

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'se' : 'en'; // Toggle between languages
    const elements = document.querySelectorAll("[id]"); // Select all elements with an id

    elements.forEach(el => {
        if (translations[currentLanguage][el.id]) {
            el.textContent = translations[currentLanguage][el.id];
        }
    });
}


