const userEmail = localStorage.getItem("Email");
const twitterWrapper = document.querySelector(".sbx-twitter__wrapper");
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebarMenu = document.getElementById("main-menu");
const radiosAdjust = document.querySelectorAll(".adjust");
const AdjustText = document.getElementById("adjust");
const colors = document.querySelectorAll(".color");
const selectedColorText = document.getElementById("selected_color_text");
const typeDetails = document.querySelector(".type");
const diamondDetails = document.querySelector('.diamond');
const locDetails = document.querySelector(".loc");
const deliveryDetails = document.querySelector(".delivery");
const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("search_button");

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

searchBtn.addEventListener("click", () => {
if(searchInput.value.length !== 0) {
     location.pathname = "../pages/searchResult/search-result.html"
}
  
})
let multiColorsText = [];

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    if(e.target.checked){
      multiColorsText.push(color.nextElementSibling.innerHTML);
      selectedColorText.innerHTML = multiColorsText.toString()
    }else{
      const filterColors = multiColorsText.filter((num) => num != color.nextElementSibling.innerHTML)
      multiColorsText = filterColors;
      selectedColorText.innerHTML = multiColorsText.toString();
    }
  });
});
let multiAdjustText = [];
radiosAdjust.forEach((radioAdjust) => {
  radioAdjust.addEventListener("click", (e) => {
    if (e.target.checked) {
      multiAdjustText.push(Number(radioAdjust.nextElementSibling.innerHTML));
      AdjustText.innerHTML = multiAdjustText.toString();
    } else {
      const filterAdjust = multiAdjustText.filter(
        (num) => num != radioAdjust.nextElementSibling.innerHTML
      );
      multiAdjustText = filterAdjust;
      AdjustText.innerHTML = multiAdjustText.toString();
    }
  });
});

typeDetails.querySelectorAll("ul li").forEach(li =>  {
  li.addEventListener('click', () => {
    typeDetails.removeAttribute("open")
  })
})

diamondDetails.querySelectorAll("ul li").forEach(li =>  {
  li.addEventListener('click', () => {
    diamondDetails.removeAttribute("open")
  })
})
locDetails.querySelectorAll("ul li").forEach(li =>  {
  li.addEventListener('click', () => {
    locDetails.removeAttribute("open")
  })
})
deliveryDetails.querySelectorAll("ul li").forEach(li =>  {
  li.addEventListener('click', () => {
    deliveryDetails.removeAttribute("open")
  })
})

document.querySelector("#main-menu #detailed-search").addEventListener("click", filterShower)

function followReaction() {
  document.getElementById("follow-button").classList.toggle("follow-button-buton-followed")
  document.getElementById("follow-button").classList.toggle("follow-button-buton")
  const followButton= document.getElementById("follow-button")
  let countFollower = Number(document.getElementById("follower-counter").textContent)
  if (document.getElementById("follow-button").classList[0] == "follow-button-buton-followed") {
    followButton.innerHTML = 'Followed'
    countFollower += 1
    console.log(countFollower)
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
  loop:true,
  spaceBetween: 30,
  slidesPerView: 5,
  freeMode: false,
  watchSlidesProgress: false,
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

$(document).ready(function () {
  var sync1 = $("#banner");

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
        '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  function syncPosition(el) {
 var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
  }
});