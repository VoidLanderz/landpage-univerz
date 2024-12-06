const nav = document.querySelector('nav');

// Deixa o nav menor 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        // Adiciona a classe 'small' se o scroll for maior que 50px
        nav.classList.add('small');
    } else {
        // Remove a classe 'small' quando o scroll voltar ao topo
        nav.classList.remove('small');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carrosel-itm');
    const totalItems = items.length;
    const carrosel = document.querySelector('.carrosel');
    const bolinhasContainer = document.querySelector('.bolinhas');

    // Criar as bolinhas de acordo com a quantidade de slides
    function createBolinhas() {
        for (let i = 0; i < totalItems; i++) {
            const bolinha = document.createElement('div');
            bolinha.classList.add('bolinha');
            // Adiciona um evento de clique a cada bolinha
            bolinha.addEventListener('click', () => {
                currentIndex = i;  // Atualiza o índice para o slide clicado
                updateSlide();      // Atualiza o carrossel e os indicadores
            });
            bolinhasContainer.appendChild(bolinha);
        }
        updateBolinhas(); // Atualiza os indicadores iniciais
    }

    // Função para atualizar o estado das bolinhas
    function updateBolinhas() {
        const bolinhas = document.querySelectorAll('.bolinha');
        bolinhas.forEach((bolinha, index) => {
            bolinha.classList.remove('active'); // Remove a classe 'active' de todos
            if (index === currentIndex) {
                bolinha.classList.add('active'); // Adiciona a classe 'active' no indicador atual
            }
        });
    }

    // Função para atualizar o slide e os indicadores
    function updateSlide() {
        const offset = -currentIndex * 100; // Calcular o deslocamento (cada slide tem 100% de largura)
        carrosel.style.transform = `translateX(${offset}%)`; // Atualizar o carrossel
        updateBolinhas(); // Atualiza os indicadores
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems; // Avançar para o próximo slide
        updateSlide();  // Atualiza o carrossel e os indicadores
    }

    // Função para voltar para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Voltar para o slide anterior
        updateSlide();  // Atualiza o carrossel e os indicadores
    }

    // Selecionar os botões para navegação
    const nextButton = document.querySelector('#nextBtn');
    const prevButton = document.querySelector('#prevBtn');

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Inicializa os indicadores
    createBolinhas();
});

function msg_vermais() {
    alert("Pagina em construção!");
}
