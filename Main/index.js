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

// let followButton = document.getElementById("follow-button")
// followButton.addEventListener("click", followReaction)


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


// let i=0

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.container');

hiddenElements.forEach(el => observer.observe(el))

// shop checkbox registrartion
function shopInfoDetails() {
  // Get the checkbox
  var checkBox = document.getElementById("shopCheckbox");
  // Get the output text
  

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    document.getElementById("shopInfoRegister").style.display = "block";
  } else {
    document.getElementById("shopInfoRegister").style.display = "none";
  }

}

var selectField = document.getElementById("selectField")
var selectText = document.getElementById("selectText")
var options = document.getElementsByClassName("tm-list-li")

var tmList = document.getElementById("tmListUl")


document.getElementById("selectField").addEventListener("click",function(){
    tmList.classList.toggle("tm-hide")}
)





function tmSelectorExpand(){
  document.getElementById("tmListUl").classList.toggle("tm-hide")

}
function  optionSelector(){
  console.log()
  console.log(this.textContent)
    document.getElementById("selectText").innerText=this.querySelector("p").innerHTML
  }




  