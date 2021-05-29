let indexActive = 0
let lengthSlide = 7

let elmNavLeft = document.getElementById("nav-left") 
let elmNavRight = document.getElementById("nav-right") 

let elmFirstSlideItem = document.querySelector(".portfolio__carousel--content .item")
let elmSlideDots = document.querySelectorAll(".portfolio__dots .dot")
const widthSlideItem = elmFirstSlideItem.offsetWidth

elmNavRight.addEventListener("click", () =>{
    if(indexActive === lengthSlide - 1){
        indexActive = 0
    }else{
        indexActive++
    }   

    setPosition()
    setActiveDot()
})

elmNavLeft.addEventListener("click", () =>{
    if(indexActive === 0){
        indexActive = lengthSlide - 1
    }else{
        indexActive--
    }  

    setPosition()
    setActiveDot()
})

function setPosition(){
    elmFirstSlideItem.style.marginLeft = 
    `-${indexActive * widthSlideItem + (indexActive ) * 20}` + "px"
}

function setActiveDot(){
    for(let item of elmSlideDots){
        item.classList.remove('active')
    }
    elmSlideDots[indexActive].classList.add("active")
}