const hamburgerMenu = document.getElementById("hamburger-menu");
const radiosAdjust = document.querySelectorAll(".adjust");
const AdjustText = document.getElementById("adjust");
const colors = document.querySelectorAll(".color");
const selectedColorText = document.getElementById("selected_color_text");
const sidebarMenu = document.getElementById("main-menu");
const searchButton = document.querySelector(".search");
const closeSearchBtn = document.querySelector(".close-search");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    selectedColorText.innerHTML = color.nextElementSibling.innerHTML;
  });
});
let multiAdjustText = [];
radiosAdjust.forEach((radioAdjust) => {
  radioAdjust.addEventListener("click", (e) => {
    if (e.target.checked) {
      multiAdjustText.push(Number(radioAdjust.nextElementSibling.innerHTML));
      AdjustText.innerHTML = multiAdjustText.toString();
      console.log(multiAdjustText);
    } else {
      const filterAdjust = multiAdjustText.filter(
        (num) => num != radioAdjust.nextElementSibling.innerHTML
      );
      multiAdjustText = filterAdjust;
      AdjustText.innerHTML = multiAdjustText.toString();
    }
  });
});
closeSearchBtn.addEventListener(
  "click",
  () => (document.querySelector(".search-container").style.top = "-100%")
);
searchButton.addEventListener(
  "click",
  () => (document.querySelector(".search-container").style.top = "0")
);
hamburgerMenu.addEventListener("click", (e) => {
  console.log(e.target);
  sidebarMenu.style.visibility = "visible";
  sidebarMenu.style.left = "0";
});
document.getElementById("close-menu-btn").addEventListener("click", () => {
  sidebarMenu.style.visibility = "hidden";
  sidebarMenu.style.left = "-250px";
});

