$(function () {
  $(".best_sellers__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    variableWidth: true,
  });
  $(".instagram__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    variableWidth: true,
    arrows: false,
  });
  $(".product_page_slider__items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    variableWidth: true,
    arrows: false,
  });
  $(".burger-menu").click(function (event) {
    $(".burger-menu").toggleClass("burger-menu-active");
  });
  $("#search").click(function (event) {
    $(".search-pole").toggleClass("activ_pool");
  });
  loadDataToLocalStore();
  displayCartsCount();
  displayLikesCount();
  processCatalog();
});

function processCatalog() {
  // if (document.location.pathname === "/catalog.html") {
  let I;
  addLikeClickEvents();
  addCartClickEvents();
  setLikes();
  setCarts();
}
// }

function loadDataToLocalStore() {
  const dresses = JSON.parse(data);
  if (!localStorage.getItem("dresses")) {
    setDressesToStore(dresses);
  }
}

function setDressesToStore(dresses) {
  localStorage.setItem("dresses", JSON.stringify(dresses));
}

function getDressesFromStore() {
  const drss = JSON.parse(localStorage.getItem("dresses"));
  return drss;
}

function markDressChecked(dressId) {
  changeCartView(dressId);
  const drss = getDressesFromStore();
  const drs = findDressById(drss, dressId);
  drs.checked = !drs.checked;
  const index = drss.indexOf(drs);
  drss[index] = drs;
  setDressesToStore(drss);
  displayCartsCount();
}

function markDressLiked(dressId) {
  changeLikeView(dressId);
  const drss = getDressesFromStore();
  const drs = findDressById(drss, dressId);
  drs.liked = !drs.liked;
  const index = drss.indexOf(drs);
  drss[index] = drs;
  setDressesToStore(drss);
  displayLikesCount();
}

function findDressById(dresses, dressId) {
  let dress;
  dresses.forEach((drs) => {
    if (drs.id === dressId) {
      dress = drs;
      return;
    }
  });
  return dress;
}

function getPathPrefix() {
	let prefix = "../"
	if (document.location.pathname === "/index.html") {
		prefix = "./"
	}
	return prefix
}

function changeCartView(dressId) {
  let imgSrc = getPathPrefix() + "icons/bag-active.svg";
  const cart = document.getElementById(`cart-${dressId}`);
  const classes = cart.classList;
  if (classes.contains("active")) {
    imgSrc = getPathPrefix() + "icons/bag.svg";
    cart.classList.remove("active");
  } else {
    cart.classList.add("active");
  }
  replaceIconImg(cart, imgSrc, "cart");
}

function changeLikeView(dressId) {
  let imgSrc = getPathPrefix() + "icons/heart-active.svg";
  const like = document.getElementById(`like-${dressId}`);
  const classes = like.classList;
  if (classes.contains("active")) {
    imgSrc = getPathPrefix() + "icons/heart.svg";
    like.classList.remove("active");
  } else {
    like.classList.add("active");
  }
  replaceIconImg(like, imgSrc, "like");
}

function replaceIconImg(element, imgSource, altValue) {
  element.removeChild(element.firstChild);
  const newImg = document.createElement("img");
  newImg.setAttribute("alt", altValue);
  newImg.setAttribute("src", imgSource);
  newImg.className = "golden_svg";
  if (altValue === "cart") {
    newImg.className = "catalog_bag golden_svg";
  }
  element.appendChild(newImg);
}

function displayCartsCount() {
  const cartsCount = getCartsCount();
  const cartsCountElem = document.getElementsByClassName("cart")[0];
  cartsCountElem.innerHTML = +cartsCount;
  toggleCountElement(cartsCountElem);
}

function displayLikesCount() {
  const likesCount = getLikesCount();
  const likesCountElem = document.getElementsByClassName("like")[0];
  likesCountElem.innerHTML = +likesCount;
  toggleCountElement(likesCountElem);
}

function toggleCountElement(element) {
  if (element.innerHTML === "0") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function getLikesCount() {
  let likesCount = 0;
  const dresses = getDressesFromStore();
  dresses.forEach((dress) => {
    if (dress.liked) {
      ++likesCount;
    }
  });
  return likesCount;
}

function getCartsCount() {
  let cartsCount = 0;
  const dresses = getDressesFromStore();
  dresses.forEach((dress) => {
    if (dress.checked) {
      ++cartsCount;
    }
  });
  return cartsCount;
}

function setLikes() {
  const dresses = getDressesFromStore();
  dresses.forEach((element) => {
    const dressId = element.id;
    const isLiked = element.liked;
    const like = document.getElementById(`like-${dressId}`);
    if (like) {
      if (isLiked && !like.classList.contains("active")) {
        changeLikeView(dressId);
      }
      if (!isLiked && like.classList.contains("active")) {
        changeLikeView(dressId);
      }
    }
  });
}

function setCarts() {
  const dresses = getDressesFromStore();
  dresses.forEach((element) => {
    const dressId = element.id;
    const isChecked = element.checked;
    const cart = document.getElementById(`cart-${dressId}`);
    if (cart) {
      if (isChecked && !cart.classList.contains("active")) {
        changeCartView(dressId);
      }
      if (!isChecked && cart.classList.contains("active")) {
        changeCartView(dressId);
      }
    }
  });
}

function addLikeClickEvents() {
  const likes = document.getElementsByClassName("likes");
  for (const like of likes) {
    const id = like.getAttribute("id").split("-")[1];
    like.onclick = function (e) {
      e.preventDefault();
      markDressLiked(id);
    };
  }
}

function addCartClickEvents() {
  const carts = document.getElementsByClassName("carts");
  for (const cart of carts) {
    const id = cart.getAttribute("id").split("-")[1];
    cart.onclick = function (e) {
      e.preventDefault();
      markDressChecked(id);
    };
  }
}

const chevrons = document.getElementsByClassName("chevron");

for (let chevron of chevrons) {
  chevron.addEventListener("click", (ev) => toggleChevron(ev, chevron));
}
function toggleChevron(event, chevron) {
  // event.preventDefault();
  const links = chevron.previousElementSibling;
  if (chevron.classList.contains("toggle")) {
    chevron.classList.remove("toggle");
    links.classList.remove("toggle");
  } else {
    chevron.classList.add("toggle");
    links.classList.add("toggle");
  }
}

function name(params) {
  $(".burger-menu").click(function (event) {
    $(".burger-menu,.burger-menu-nav").toggleClass("active");
  });
}
