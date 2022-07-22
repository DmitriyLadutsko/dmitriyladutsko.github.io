$(function () {
  displayDresses();
});

function displayDresses() {
  const drss = getDressesFromStore();
  const dressesContainer = document.getElementsByClassName("cart_container")[0];
  drss.forEach((dress) => {
    if (dress.checked) {
      // --------define product elements----------
      const product = document.createElement("div");
      const img = document.createElement("img");
      const productWrapper = document.createElement("div");
      const title = document.createElement("div");
      const size = document.createElement("div");
      const sizeSpan = document.createElement("span");
      const color = document.createElement("div");
      const colorSpan = document.createElement("span");
      const removeButton = document.createElement("div");
      const price = document.createElement("div");
      const quantity = document.createElement("div");
      const quantityMinus = document.createElement("span");
      const quantityPlus = document.createElement("span");
      const totalPrice = document.createElement("div");
      // --------end of product elements defining---------

      // ---------define dress's parameters---------
      const dressId = dress.id;
      let dressDescription = dress.description;
      let dressSize = dress.size;
      let dressColor = dress.color;
      const dressPrice = dress.price;

      // --------populate product wrapper---------
      productWrapper.className = "product_desc_wrapper";
      title.className = "product_title";
      size.className = "product_size";
      size.innerText = "size";
      color.className = "product_color";
      color.innerText = "color";
      removeButton.className = "remove";
      removeButton.innerText = "Remove";

      if (!dressDescription) {
        dressDescription = "No description";
      }
      title.innerHTML = dressDescription;
      sizeSpan.className = "select_size";
      if (!dressSize) {
        dressSize = "N/A";
      }
      sizeSpan.innerHTML = dressSize;
      size.appendChild(sizeSpan);
      colorSpan.className = "select_colour";
      if (!dressColor) {
        dressColor = "N/A";
      }
      colorSpan.innerHTML = dressColor;
      color.appendChild(colorSpan);
      productWrapper.appendChild(title);
      productWrapper.appendChild(size);
      productWrapper.appendChild(color);
      productWrapper.appendChild(removeButton);
      // -------end of product wrapper population---------

      // -----price---------
      price.className = "cart_price";
      price.innerHTML = dressPrice;

      // --------quantity--------
      quantity.className = "select_quantity";
      quantityMinus.className = "minus";
      quantityPlus.className = "plus";
      quantityMinus.innerHTML = "-";
      quantityPlus.innerHTML = "+";
      // quantityPlus.onclick(() => addDressToTotal(dressId))
      quantity.appendChild(quantityMinus);
      quantity.appendChild(document.createTextNode(" 1 "));
      quantity.appendChild(quantityPlus);

      // --------total price--------
      totalPrice.className = "total_price_of_product";
      totalPrice.innerHTML = dressPrice + " PLN";

      // -------final product population step--------
      product.className = `product product-${dressId}`;
      img.setAttribute("src", `../images/cart_img/cart_img_${dressId}.jpg`);
      img.setAttribute("alt", "dress");
      product.appendChild(img);
      product.appendChild(productWrapper);
      product.appendChild(price);
      product.appendChild(quantity);
      product.appendChild(totalPrice);

      // --------provide product to container--------
      dressesContainer.insertBefore(
        product,
        document.getElementsByClassName("cart_container_line_bottom")[0]
      );
    }
  });
}

function addDressToTotal(dressId) {
  const product = document.getElementsByClassName(`product-${dressId}`)[0];
  const productElements = product.children;
  let price;
  productElements.forEach((el) => {
    if (el.classList.contains("cart_price")) {
      price = el.innerHTML;
      return;
    }
  });
  if (price) {
    price = Number.parseInt(price);
  }
}
