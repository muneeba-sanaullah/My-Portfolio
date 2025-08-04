// DOM Elements
const body = document.body;
const modeToggleButtons = document.querySelectorAll("#modeToggle"); // For both desktop & mobile
const modeIcons = document.querySelectorAll(".mode-icon");
const customButtons = document.querySelectorAll(".btn-custom-dark, .btn-custom-light");
const navLinks = document.querySelectorAll(".nav-link");
const themedText = document.querySelectorAll(".text, .text-light, .text-dark");

// Toggle Function
function toggleMode() {
  const isDark = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode", !isDark);
  body.classList.toggle("light-mode", isDark);

  // Toggle icon classes
  modeIcons.forEach(icon => {
    icon.classList.toggle("bi-sun-fill", !isDark); // sun for dark mode
    icon.classList.toggle("bi-moon-fill", isDark); // moon for light mode
    icon.classList.toggle("text-light", !isDark);
    icon.classList.toggle("text-dark", isDark);
  });

  // Update button styles
  customButtons.forEach(btn => {
    btn.classList.toggle("btn-custom-dark", !isDark);
    btn.classList.toggle("btn-custom-light", isDark);
  });

  // Update text styles
  themedText.forEach(el => {
    el.classList.toggle("text-light", !isDark);
    el.classList.toggle("text-dark", isDark);
  });

  // Update nav-link shadows
  navLinks.forEach(link => {
    link.classList.toggle("text-shadow-black", !isDark);
    link.classList.toggle("text-shadow-light", isDark);
  });

  const offcanvas = document.querySelector('.offcanvas-theme');

if (offcanvas) {
  if (!isDark) {
    offcanvas.classList.remove('bg-white', 'text-dark');
    offcanvas.classList.add('bg-black', 'text-light');
  } else {
    offcanvas.classList.remove('bg-black', 'text-light');
    offcanvas.classList.add('bg-white', 'text-dark');
  }
}

const closeButton = document.querySelector(".btn-close");

if (closeButton) {
  if (!isDark) {
    // Dark mode white close icon
    closeButton.classList.remove("btn-close-dark");
    closeButton.classList.add("btn-close-white");
  } else {
    // Light mode default black close icon
    closeButton.classList.remove("btn-close-white");
    closeButton.classList.add("btn-close-dark");
  }
}


  // Store mode in localStorage
  const newMode = isDark ? "light" : "dark";
  localStorage.setItem("theme", newMode);
}

// Attach event listeners
modeToggleButtons.forEach(btn => btn.addEventListener("click", toggleMode));

// On page load: apply saved theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }

  // Run toggleMode once to sync icons and classes
  toggleMode(); // will flip once → so flip it back
  toggleMode(); // forces sync without changing mode
});
