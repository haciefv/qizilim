const userEmail = localStorage.getItem("Email");
if (userEmail) {
  document.getElementById("user").style.display = "block";
  document.getElementById("user").innerHTML = userEmail;
  document.getElementById("user").style.textDecoration = "none";
  document.getElementById("loginRegister").style.display = "none";
} else {
  document.getElementById("user").style.display = "none";
  document.getElementById("loginRegister").style.display = "block";
}

function filterShower() {
  coFilters = document.getElementById("filter-area")
  let disp = getComputedStyle(coFilters).display
  // .classList
  // coFilters.toggle("filter-block")
  // console.log("AS")

  if (disp=="block"){
      document.getElementById("filter-area").style.transitionDuration="0.4s"
      document.getElementById("filter-area").style.display="none"
  }
  else{
      document.getElementById("filter-area").style.display="block"

  }

}



document.querySelector("#main-menu #detailed-search").addEventListener("click",filterShower)

function followReaction(){
  document.getElementById("follow-button").classList.toggle("follow-button-buton-followed")
  document.getElementById("follow-button").classList.toggle("follow-button-buton")
  // followButton.style.background="#FFFFFF"
  // followButton.style.color="#5292e7"
  // followButton.style.border="1px solid #5292e7 "
  let countFollower=Number(document.getElementById("follower-counter").textContent)
  // console.log(countFollower)
  // console.log(countFollower)
  if (document.getElementById("follow-button").classList[0]=="follow-button-buton-followed"){
    followButton.innerHTML='Followed'
    countFollower+=1
  }
  else{
    countFollower-=1
    followButton.innerHTML='Follow'
  }
  document.getElementById("follower-counter").innerHTML=countFollower
  
}


const hiddenElements = document.querySelectorAll('.container');
const loadings = document.querySelectorAll('.loading');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
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
