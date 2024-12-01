const header = document.querySelector('header');

// treco pra deixar o header maneiro 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        // Adiciona a classe 'small' se o scroll for maior que 50px
        header.classList.add('small');
    } else {
        // Remove a classe 'small' quando o scroll voltar ao topo
        header.classList.remove('small');
    }
});

let currentIndex = 0;
const items = document.querySelectorAll('.carrosel-itm');
const totalItems = items.length;
const carrosel = document.querySelector('.carrosel');

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalItems; // Avançar para o próximo slide
    const offset = -currentIndex * 100; // Calcular o deslocamento para o próximo slide
    carrosel.style.transform = `translateX(${offset}%)`; // Aplicar a transição do movimento
}

setInterval(changeSlide, 10000); // Troca de slide a cada 3 segundos
