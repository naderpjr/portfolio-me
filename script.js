
const clock = document.createElement('div');
clock.style.position = 'fixed';
clock.style.top = '10px';
clock.style.right = '20px';
clock.style.color = '#ccc';
clock.style.fontFamily = 'monospace';
document.body.appendChild(clock);

function updateClock() {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

const heading = document.querySelector("header h1");
const fullText = heading.textContent;
let i = 0;
heading.textContent = "";

function typeWriter() {
    if (i < fullText.length) {
        heading.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();

const topBtn = document.createElement("button");
topBtn.textContent = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "50px";
topBtn.style.right = "20px";
topBtn.style.padding = "15px 20px";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#666";
topBtn.style.color = "#fff";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});


let visits = localStorage.getItem("visitCount");
if (!visits) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}
localStorage.setItem("visitCount", visits);

const visitDiv = document.createElement("div");
visitDiv.textContent = `👁 Visits: ${visits}`;
visitDiv.style.position = "fixed";
visitDiv.style.bottom = "10px";
visitDiv.style.left = "20px";
visitDiv.style.fontSize = "0.8rem";
visitDiv.style.color = "#ccc";
document.body.appendChild(visitDiv);

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(30px)';
    sec.style.transition = 'all 0.6s ease';
    observer.observe(sec);
});


const animatedItems = document.querySelectorAll(".project-card, .tool");

animatedItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = "translateY(50px) scale(0.95)";
    item.style.transition = "all 0.7s ease-out";
});

const itemObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0) scale(1)";
        }
    });
}, {
    threshold: 0.2
});

animatedItems.forEach(item => itemObserver.observe(item));


const liquidCursor = document.querySelector('.liquid-cursor');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    liquidCursor.style.left = `${currentX}px`;
    liquidCursor.style.top = `${currentY}px`;
    requestAnimationFrame(animateCursor);
}
animateCursor();


