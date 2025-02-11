document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        // Obtener dimensiones correctas del viewport y el body
        const viewportWidth = document.body.clientWidth;
        const viewportHeight = document.body.clientHeight;

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calcular nuevas coordenadas dentro de los límites del body
        let randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth - 20));
        let randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight - 20));

        // Asegurar que el botón "No" nunca se salga de la pantalla
        randomX = Math.max(10, Math.min(randomX, viewportWidth - buttonWidth - 10));
        randomY = Math.max(10, Math.min(randomY, viewportHeight - buttonHeight - 10));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
