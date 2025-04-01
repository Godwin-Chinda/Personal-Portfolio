// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Form Handling
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the form data
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Create an object to store the form data
  const formData = {
    name,
    email,
    message,
  };

  // Log the form data to the console
  console.log("Form Data:", formData);

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all the fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Display success message
  alert("Message sent successfully!");

  // Clear the form
  form.reset();
});

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
