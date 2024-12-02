function mostrarMaisNoticias() {
    alert('Carregando mais notícias...');
}

// Array de notícias fictícias
const noticias = [
    "Notícia 1: Novo álbum chegando!",
    "Notícia 2: Show esgotado no RJ!",
    "Notícia 3: Banda em turnê internacional!",
    "Notícia 4: Parceria com novo produtor!",
    "Notícia 5: Clipe bate recordes no YouTube!"
];

// Função para carregar mais notícias
function mostrarMaisNoticias() {
    const noticiasContainer = document.querySelector("#noticias");
    noticias.forEach((noticia) => {
        const div = document.createElement("div"); // Cria um novo elemento <div>
        div.classList.add("noticia"); // Adiciona a classe "noticia"
        div.innerHTML = `<h3>${noticia}</h3>`;
        noticiasContainer.appendChild(div); // Adiciona o <div> ao container de notícias
    });
}
const carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(`Produto "${produto}" foi adicionado ao carrinho!`);
}

function exibirMensagem() {
    alert("Obrigado por visitar nosso site! 🎸");
}

// Adiciona o evento ao botão "Contato"
document.addEventListener("DOMContentLoaded", function () {
    const botaoContato = document.getElementById("btn-contato");
    if (botaoContato) {
        botaoContato.addEventListener("click", exibirMensagem);
    }
});

let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Mostrar apenas o slide atual
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Botão anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
});

// Botão próximo
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Inicializar o carrossel
updateCarousel();