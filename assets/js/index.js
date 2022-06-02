const hamburger = document.querySelector("#hamburger");
const hamburgerMenu = document.querySelector(".menu-m");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})


/*---------------------------------------- */
const cartClick = [...document.querySelectorAll(".cart")];
const cartMenu = document.querySelector(".cart-menu");
const closeCart = document.querySelector(".close-cart");

const closeCartAll = () => {
    cartMenu.classList.remove("active")
    hamburgerMenu.classList.remove("active")
    hamburger.style.zIndex = "50";

}

cartClick.forEach(elem => {
    elem.addEventListener("click", () => {
        cartMenu.classList.add("active");
        hamburger.style.zIndex = "-2"
    })
});
closeCart.addEventListener("click", closeCartAll)


/*---------------------------------------- */
const overlayCloseCart = document.querySelector(".overlay-cart")
const overlayCloseMenu = document.querySelector(".overlay-menu")
overlayCloseCart.addEventListener("click", closeCartAll)
overlayCloseMenu.addEventListener("click", closeCartAll)



