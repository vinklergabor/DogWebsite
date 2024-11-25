// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Glowing Button Effect on Hover
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.classList.add('glow');
    });

    button.addEventListener('mouseout', () => {
        button.classList.remove('glow');
    });
});

// Add glow class for styling
const glowStyle = document.createElement('style');
glowStyle.textContent = `
    .glow {
        box-shadow: 0 0 20px #ffdf00, 0 0 30px #ffdf00, 0 0 40px #ffdf00;
        transition: box-shadow 0.3s ease-in-out;
    }
`;
document.head.appendChild(glowStyle);

// Preloader Animation
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});

// Create Preloader
const preloaderHTML = `
    <div class="preloader">
        <div class="loader"></div>
    </div>
`;
document.body.insertAdjacentHTML('afterbegin', preloaderHTML);

// Preloader CSS
const preloaderStyle = document.createElement('style');
preloaderStyle.textContent = `
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #1e1e2d;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }
    .preloader.fade-out {
        opacity: 0;
        transition: opacity 1s ease-out;
    }
    .loader {
        border: 8px solid #29293b;
        border-top: 8px solid #ffdf00;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(preloaderStyle);

// Section Fade-in Animation on Scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Section Fade-in Styling
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }
    section.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(fadeInStyle);

// Tooltip Effect
const addTooltips = () => {
    const tooltipTargets = document.querySelectorAll('[data-tooltip]');
    tooltipTargets.forEach(target => {
        target.addEventListener('mouseover', () => {
            const tooltipText = target.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);

            const rect = target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - 30}px`;
        });

        target.addEventListener('mouseout', () => {
            document.querySelector('.tooltip').remove();
        });
    });
};

addTooltips();

// Tooltip Styling
const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .tooltip {
        position: absolute;
        background-color: #ffdf00;
        color: #1e1e2d;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.8rem;
        pointer-events: none;
        z-index: 1000;
        opacity: 0.9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(tooltipStyle);

// Particle Effect
const createParticles = () => {
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particle-container');
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 5 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particleContainer.appendChild(particle);
    }
};

createParticles();

// Particle Styling
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: -1;
    }
    .particle {
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #ffdf00;
        border-radius: 50%;
        opacity: 0.8;
        animation: particle-float linear infinite;
    }
    @keyframes particle-float {
        0% {
            transform: translateY(0) scale(0.8);
            opacity: 0.8;
        }
        50% {
            transform: translateY(-100px) scale(1.2);
            opacity: 0.5;
        }
        100% {
            transform: translateY(-200px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

console.log('Advanced features loaded: preloader, tooltips, fade-ins, and particles!');
