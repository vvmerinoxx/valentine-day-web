document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const container = document.querySelector(".buttons");

    noButton.style.position = "absolute"; // Asegura que se pueda mover

    noButton.addEventListener("mouseover", function() {
        const maxX = container.offsetWidth - noButton.offsetWidth;
        const maxY = container.offsetHeight - noButton.offsetHeight;

        let randomX, randomY;
        let attempts = 0;

        do {
            randomX = Math.floor(Math.random() * maxX);
            randomY = Math.floor(Math.random() * maxY);
            attempts++;
            if (attempts > 10) break; // Evita bucles infinitos
        } while (
            Math.abs(randomX - yesButton.offsetLeft) < 150 && 
            Math.abs(randomY - yesButton.offsetTop) < 50
        );

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
