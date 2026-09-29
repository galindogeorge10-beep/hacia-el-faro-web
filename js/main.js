// Header sticky
document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    
    // Animate hamburger
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = nav.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)';
    spans[1].style.opacity = nav.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = nav.classList.contains('active') ? 'rotate(-45deg)' : 'rotate(0)';
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Close mobile menu if open
        nav.classList.remove('active');
    });
});

// Hero inner-section buttons (no externas)
document.querySelectorAll('.hero-buttons .btn').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .evento-card, .disco-card, .producto-card, .galeria-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.section-title, .evento-card, .disco-card, .producto-card, .galeria-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

// Gallery lightbox
document.querySelectorAll('.galeria-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <button class="lightbox-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        // Close lightbox
        lightbox.querySelector('.lightbox-close').addEventListener('click', function() {
            lightbox.remove();
        });
        
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});

// Add lightbox styles dynamically
const lightboxStyles = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        cursor: default;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 10px;
    }
    
    .lightbox-close:hover {
        color: #dc3545;
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);

// Contact form: el envío real se realiza mediante FormSubmit desde el action del formulario.

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);

// Galería carrusel
(function initGaleriaCarrusel() {
    const track = document.querySelector('.galeria-track');
    const slides = Array.from(document.querySelectorAll('.galeria-track .galeria-item'));
    const prev = document.querySelector('.galeria-flecha-prev');
    const next = document.querySelector('.galeria-flecha-next');
    const current = document.getElementById('galeriaActual');
    const total = document.getElementById('galeriaTotal');
    if (!track || !slides.length || !prev || !next) return;

    let index = 0;
    if (total) total.textContent = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
        if (current) current.textContent = index + 1;
    }

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prev.click();
        if (e.key === 'ArrowRight') next.click();
    });

    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) < 45) return;
        if (delta < 0) next.click(); else prev.click();
    }, { passive: true });

    updateCarousel();
})();
