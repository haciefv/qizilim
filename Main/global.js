const userEmail = localStorage.getItem("Email");
const twitterWrapper = document.querySelector(".sbx-twitter__wrapper");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebarMenu = document.getElementById("main-menu");


if (userEmail) {
  document.getElementById("user").style.display = "block";
  document.getElementById("user").innerHTML = userEmail;
  document.getElementById("user").style.textDecoration = "none";
  document.getElementById("loginRegister").style.display = "none";
  document.getElementById('info_user').style.display = "flex"

} else {
  document.getElementById("user").style.display = "none";
  document.getElementById("loginRegister").style.display = "block";
  document.getElementById("info_user").style.display = "none"

}

hamburgerMenu.addEventListener("click", (e) => {
  console.log(e.target);
  sidebarMenu.style.visibility = "visible";
  sidebarMenu.style.left = "0";
});
document.getElementById("close-menu-btn").addEventListener("click", () => {
  sidebarMenu.style.visibility = "hidden";
  sidebarMenu.style.left = "-250px";
});

const logoutBtn = document.getElementById('log_out');

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('Email')
  window.location.reload()
  document.querySelector('.user_info').style.display = "none"
})

function filterShower() {
  coFilters = document.getElementById("filter-area")
  let disp = getComputedStyle(coFilters).display
  // .classList
  // coFilters.toggle("filter-block")
  // console.log("AS")

  if (disp == "block") {
    document.getElementById("filter-area").style.transitionDuration = "0.4s"
    document.getElementById("filter-area").style.display = "none"
  }
  else {
    document.getElementById("filter-area").style.display = "block"

  }

}
const mediaQuery = window.matchMedia('(max-width: 571px)')

if (mediaQuery.matches) {
  window.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (e.target.id !== "search_button" && e.target.id !== "search_input" && e.target.id !== "reset_button") {
      document.querySelector('.sbx-custom__input').style.width = "0px"
      document.querySelector('.sbx-custom__input').style.paddingLeft = "0px"
    }
  })
  twitterWrapper.addEventListener('click', (event) => {
    console.log(event.target)
    document.querySelector(".sbx-custom__input").style.width = "120px";
    document.querySelector('.sbx-custom__input').style.paddingLeft = "8px"
  })
}


document.querySelector("#main-menu #detailed-search").addEventListener("click", filterShower)

function followReaction() {
  document.getElementById("follow-button").classList.toggle("follow-button-buton-followed")
  document.getElementById("follow-button").classList.toggle("follow-button-buton")
  // followButton.style.background="#FFFFFF"
  // followButton.style.color="#5292e7"
  // followButton.style.border="1px solid #5292e7 "
  let countFollower = Number(document.getElementById("follower-counter").textContent)
  // console.log(countFollower)
  // console.log(countFollower)
  if (document.getElementById("follow-button").classList[0] == "follow-button-buton-followed") {
    followButton.innerHTML = 'Followed'
    countFollower += 1
  }
  else {
    countFollower -= 1
    followButton.innerHTML = 'Follow'
  }
  document.getElementById("follower-counter").innerHTML = countFollower

}


const hiddenElements = document.querySelectorAll('.container');
const loadings = document.querySelectorAll('.loading');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
})

hiddenElements.forEach(el => observer.observe(el));

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiper,
  },

});


function EnableDisableTextBox(diamonCheck) {
  var addDiamondCount = document.getElementById("addDiamondCount");
  addDiamondCount.disabled = diamonCheck.checked ? false : true;
  if (!addDiamondCount.disabled) {
    addDiamondCount.focus();
  }
}
