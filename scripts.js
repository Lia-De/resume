const englishTexts = {
    title: "Digital Designer & Developer",
    sideText: "Some description text here...",
    mainContent: "Here is the main content area..."
};

const swedishTexts = {
    title: "Digital Designer & Utvecklare",
    sideText: "Någon beskrivningstext här...",
    mainContent: "Här är huvudområdet..."
};

let currentLanguage = "english";

function switchLanguage() {
    if (currentLanguage === "english") {
        document.getElementById("title").innerText = swedishTexts.title;
        document.getElementById("side-text").innerText = swedishTexts.sideText;
        document.getElementById("main-content").innerText = swedishTexts.mainContent;
        currentLanguage = "swedish";
    } else {
        document.getElementById("title").innerText = englishTexts.title;
        document.getElementById("side-text").innerText = englishTexts.sideText;
        document.getElementById("main-content").innerText = englishTexts.mainContent;
        currentLanguage = "english";
    }
}
