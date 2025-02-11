document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");

    noButton.addEventListener("mouseover", function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calculamos nuevas coordenadas dentro de los límites visibles
        let randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth - 20));
        let randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight - 20));

        // Asegurar que el botón no salga de la pantalla
        randomX = Math.max(10, randomX);
        randomY = Math.max(10, randomY);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
