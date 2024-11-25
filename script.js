// script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset for fixed headers
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
const style = document.createElement('style');
style.textContent = `
    .glow {
        box-shadow: 0 0 20px #ffdf00, 0 0 30px #ffdf00, 0 0 40px #ffdf00;
        transition: box-shadow 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// Sticky Header Effect (Optional)
const header = document.querySelector('.hero');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        header.style.opacity = '0.8'; // Header becomes slightly transparent when scrolling down
    } else {
        header.style.opacity = '1'; // Full opacity when scrolling up
    }
    lastScrollY = window.scrollY;
});

// Interactive Roadmap Animation
const roadmap = document.querySelector('.roadmap-img');
if (roadmap) {
    roadmap.addEventListener('mouseover', () => {
        roadmap.style.transform = 'scale(1.05)';
        roadmap.style.transition = 'transform 0.3s ease-in-out';
    });

    roadmap.addEventListener('mouseout', () => {
        roadmap.style.transform = 'scale(1)';
    });
}

// Placeholder for expanding future interactivity
console.log('Script loaded successfully! Add more interactivity as needed.');
