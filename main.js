// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  mirror: false,
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

// Initial theme setup
if (
  localStorage.theme === "dark" ||
  (!localStorage.theme && prefersDark.matches)
) {
  setTheme(true);
}

themeToggle?.addEventListener("click", () => {
  setTheme(!document.documentElement.classList.contains("dark"));
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !mobileMenuButton?.contains(e.target) &&
    !mobileMenu?.contains(e.target)
  ) {
    mobileMenu?.classList.add("hidden");
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    if (href !== "#") {
      const target = document.querySelector(href);
      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after clicking
      mobileMenu?.classList.add("hidden");
    }
  });
});

// Scroll to top button
const scrollButton = document.createElement("button");
scrollButton.innerHTML = "↑";
scrollButton.className =
  "fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 opacity-0 pointer-events-none";
document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollButton.style.opacity = "1";
    scrollButton.style.pointerEvents = "auto";
  } else {
    scrollButton.style.opacity = "0";
    scrollButton.style.pointerEvents = "none";
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
