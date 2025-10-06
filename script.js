const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const cart = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart");
const addButtons = document.querySelectorAll(".add-btn");

let cartArray = [];


addButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const productDiv = e.target.closest(".product");
    const name = productDiv.dataset.name;
    const price = parseFloat(productDiv.dataset.price);
    cartArray.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cartArray.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - $${item.price.toLocaleString()} <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Total: $${total.toLocaleString()}`;
  cartCount.textContent = cartArray.length;
}


function removeItem(index) {
  cartArray.splice(index, 1);
  updateCart();
}


clearCartBtn.addEventListener("click", () => {
  cartArray = [];
  updateCart();
});


cartBtn.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});
