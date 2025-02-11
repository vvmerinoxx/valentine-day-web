document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        // Asegurar que el botón "No" no salga de la pantalla
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
