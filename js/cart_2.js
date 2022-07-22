document.getElementById("tab1").onclick = function () {
  document.getElementById("basket_title_text").innerText = "Cart";
  document.getElementById("content1").className = "visible";
  document.getElementById("content2").className = "unvisible";
  document.getElementById("content3").className = "unvisible";
  document.getElementById("content4").className = "unvisible";
  document.getElementById("content5").className = "unvisible";
  document.getElementById("container_product_page_also_like").hidden = false;
};

document.getElementById("tab2").onclick = function (hiddenAlsoLike) {
  document.getElementById("basket_title_text").innerText = "Your Date";
  document.getElementById("content2").className = "visible";
  document.getElementById("content1").className = "unvisible";
  document.getElementById("content3").className = "unvisible";
  document.getElementById("content4").className = "unvisible";
  document.getElementById("content5").className = "unvisible";
  document.getElementById("container_product_page_also_like").hidden = true;
};

document.getElementById("tab3").onclick = function () {
  document.getElementById("basket_title_text").innerText = "Shipping";
  document.getElementById("content1").className = "unvisible";
  document.getElementById("content2").className = "unvisible";
  document.getElementById("content3").className = "visible";
  document.getElementById("content4").className = "unvisible";
  document.getElementById("content5").className = "unvisible";
  document.getElementById("container_product_page_also_like").hidden = true;
};
document.getElementById("tab4").onclick = function () {
  document.getElementById("basket_title_text").innerText = "Verification";
  document.getElementById("content4").className = "visible";
  document.getElementById("content1").className = "unvisible";
  document.getElementById("content2").className = "unvisible";
  document.getElementById("content3").className = "unvisible";
  document.getElementById("content5").className = "unvisible";
  document.getElementById("container_product_page_also_like").hidden = true;
};
document.getElementById("tab5").onclick = function () {
  document.getElementById("basket_title_text").innerText = "Finish";
  document.getElementById("content5").className = "visible";
  document.getElementById("content1").className = "unvisible";
  document.getElementById("content2").className = "unvisible";
  document.getElementById("content3").className = "unvisible";
  document.getElementById("content4").className = "unvisible";
  document.getElementById("container_product_page_also_like").hidden = true;
};

const cartMenu = document.getElementsByClassName("label_tabs");
for (let cartItem of cartMenu) {
  cartItem.addEventListener("click", (event) => {
    for (let cartItem of cartMenu) {
      if (cartItem.classList.contains("active_tab")) {
        cartItem.classList.remove("active_tab");
      }
    }
    cartItem.classList.add("active_tab");
  });
}
