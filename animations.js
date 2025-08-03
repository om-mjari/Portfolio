// Parallax Effect
const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
  parallaxElements.forEach((element) => {
    const speed = element.dataset.speed || 0.5;
    const rect = element.getBoundingClientRect();
    const scrolled = window.pageYOffset;

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      element.style.transform = `translateY(${scrolled * speed}px)`;
    }
  });
});

// Typed.js Integration
if (document.querySelector(".typed-text")) {
  new Typed(".typed-text", {
    strings: ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });
}

// Smooth Reveal on Scroll
const revealElements = document.querySelectorAll(".reveal");

function reveal() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

// Interactive Cursor
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Hover Effect on Cards
document.querySelectorAll(".glass-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
