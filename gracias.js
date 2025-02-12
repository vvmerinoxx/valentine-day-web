document.addEventListener("DOMContentLoaded", function () {
    const pulseButton = document.getElementById("pulse");
    const mensaje = document.getElementById("mensaje");

    let clickCount = 0; // Contador de clics en el botón

    const images = [
        { src: "nosotros.png", message: "Gracias..." },
        { src: "nosotrosdos.png", message: "por..." },
        { src: "nosotrosdosiempre.png", message: "el equipazo que hacemos" }
    ];

    // Ocultar el botón al principio
    pulseButton.style.display = "none";

    // Mostrar el botón después de 5 segundos
    setTimeout(() => {
        pulseButton.style.display = "block";
    }, 5000);

    pulseButton.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
    });

    pulseButton.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });

    pulseButton.addEventListener("click", function () {
        if (clickCount < images.length) {
            mostrarImagen(images[clickCount].src, images[clickCount].message);
            clickCount++;
        }
    });

    function mostrarImagen(imgSrc, text) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Imagen especial";
        img.style.position = "absolute";
        img.style.width = "300px"; // Tamaño fijo para no ocupar demasiado
        img.style.zIndex = "1000";

        // Calcular una posición aleatoria dentro de la pantalla
        const maxX = window.innerWidth - 300;
        const maxY = window.innerHeight - 300;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;

        document.body.appendChild(img);
        mensaje.innerText = text;
    }
});
