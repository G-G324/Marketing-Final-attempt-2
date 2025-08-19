// Scroll to section when button is clicked
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form handler (simple demo)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us!");
});
