document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const buttonsContainer = document.querySelector(".buttons");

    noButton.addEventListener("mouseover", function () {
        const containerRect = buttonsContainer.getBoundingClientRect();
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        // Calcular nuevas coordenadas dentro del área visible del contenedor
        let randomX = Math.random() * (containerRect.width - buttonWidth);
        let randomY = Math.random() * (containerRect.height - buttonHeight);

        // Asegurar que el botón "No" no se desborde
        randomX = Math.max(10, Math.min(randomX, containerRect.width - buttonWidth - 10));
        randomY = Math.max(10, Math.min(randomY, containerRect.height - buttonHeight - 10));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
