let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let levels = document.querySelectorAll(".levels span");
let levelsPanel = document.querySelector(".levels");
let level = document.querySelector(".level");
let settingsBtn = document.querySelector(".settingsBtn");
let menuIcons = document.querySelector(".menu-icons");
let hint = document.querySelector(".hint");

levels.forEach((lvl) => {
  lvl.addEventListener("click", () => {
    levels.forEach((lv) => {
      lv.classList.remove("active");
    });
    lvl.classList.add("active");
  });
});
let board = document.querySelector(".board");
let TimeCount;
function gamePlay(size) {
  let level = document.querySelector(".active");
  board.innerHTML = "";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  board.className = `board size-${level.dataset.size}`;
  let keys = [
    "moon",
    "user",
    "sun",
    "pen",
    "book",
    "mug-hot",
    "cloud",
    "smile",
    "trophy",
    "clock",
    "heart",
    "file",
    "dog",
    "bone",
    "cat",
    "envelope",
    "apple-alt",
    "carrot",
    "suitcase",
    "euro-sign",
    "fish",
    "tshirt",
    "star",
    "car",
    "home",
    "snowflake",
    "eye",
    "bolt",
    "plane",
    "tree",
    "horse",
    "bell",
  ];
  console.log(keys.length);
  let selectedImages = [];
  while (selectedImages.length < size / 2) {
    let image = keys[Math.floor(Math.random() * keys.length)];
    if (!selectedImages.includes(image)) {
      selectedImages.push(image);
    }
  }
  let cards = [...selectedImages, ...selectedImages];
  const shuffledCards = cards.sort((a, b) => 0.5 - Math.random());

  shuffledCards.forEach((el) => {
    let box = document.createElement("div");
    box.className = "box";
    let face = document.createElement("div");
    face.className = `face fas fa-${shuffledCards[shuffledCards.indexOf(el)]}`;
    let back = document.createElement("div");
    back.className = "back";
    box.appendChild(face);
    box.appendChild(back);
    board.appendChild(box);
  });

  let boxes = Array.from(document.querySelectorAll(".board .box:not(.match)"));

  boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
      if (box.classList.contains("match")) {
        event.preventDefault();
      }
      let selectedBoxes = document.querySelectorAll(".selected");
      if (selectedBoxes.length < 2) {
        box.classList.toggle("selected");
      } else {
        event.preventDefault();
      }
      if (selectedBoxes.length + 1 == 2) {
        setTimeout(() => {
          selectedBoxes = document.querySelectorAll(".selected");
          if (
            selectedBoxes[0].firstElementChild.className ===
            selectedBoxes[1].firstElementChild.className
          ) {
            selectedBoxes.forEach((box) => box.classList.remove("selected"));
            selectedBoxes.forEach((box) => box.classList.add("match"));
          } else {
            selectedBoxes.forEach((box) => box.classList.remove("selected"));
          }
          if (document.querySelectorAll(".match").length == size) {
            clearInterval(TimeCount);
          }
        }, 600);
      }
    });
  });
  let startingTime = new Date().getTime();
  TimeCount = setInterval(() => {
    let currentPoint = new Date().getTime();
    let time = currentPoint - startingTime;
    let sec = Math.floor((time % 60000) / 1000);
    let min = Math.floor(time / 60000);
    seconds.innerHTML = sec.toString().padStart(2, 0);
    minutes.innerHTML = min.toString().padStart(2, 0);
  }, 1000);
}
let start = document.querySelector(".start");
start.addEventListener("click", () => {
  clearInterval(TimeCount);
  board.innerHTML = 3;
  let level = document.querySelector(".active");
  levelsPanel.style.display = "none";
  menuIcons.style.display = "flex";

  gamePlay(level.dataset.size);
});
settingsBtn.addEventListener("click", () => {
  levelsPanel.style.display = "grid";
  menuIcons.style.display = "none";
});
hint.addEventListener("click", () => {
  let boxes = Array.from(document.querySelectorAll(".board .box:not(.match)"));
  boxes.forEach((box) => box.classList.toggle("hint"));
  setTimeout(() => {
    boxes.forEach((box) => box.classList.toggle("hint"));
  }, 2000);
});
