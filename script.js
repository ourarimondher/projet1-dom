// script.js

// Sélectionne tous les produits (les cartes)
var products = document.querySelectorAll(".card");

products.forEach((prod) => {
  let plusBtn = prod.querySelector(".fa-plus-circle");
  let minusBtn = prod.querySelector(".fa-minus-circle");
  let trashBtn = prod.querySelector(".fa-trash-alt");
  let likeBtn = prod.querySelector(".fa-heart");
  let quantity = prod.querySelector(".quantity");

  plusBtn.addEventListener("click", function () {
    let q = parseInt(quantity.textContent);
    q++;
    quantity.textContent = q;
    priceUpdate();
  });

  minusBtn.addEventListener("click", function () {
    let q = parseInt(quantity.textContent);
    if (q > 0) {
      q--;
      quantity.textContent = q;
      priceUpdate();
    }
  });

  trashBtn.addEventListener("click", function () {
    // Supprime la carte du DOM
    prod.remove();
    priceUpdate();
  });

  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("liked");
  });
});

// Met à jour le prix total
function priceUpdate() {
  let total = 0;
  let prods = document.querySelectorAll(".card");
  prods.forEach((prod) => {
    let unitPrice = parseInt(
      prod.querySelector(".unit-price").textContent.replace("$", "").trim()
    );
    let quantity = parseInt(prod.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });
  document.querySelector(".total").textContent = total + " $";
}

// Mise à jour initiale au chargement
priceUpdate();


