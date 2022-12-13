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
const bannerShopPage = document.querySelector(".banner-shop-page");
const bannerDivs = document.querySelectorAll(".banner-shop-page .banner-div");
const bannerWidth = document.querySelector(".banner-div");
const resultBannerWidth = bannerWidth.clientWidth * (bannerDivs.length - 1)
let sliderWidth = 0;
const lastAnnounContainer = document.querySelector(".last-announ-container")

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
setInterval(() => {

  sliderWidth += bannerWidth.clientWidth;
  if(sliderWidth > resultBannerWidth) {
      sliderWidth = 0;
  }
  console.log(bannerDivs.length - 1)
  bannerShopPage.style.transform = `translateX(-${sliderWidth}px)`
},4000)

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

searchBtn.addEventListener("click", () => {
if(searchInput.value.length !== 0) {
     location.pathname = "../pages/searchResult/search-result.html"
}
  
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
