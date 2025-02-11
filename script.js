document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const container = document.querySelector(".buttons");

    noButton.style.position = "absolute"; // Permite que se mueva sin problemas

    noButton.addEventListener("mouseover", function() {
        const maxX = window.innerWidth - noButton.offsetWidth - 20; // Evita salir de los bordes
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        let randomX, randomY;
        let attempts = 0;

        do {
            randomX = Math.floor(Math.random() * maxX);
            randomY = Math.floor(Math.random() * maxY);
            attempts++;
            if (attempts > 10) break; // Evita bucles infinitos
        } while (
            Math.abs(randomX - yesButton.getBoundingClientRect().left) < 150 &&
            Math.abs(randomY - yesButton.getBoundingClientRect().top) < 50
        );

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});

