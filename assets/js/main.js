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

// mobile img change
const mainImg = document.getElementById("mainimg");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let imgCount = 1;
previous.addEventListener("click", () => {
  if (imgCount != 1) {
    mainImg.src = `./assets/img/image-product-${(imgCount -= 1)}.jpg`;
  }
});
next.addEventListener("click", () => {
  if (imgCount != 4) {
    mainImg.src = `./assets/img/image-product-${(imgCount += 1)}.jpg`;
  }
});

// cart
const cartBtn = document.getElementById("cart");
const cartPopup = document.getElementById("cartpopup");
cartBtn.addEventListener("click", () => {
  cartPopup.classList.toggle("hidden");
});

const minusBtn = document.getElementById("buttonMinus");
const plusBtn = document.getElementById("buttonPlus");
const counts = document.getElementById("counts");
let counter = 0;
minusBtn.addEventListener("click", () => {
  if (counter != 0) {
    counts.innerText = `${(counter -= 1)}`;
  }
});
plusBtn.addEventListener("click", () => {
  counts.innerText = `${(counter += 1)}`;
});

const addtoCartBtn = document.getElementById("addtocartBtn");
const cardpopupappend = document.querySelector("#cartpopup");
const cardpopupP = document.querySelector("#cartpopup > p");
let count = 1;
addtoCartBtn.addEventListener("click", (e) => {
  if (count === 1) {
    cardpopupP.classList = "hidden";
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const svgBtn = document.createElement("button");
    const checkoutBtn = document.createElement("button");
    const svg = document.createElement("img");
    const divs = document.createElement("div");
    checkoutBtn.innerText = "CheckOut";
    checkoutBtn.classList =
      "bg-orange-500 p-2 rounded-md font-semibold text-white ml-4 mt-2";
    svg.src = "./assets/img/icon-delete.svg";
    svg.alt = "icon-delete";
    svg.classList = "w-4 h-4";
    svgBtn.classList = "p-3 ";
    svgBtn.append(svg);
    p.classList = "ml-4 mt-5";
    p.innerHTML = `Fall Limited Edition <br> Sneakers <br> $125.00 x 
    ${counts.innerText} $${counts.innerText * 125.0}.00`;
    img.src = "./assets/img/image-product-1-thumbnail.jpg";
    img.alt = "image-product-1";
    img.classList = "w-20 h-20 rounded-md mt-4 ml-4";
    divs.classList = "flex";
    divs.append(img);
    div.append(divs);
    p.append(svgBtn);
    divs.append(p);
    div.append(checkoutBtn);
    cardpopupappend.appendChild(div);
    count = 2;
    svgBtn.addEventListener("click", () => {
      div.remove();
      cardpopupP.classList = "block text-center mt-16";
      count = 1;
    });
  }
  cartPopup.classList.replace("hidden", "block");
});
