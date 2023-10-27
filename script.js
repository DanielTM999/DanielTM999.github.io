
function typeWriter(textElement, delay) {
    const text = textElement.innerHTML;
    textElement.innerHTML = '';

    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, delay);
}

const typingDelay = 30;
const textElement = document.querySelector('.typing-animation');
typeWriter(textElement, typingDelay);

function smoothScroll(target) {
    const element = document.querySelector(target);
    const offset = 50;

    if (element) {
        window.scroll({
            behavior: 'smooth',
            top: element.offsetTop - offset
        });
    }
}

const navLinks = document.querySelectorAll('.navlist a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        smoothScroll(target);
    });
});

const navigate = document.getElementById('navigate');
navigate.addEventListener("click", (e) => {
    window.location.href ="/src/RoadMap.html"
});
