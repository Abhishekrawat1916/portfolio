// Scroll to specific section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Trigger animations when elements come into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0s";
    }
  });
});

document.querySelectorAll('.about, .skills, .contact, .project-card').forEach(section => {
  observer.observe(section);
});
