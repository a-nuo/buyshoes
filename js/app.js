function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);

  var products = document.querySelector(".site__content");
   Ps.initialize(products);
}

window.onload = function() {
	makeCartScrollNicely();
	console.log("page loaded");
}