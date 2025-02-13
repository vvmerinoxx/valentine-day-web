document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no");
    const buttonsContainer = document.querySelector(".buttons");
    let hoverCount = 0; // Contador de veces que el mouse pasa sobre "No"

    noButton.addEventListener("mouseover", function () {
        hoverCount++; // Incrementa el contador

        if (hoverCount >= 10) {
            mostrarImagen();
            return; // Evita que siga moviéndose después de 10 veces
        }

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

    function mostrarImagen() {
        const img = document.createElement("img");
        img.src = "gato.png"; // Ruta de la imagen
        img.alt = "Gatito";
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        img.style.width = "500px"; // Ajusta el tamaño según necesites
        img.style.zIndex = "1000"; // Asegura que se vea por encima de otros elementos
        document.body.appendChild(img);
    }
});