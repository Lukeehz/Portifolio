//Efeito digitação
function typeEffect(element, text, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            element.classList.remove("typing");
        }
    }
    element.classList.add("typing");
    type();
}

document.addEventListener("DOMContentLoaded", function() {
    const h3 = document.getElementById("typing-text");
    typeEffect(h3, "Prazer, me chamo Lucas", 100);
});