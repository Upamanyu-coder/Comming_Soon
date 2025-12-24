import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo");

  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transform = "scale(1.1) rotate(5deg)";
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "scale(1) rotate(0deg)";
    });
  }
});
