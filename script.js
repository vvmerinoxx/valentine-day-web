document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calcular nuevas coordenadas dentro de los límites de la pantalla
        let randomX = Math.random() * (viewportWidth - buttonWidth - 20);
        let randomY = Math.random() * (viewportHeight - buttonHeight - 20);

        // Asegurar que el botón "No" siempre esté dentro de la pantalla
        randomX = Math.max(10, Math.min(randomX, viewportWidth - buttonWidth - 10));
        randomY = Math.max(10, Math.min(randomY, viewportHeight - buttonHeight - 10));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
