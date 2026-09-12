const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const productsMenu = document.getElementById("products-menu");

menuBtn.addEventListener("click", () => {
    productsMenu.classList.add("open");
});
closeBtn.addEventListener("click", () => {
    productsMenu.classList.remove("open");
})