// script.js

// Animação ao rolar a página
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".module");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
});

// Navegação suave ao clicar no menu
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
