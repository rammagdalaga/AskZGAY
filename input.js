const inputField = document.getElementById("inputField");
const displayText = document.getElementById("displayText");
const randomTexts = [
    "ZGAY loves minors!",
    "Leader of the LGBTQ Premium.",
    "I love bruce<3",
    "Yes, I am gay",
    "Add me Zeejay Irell Aparejado "
];

inputField.addEventListener("keydown", function(event) {
    
    if (event.key === "Enter") {
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        const randomText = randomTexts[randomIndex];

        typeWriterEffect(randomText);
        inputField.value = "";
    }
});

function typeWriterEffect(text) {
    let i = 0;

    displayText.textContent = "";
    const typingSpeed = 100;

    function type() {
        if (i < text.length) {
            displayText.textContent += text.charAt(i);
            i++;

            setTimeout(type, typingSpeed);
        }
    }
    type();
}