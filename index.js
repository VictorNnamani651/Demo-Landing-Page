// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.textContent = "☰";
  });
});

// Smooth scroll for CTA button
document.querySelector(".cta-button").addEventListener("click", (e) => {
  e.preventDefault();
  // Add your smooth scroll logic here
  console.log("CTA clicked");
});
