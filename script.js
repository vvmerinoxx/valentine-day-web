document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");

    noButton.addEventListener("mouseover", function () {
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = document.body.clientHeight;

        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const yesButtonRect = yesButton.getBoundingClientRect(); // Obtiene la posición del "Sí"

        let randomX, randomY;
        let attempts = 0;

        do {
            randomX = Math.random() * (bodyWidth - buttonWidth - 20);
            randomY = Math.random() * (bodyHeight - buttonHeight - 20);
            attempts++;

            // Evita que el "No" se genere encima del "Sí"
        } while (
            Math.abs(randomX - yesButtonRect.left) < 150 && 
            Math.abs(randomY - yesButtonRect.top) < 50 &&
            attempts < 10
        );

        // Asegurar que el botón "No" siempre esté dentro de la pantalla
        randomX = Math.max(yesButtonRect.right + 50, Math.min(randomX, bodyWidth - buttonWidth - 10));
        randomY = Math.max(10, Math.min(randomY, bodyHeight - buttonHeight - 10));

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
