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
// Product Page
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
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
var ProductImgMain =document.getElementById("ProductImgMain")
  var smallImg = document.getElementsByClassName("small-prdct-img")
  ProductImgMain.src=smallImg[0].src;
  smallImg[0].onclick = function(){
    smallImg[0].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[0].src;
  }
  smallImg[1].onclick = function(){
    smallImg[1].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[1].src;
  }
  smallImg[2].onclick = function(){
    smallImg[2].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[2].src;
  }
  smallImg[3].onclick = function(){
    smallImg[3].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[3].src;
  }
  smallImg[4].onclick = function(){
    smallImg[4].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[4].src;
  }
  smallImg[5].onclick = function(){
    smallImg[5].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[5].src;
  }
  smallImg[6].onclick = function(){
    smallImg[6].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[6].src;
  }
  smallImg[7].onclick = function(){
    smallImg[7].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[7].src;
  }
  smallImg[8].onclick = function(){
    smallImg[8].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[8].src;
  }
  smallImg[9].onclick = function(){
    smallImg[9].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[9].src;
  }
  smallImg[10].onclick = function(){
    smallImg[10].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[10].src;
  }
  smallImg[11].onclick = function(){
    smallImg[11].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[11].src;
  }
  smallImg[12].onclick = function(){
    smallImg[12].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[12].src;
  }
  smallImg[13].onclick = function(){
    smallImg[13].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[13].src;
  }
  smallImg[14].onclick = function(){
    smallImg[14].style.filter="opacity :100%"
    ProductImgMain.src=smallImg[14].src;
  }
