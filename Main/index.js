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


  prob = document.getElementsByClassName("prob").textContent
if(prob=="585°(14K)"){
  prob.style.backgroundColor="red"
  console.log("hsda")
  console.log(prob+"ds")

}
else{
  console.log(prob)
}


var div=document.createElement("div")
div.className="vip-products-div"
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
document.getElementById("show-all-button").addEventListener("click",showAll)
// showAllBtn.addEventListener("click",showAll)
// 



