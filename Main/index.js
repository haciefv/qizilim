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


document.getElementById("detailed-search").addEventListener("click",filterShower)

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
  

  // document.getElementById("follow-button-svg").style.display="block"


}

let followButton = document.getElementById("follow-button")
followButton.addEventListener("click", followReaction)



var swiper = new Swiper(".mySwiper", {
    
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade:"true",
  gragCursor:"true",
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var menuButton = document.querySelector('.menu-button');
var openMenu = function () {
  swiper.slidePrev();
};
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart: function () {
      var slider = this;
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross');
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true);
      } else {
        menuButton.classList.remove('cross');
      }
    },
    slideChangeTransitionEnd: function () {
      var slider = this;
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true);
      }
    },
  },
});



// let i=0

function showAll(){
// document.querySelector(".disabled-ads").style.display="block"
// document.getElementById("show-all-button").style.display="none"
//  showAllDiv.style.display="none"
 console.log("okay")
 var buttons = document.getElementsByClassName('disabled-ads');
 
for(let i=0; i<buttons.length; i++){
    // buttons[i].style.backgroundColor="yellow"
    // buttons[i].classList.toggle("disabled-ads")
    // buttons[i].classList.add(`${i}`)
    buttons[i].style.display="block";
    console.log(i)
}
console.log(buttons.length)
console.log(buttons)

}
window.onload = ( ) => {
  showAll()
}
// 

const closedBtn = document.getElementById("close-menu-btn");
const openBtn = document.querySelector(".menu-icon");
const menu = document.getElementById("main-menu");

closedBtn.addEventListener("click", function () {
  menu.style.left = "-100%";
});
openBtn.addEventListener("click", function () {
  menu.style.left = "0";
});
// shop checkbox registrartion
function shopInfoDetails() {
  // Get the checkbox
  var checkBox = document.getElementById("shopCheckbox");
  // Get the output text
  var text = document.getElementById("shopInfoRegister");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  console.log("sadasd")
}