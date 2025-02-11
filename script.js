document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const container = document.querySelector(".buttons");

    // Asegurar que los botones siempre estén visibles en el contenedor
    container.style.position = "relative";
    yesButton.style.position = "relative";
    noButton.style.position = "absolute";

    noButton.addEventListener("mouseover", function() {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - noButton.clientWidth;
        const maxY = containerRect.height - noButton.clientHeight;

        const randomX = Math.max(0, Math.floor(Math.random() * maxX));
        const randomY = Math.max(0, Math.floor(Math.random() * maxY));

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
