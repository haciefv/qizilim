const radiosAdjust = document.querySelectorAll(".adjust");
const AdjustText = document.getElementById("adjust");
const colors = document.querySelectorAll(".color");
const selectedColorText = document.getElementById("selected_color_text");
const searchButton = document.querySelector(".search");
const closeSearchBtn = document.querySelector(".close-search");
closeSearchBtn.addEventListener(
  "click",
  () => (document.querySelector(".search-container").style.top = "-100%")
);
searchButton.addEventListener(
  "click",
  () => (document.querySelector(".search-container").style.top = "0")
);
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

document.querySelector(".menu-icon").addEventListener("click", (e) => {
  document.getElementById("main-menu").style.left = "0";
});
document.getElementById("close-menu-btn").addEventListener("click", () => {
  document.getElementById("main-menu").style.left = "-100%";
});
