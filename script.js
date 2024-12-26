const menu = document.getElementById("navegacao");
const menuButton = document.getElementById("menuh");

function openmenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menu.classList.add("closing");
        menu.addEventListener("animationend", () => {
            menu.classList.remove("closing");
        }, { once: true });
    } else {
        menu.classList.add("active");
    }
}

menuButton.addEventListener("click", openmenu);

/* teste de carrosel para vendas  */

document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelectorAll('img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    });
});

