document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = document.body.clientHeight;

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calcular nuevas coordenadas dentro del body
        let randomX = Math.floor(Math.random() * (bodyWidth - buttonWidth - 20));
        let randomY = Math.floor(Math.random() * (bodyHeight - buttonHeight - 20));

        // Asegurar que el botón "No" siempre esté dentro del body
        randomX = Math.max(10, Math.min(randomX, bodyWidth - buttonWidth - 10));
        randomY = Math.max(10, Math.min(randomY, bodyHeight - buttonHeight - 10));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
