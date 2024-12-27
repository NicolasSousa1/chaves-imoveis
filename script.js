const menu = document.getElementById("navegacao");
const menuButton = document.getElementById("menuh");
const botaocarousel = document.getElementsByClassName('carousel-buttons')

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

/* filtro */

// Seleciona os elementos necessários
const filterSelect = document.getElementById('filter-type'); // Dropdown para tipo de imóvel
const cards = document.querySelectorAll('.card'); // Todos os cards de imóveis

// Adiciona o evento de filtro
filterSelect.addEventListener('change', () => {
    const selectedType = filterSelect.value.toLowerCase(); // Obtém o tipo selecionado

    // Filtra os cards com base no tipo selecionado
    cards.forEach(card => {
        const type = card.querySelector('.type').textContent.toLowerCase();

        if (selectedType === 'todos' || type === selectedType) {
            card.style.display = 'block'; // Mostra o card
        } else {
            card.style.display = 'none'; // Esconde o card
        }
    });
});


