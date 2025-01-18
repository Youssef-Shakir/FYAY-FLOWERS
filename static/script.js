const scrollers = document.querySelectorAll(".scroller");
console.log("js work");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    // Use `querySelectorAll` scoped to the current scroller
    const scrollerInner = scroller.querySelectorAll(".scroller-inner");

    // Ensure scrollerInner is properly processed
    scrollerInner.forEach((inner) => {
      // Collect all children of scrollerInner
      const scrollerContent = Array.from(inner.children);

      // Clone and append the content
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        inner.appendChild(duplicatedItem);
      });
    });
  });
}

const sliders = document.querySelectorAll(".question-card");

function questionSlider() {
  console.log("slider function");
  sliders.forEach((slider) => {
    slider.addEventListener("click", () => {
      // Check if the current slider is active
      console.log(slider);
      const isActive = slider.getAttribute("data-set") === "true";

      // Remove "data-set" and reset icons for all sliders
      sliders.forEach((otherSlider) => {
        otherSlider.setAttribute("data-set", false);
        const icon = otherSlider.querySelector(
          ".question-container-second-column-question-icon"
        );
        if (icon) icon.textContent = "+"; // Reset to "+"
      });

      // If the current slider wasn't active, activate it
      if (!isActive) {
        slider.setAttribute("data-set", true);
        const icon = slider.querySelector(
          ".question-container-second-column-question-icon"
        );
        if (icon) icon.textContent = "-"; // Change to "-"
      }
    });
  });
}

console.log("pass sliders and scroller");
questionSlider();

addAnimation();

// Selecting Elements
const modal = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const button = document.querySelectorAll(".bttn");
const buttons = document.querySelector(".btns");
const close = document.querySelector(".close");
const footer = document.querySelector(".footer");
const eventsBackground = document.querySelector(".events-background");

// Function to open modal.
const openModal = function () {
  buttons.classList.add("hidden");
  footer.classList.add("hidden");
  eventsBackground.classList.add("hidden");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log("Modal Open");
};
// Function to close modal.
const closeModal = function () {
  buttons.classList.remove("hidden");
  footer.classList.remove("hidden");
  eventsBackground.classList.remove("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  console.log("Modal Close");
};

// looping openModal function to all buttons.
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", openModal);
}

// close modal when user click on close button.
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when user press ESC key.
document.addEventListener("keydown", function (kp) {
  // Checking if ESC key was pressed and modal is open.
  if (kp.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

navbarActive();
