function filterShower() {
    coFilters = document.getElementById("filter-area")
    let disp = getComputedStyle(coFilters).display

    // .classList
    // coFilters.toggle("filter-block")
    // console.log("AS")
    console.log(coFilters)
    console.log(disp)
    if (disp=="block"){
        document.getElementById("filter-area").style.transitionDuration="0.4s"
        document.getElementById("filter-area").style.display="none"
    }
    else{
        document.getElementById("filter-area").style.display="block"

    }

}
document.getElementById("detailed-search").addEventListener("click",filterShower)