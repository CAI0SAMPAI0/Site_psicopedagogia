// variáveis

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir_menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir_menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir_menu')
})

//animação

ScrollReveal().reveal('.topo_do_site', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});

ScrollReveal().reveal('.especialidades', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});
ScrollReveal().reveal('.sobre', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});
ScrollReveal().reveal('.portfolio', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});
ScrollReveal().reveal('.formulario, footer', {
    origin: 'left',
    duration: 2000,
    distance: '20%'

});
ScrollReveal().reveal('.projeto-card, .esp-box', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 1000
});

ScrollReveal().reveal('.txt_topo_site, .titulo', {
    delay: 100,
    origin: 'left',
    distance: '30px'
});

// form funcionar WA

document.getElementById('contact_form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let question = document.getElementById('pergunta').value;

    let text = `Olá, meu nome é ${name}.
Pergunta: ${question}`;
    let number = '5524999139693';
    let url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("imagemModal");
const imagens = document.querySelectorAll(".img-consultorio");
const fechar = document.querySelector(".fechar");

imagens.forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

fechar.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});