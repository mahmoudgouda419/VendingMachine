const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const productsMenu = document.getElementById("products-menu");

menuBtn.addEventListener("click", () => {
    productsMenu.classList.add("open");
});
closeBtn.addEventListener("click", () => {
    productsMenu.classList.remove("open");
})

const productItems = document.querySelectorAll(".product-item");
const productPopup = document.getElementById("productPopup");
const popupTitle = document.getElementById("popupTitle");
const popupClose = document.getElementById("popupClose");

productItems.forEach((item) => {
    item.addEventListener("click", () => {
        popupTitle.textContent = item.textContent;
        productPopup.classList.add("open");
    });
})
popupClose.addEventListener("click", () => {
    productPopup.classList.remove("open");
})

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const sound = new Audio("click.mp3");
        sound.play();
    });
});