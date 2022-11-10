const hiddenElements = document.querySelectorAll(".container");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebarMenu = document.getElementById("main-menu");
const userEmail = localStorage.getItem("Email");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

hamburgerMenu.addEventListener("click", (e) => {
  console.log(e.target);
  sidebarMenu.style.visibility = "visible";
  sidebarMenu.style.left = "0";
});
document.getElementById("close-menu-btn").addEventListener("click", () => {
  sidebarMenu.style.visibility = "hidden";
  sidebarMenu.style.left = "-250px";
});

if (userEmail) {
  document.getElementById("user").style.display = "block";
  document.getElementById("user").innerHTML = userEmail;
  document.getElementById("user").style.textDecoration = "none";
  document.getElementById("loginRegister").style.display = "none";
} else {
  document.getElementById("user").style.display = "none";
  document.getElementById("loginRegister").style.display = "block";
}
