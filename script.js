document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const container = document.querySelector(".buttons");

    // Ajustamos el botón NO dentro del contenedor
    noButton.style.position = "absolute";

    noButton.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - noButton.offsetWidth - 20; // Margen de seguridad
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        let randomX, randomY;
        let attempts = 0;

        do {
            randomX = Math.floor(Math.random() * maxX);
            randomY = Math.floor(Math.random() * maxY);
            attempts++;

            if (attempts > 10) break; // Evita bucles infinitos

        } while (
            Math.abs(randomX - yesButton.offsetLeft) < 120 &&
            Math.abs(randomY - yesButton.offsetTop) < 50
        );

        // Asegurar que el botón NO siempre esté en la pantalla
        randomX = Math.max(10, Math.min(randomX, window.innerWidth - noButton.offsetWidth - 10));
        randomY = Math.max(10, Math.min(randomY, window.innerHeight - noButton.offsetHeight - 10));

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
