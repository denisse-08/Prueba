

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Abre la imagen en una nueva ventana o pestaña al hacer clic
        const imgSrc = item.querySelector('img').src;
        window.open(imgSrc);
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// script.js

// Función para animar los elementos de la cuadrícula
function animateGridItems() {
    const gridItems = document.querySelectorAll('.grid-item');

    // Iterar a través de los elementos de la cuadrícula y aplicar animaciones
    gridItems.forEach((item, index) => {
        anime({
            targets: item,
            translateY: [-30, 0],
            opacity: [0, 1],
            delay: index * 200,
            duration: 800,
            easing: 'easeOutSine',
        });
    });
}

// Llamar a la función de animación cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    animateGridItems();
});

// Función para animar la transición entre imágenes
function animateImageTransition(selectedIndex) {
    const allImages = document.querySelectorAll('.tecnologia-img');
    const selectedImage = allImages[selectedIndex - 1];

    // Aplica una clase para ocultar temporalmente las imágenes
    allImages.forEach((image) => {
        image.classList.add('hidden');
    });

    // Muestra la imagen seleccionada
    selectedImage.classList.remove('hidden');

    // Quita la clase de ocultar después de un breve retraso (puedes ajustar la duración)
    setTimeout(() => {
        allImages.forEach((image) => {
            image.classList.remove('hidden');
        });
    }, 1000); // 1000 ms = 1 segundo (ajusta según tus preferencias)
}

const allImages = document.querySelectorAll('.tecnologia-img');
allImages.forEach((image) => {
    image.addEventListener('click', (event) => {
        const selectedIndex = event.target.getAttribute('data-index');
        animateImageTransition(selectedIndex);
    });
});

// script.js

const projectSlides = document.querySelectorAll('.project-slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
    projectSlides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % projectSlides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + projectSlides.length) % projectSlides.length;
    showSlide(currentIndex);
}

// Agrega eventos de clic a los botones de flecha
prevButton.addEventListener('click', () => {
    prevSlide();
});

nextButton.addEventListener('click', () => {
    nextSlide();
});

setInterval(nextSlide, 9000); // Cambia de diapositiva automáticamente cada 3 segundos

showSlide(currentIndex);
