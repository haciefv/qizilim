const searchButton = document.querySelector(".search");
const closeSearchBtn = document.querySelector(".close-search");
closeSearchBtn.addEventListener(
  "click",
  () => (document.querySelector(".search-container").style.top = "-1000%")
);
searchButton.addEventListener(
  "click",
  () => (document.querySelector(".search-container").style.top = "0")
);