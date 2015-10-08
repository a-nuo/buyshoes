function makeCartScrollNicely() {
  var cart = document.querySelector(".cart");
  Ps.initialize(cart);

  var products = document.querySelector(".site__content");
   Ps.initialize(products);
}

window.onload = function() {
	makeCartScrollNicely();
	console.log("page loaded");

	var $toggle = document.querySelector(".site__right-sidebar-toggle");
	$toggle.addEventListener("click",function() {
	  document.body.classList.toggle("js-show-right-sidebar");
	});
}