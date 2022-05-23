function hamburgerMenu(hamburgerType) {
  let burger = document.querySelector(".hamburger");
  var Menu = document.querySelector(".hamburger-menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle(hamburgerType);
    Menu.toggleAttribute("open");
  });
}

function darkMode() {
  let toggle = document.querySelector("#toggle");
  let indicator = document.querySelector(".indicator");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("active");
  });
}

export { hamburgerMenu };
export { darkMode };
