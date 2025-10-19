document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("feedback-carousel-container");
  const prevButton = document.getElementById("feedback-prev-btn");
  const nextButton = document.getElementById("feedback-next-btn");
  const items = document.querySelectorAll(".feedback-carousel-item");
  const totalItems = items.length;

  let currentIndex = 0;

  function getItemsToShow() {
    if (window.innerWidth >= 1024) {
      // lg
      return 3;
    }
    if (window.innerWidth >= 768) {
      // md
      return 2;
    }
    return 1; // sm and smaller
  }

  function updateCarousel() {
    const itemsToShow = getItemsToShow();
    const itemWidth = carousel.parentElement.offsetWidth / itemsToShow;
    const offset = -currentIndex * itemWidth;

    carousel.style.transform = `translateX(${offset}px)`;

    // Disable/Enable buttons
    prevButton.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
    prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1";

    nextButton.style.pointerEvents =
      currentIndex >= totalItems - itemsToShow ? "none" : "auto";
    nextButton.style.opacity =
      currentIndex >= totalItems - itemsToShow ? "0.5" : "1";
  }

  nextButton.addEventListener("click", () => {
    const itemsToShow = getItemsToShow();
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Update carousel on window resize
  window.addEventListener("resize", () => {
    // Reset index and update to avoid layout issues
    currentIndex = 0;
    updateCarousel();
  });

  // Initial setup
  updateCarousel();
});

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.getElementById("mobile-menu");

if (menuIcon && mobileMenu && closeIcon) {
  const openMenu = () => {
    mobileMenu.style.right = "0";
  };

  const closeMenu = () => {
    mobileMenu.style.right = "-100%";
  };

  menuIcon.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);

  // Close menu if clicked outside
  document.addEventListener(
    "click",
    (event) => {
      if (
        !mobileMenu.contains(event.target) &&
        !menuIcon.contains(event.target)
      ) {
        closeMenu();
      }
    },
    true
  );
}

let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "0.5s";
  } else if (currentScroll < lastScroll) {
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "0.5s";
  }

  lastScroll = currentScroll;
});
