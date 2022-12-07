const hamburgerMenu = document.getElementById("hamburger-menu");
const radiosAdjust = document.querySelectorAll(".adjust");
const sidebarMenu = document.getElementById("main-menu");
const AdjustText = document.getElementById("adjust");
const colors = document.querySelectorAll(".color");
const selectedColorText = document.getElementById("selected_color_text");
const logoutBtn = document.getElementById('log_out');

let email = localStorage.getItem('Email')
console.log(email)
if(!email) {
  document.getElementById("info_user").style.display = "none"
}else {
  document.getElementById('info_user').style.display = "flex"
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('Email')
  window.location.reload()
  document.querySelector('.user_info').style.display = "none"
})
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
hamburgerMenu.addEventListener("click", (e) => {
  console.log(e.target);
  sidebarMenu.style.visibility = "visible";
  sidebarMenu.style.left = "0";
});
document.getElementById("close-menu-btn").addEventListener("click", () => {
  sidebarMenu.style.visibility = "hidden";
  sidebarMenu.style.left = "-250px";
});
