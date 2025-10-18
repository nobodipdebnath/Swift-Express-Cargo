
const menuIcon = document.getElementById("show-menu");
const closeIcon = document.getElementById("hide-menu");
const mobileMenu = document.getElementById("all-links");

if (menuIcon && mobileMenu && closeIcon) {
  const openMenu = () => {
    mobileMenu.classList.remove("-left-[100%]");
    mobileMenu.classList.add("left-0");
  };

  const closeMenu = () => {
    mobileMenu.classList.add("-left-[100%]");
    mobileMenu.classList.remove("left-0");
  };


  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu();
  });

  // close menu
  closeIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      closeMenu();
    }
  });

  const menuItems = mobileMenu.querySelectorAll("a, li, button");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeMenu();
    });
  });
}
