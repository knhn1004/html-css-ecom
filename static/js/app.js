/**
 * Menu Item RWD
 */
const menuItems = document.getElementById("menu-items");
menuItems.style.maxHeight = "0px";

const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  console.log("menu toggled!");
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else if (menuItems.style.maxHeight === "200px") {
    menuItems.style.maxHeight = "0px";
  }
});

/**
 * Product Gallery
 */
const productImage = document.getElementById("product-img");
const smallImages = document.querySelectorAll(".small-img");
smallImages.forEach((i) => {
  i.addEventListener("click", () => {
    productImage.src = i.src;
  });
});
