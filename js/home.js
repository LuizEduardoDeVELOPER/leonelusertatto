/* ========================================
   LEONEL TATTOO INK — HOME.JS
======================================== */

/* ---- NAVBAR SCROLL ---- */
var navbar = document.querySelector('.navbar')
if (navbar) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled')
        } else {
            navbar.classList.remove('scrolled')
        }
    })
}

/* ---- NAVBAR TOGGLE MOBILE ---- */
var navToggle = document.getElementById('navbarToggle')
var navMenu   = document.querySelector('.navbar__menu')

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
        var isOpen = navMenu.classList.toggle('open')
        navToggle.classList.toggle('open', isOpen)
    })

    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open')
            navToggle.classList.remove('open')
        })
    })

    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('open')
            navToggle.classList.remove('open')
        }
    })
}

/* ---- REVEAL ON SCROLL ---- */
var reveals = document.querySelectorAll('.reveal')

function checkReveal() {
    var vh = window.innerHeight
    reveals.forEach(function (el) {
        var top = el.getBoundingClientRect().top
        if (top < vh - 80) {
            el.classList.add('active')
        }
    })
}

window.addEventListener('scroll', checkReveal, { passive: true })
/* Roda imediatamente + após carregamento completo */
checkReveal()
window.addEventListener('load', checkReveal)

/* ---- MODAL ORÇAMENTO ---- */
var modal       = document.getElementById('modalOrcamento')
var btnFechar   = document.getElementById('btnFecharModal')
var botoesAbrir = document.querySelectorAll('.btn-solicitar, .btn-agendar-flutuante, .btn-reserva')

if (modal) {
    function abrirModal() {
        modal.classList.add('open')
        document.body.style.overflow = 'hidden'
    }
    function fecharModal() {
        modal.classList.remove('open')
        document.body.style.overflow = ''
    }

    botoesAbrir.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            abrirModal()
        })
    })

    if (btnFechar) {
        btnFechar.addEventListener('click', fecharModal)
    }

    modal.addEventListener('click', function (e) {
        if (e.target === modal) fecharModal()
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') fecharModal()
    })
}

/* ---- SOBRE TABS ---- */
var processoCards = document.querySelectorAll('.processo-card')
var tabContents   = document.querySelectorAll('.tab-content')

processoCards.forEach(function (card) {
    card.addEventListener('click', function () {
        var tab = card.dataset.tab

        processoCards.forEach(function (c) { c.classList.remove('active') })
        tabContents.forEach(function (t)   { t.classList.remove('active') })

        card.classList.add('active')
        var target = document.getElementById('tab-content-' + tab)
        if (target) target.classList.add('active')
    })
})

/* ---- INFO CARDS ---- */
var infoCards = document.querySelectorAll('.info-card')

infoCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect()
        card.style.setProperty('--x', ((e.clientX - rect.left) / rect.width  * 100) + '%')
        card.style.setProperty('--y', ((e.clientY - rect.top)  / rect.height * 100) + '%')
    })
    card.addEventListener('click', function () {
        infoCards.forEach(function (c) { c.classList.remove('active') })
        card.classList.add('active')
    })
})

/* ---- FUNDO GEOMÉTRICO INTERATIVO ---- */
var geoSections = document.querySelectorAll(
    '.portfolio, .sobre, .pinturas, .loja, .lousa-geometrica, .reserva, .saiba-mais, .localizacao'
)

geoSections.forEach(function (section) {
    section.addEventListener('mousemove', function (e) {
        var rect = section.getBoundingClientRect()
        var x    = (e.clientX - rect.left) / rect.width  * 100
        var y    = (e.clientY - rect.top)  / rect.height * 100
        section.style.setProperty('--x',         x + '%')
        section.style.setProperty('--y',         y + '%')
        section.style.setProperty('--geo-color', Math.floor((x + y) * 3) + 'deg')
    }, { passive: true })

    section.addEventListener('mouseleave', function () {
        section.style.setProperty('--x',         '50%')
        section.style.setProperty('--y',         '50%')
        section.style.setProperty('--geo-color', '0deg')
    })
})

/* ---- VANILLA TILT ---- */
if (typeof VanillaTilt !== 'undefined') {
    var tiltEls = document.querySelectorAll('.js-tilt')
    if (tiltEls.length) {
        VanillaTilt.init(tiltEls, { max: 10, speed: 400, glare: true, 'max-glare': 0.15 })
    }
}

/* ---- LENIS SMOOTH SCROLL ---- */
if (typeof Lenis !== 'undefined') {
    var lenis = new Lenis({ duration: 1.2, smoothWheel: true, smoothTouch: false })
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
}
/* =========================================================
   EFEITO DOS ÍCONES SOCIAIS DA HERO
   ========================================================= */

const socialLinks = document.querySelectorAll(".hero__socials a");

socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        link.classList.remove("social-active");

        void link.offsetWidth;

        link.classList.add("social-active");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("social-active");
    });
});