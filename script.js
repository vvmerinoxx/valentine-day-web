document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    // Posicionar el "No" inicialmente a la derecha del "Sí"
    const yesRect = yesButton.getBoundingClientRect();
    noButton.style.position = "absolute";
    noButton.style.left = `${yesRect.right + 30}px`; // Lo mueve a la derecha
    noButton.style.top = `${yesRect.top}px`; // Alineado verticalmente

    noButton.addEventListener("mouseover", function () {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        let randomX, randomY;
        let attempts = 0;

        do {
            randomX = Math.random() * (bodyWidth - buttonWidth - 20);
            randomY = Math.random() * (bodyHeight - buttonHeight - 20);
            attempts++;
        } while (
            Math.abs(randomX - yesButton.offsetLeft) < 100 &&
            Math.abs(randomY - yesButton.offsetTop) < 50 &&
            attempts < 10
        );

        // Asegurar que el botón "No" no salga de pantalla
        randomX = Math.max(10, Math.min(randomX, bodyWidth - buttonWidth - 10));
        randomY = Math.max(10, Math.min(randomY, bodyHeight - buttonHeight - 10));

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
