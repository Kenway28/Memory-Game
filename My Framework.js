function hamburgerMenu(hamburgerType) {
  let burger = document.querySelector(".hamburger");
  var Menu = document.querySelector(".hamburger-menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle(hamburgerType);
    Menu.toggleAttribute("open");
  });
}

export {hamburgerMenu};
