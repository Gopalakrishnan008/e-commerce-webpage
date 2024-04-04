// menu bar
const mobilemenuBtnEl = document.getElementById("mobilemenuBtn");
const mobilemenuEl = document.getElementById("mobilemenu");
const mobilemenuCloseBtn = document.getElementById("mobilemenuCloseBtn");
mobilemenuBtnEl.addEventListener("click", () => {
  mobilemenuEl.classList.toggle("hidden");
});
mobilemenuCloseBtn.addEventListener("click", () => {
  mobilemenuEl.classList.toggle("hidden");
});

// img change
const imgEl = document.getElementById("mainimg");
function changeimg(event) {
  switch (event.target.id) {
    case "thumbnail1":
      imgEl.src = "./assets/img/image-product-1.jpg";
      break;
    case "thumbnail2":
      imgEl.src = "./assets/img/image-product-2.jpg";
      break;
    case "thumbnail3":
      imgEl.src = "./assets/img/image-product-3.jpg";
      break;
    case "thumbnail4":
      imgEl.src = "./assets/img/image-product-4.jpg";
      break;
    default:
      null;
      break;
  }
}
