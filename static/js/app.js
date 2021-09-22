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

/**
 * Account Form animation
 */

const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form");
const indicator = document.getElementById("indicator");
const loginTabBtn = document.getElementById("login-tab-btn");
const regTabBtn = document.getElementById("reg-tab-btn");

loginTabBtn.addEventListener("click", () => {
  loginForm.style.transform = "translateX(300px)";
  regForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0)";
});

regTabBtn.addEventListener("click", () => {
  loginForm.style.transform = "translateX(0)";
  regForm.style.transform = "translateX(0)";
  indicator.style.transform = "translateX(100px)";
});
