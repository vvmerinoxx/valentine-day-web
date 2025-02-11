document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - noButton.offsetWidth - 20; // Evita que salga de la pantalla
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
