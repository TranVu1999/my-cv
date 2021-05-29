let textIntro = document.getElementById("intro")

let showFullname = true
let isIncreaseFullname = true
let isIncreaseDescJob = true

let indexTextFullname = 0
let indexTextDescJob = 0

let fullnameIntro = "I'm Tran Le Anh Vu"
let descJobIntro = "I'm a Front-End Developer"
let fullnameArr = ["T", "r", "a", "n", " ", "L", "e", " ", "A", "n", "h", " ", "V", "u"]
let descJobArr = ["a", " ", "F", "r", "o", "n", "t", "-", "E", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]

let lengthFullnameArr = fullnameArr.length
let lengthDescJobArr = descJobArr.length

var myTimerText = setInterval(addText, 200);

function addText() {
    if(showFullname){
        if(isIncreaseFullname){
            textIntro.innerHTML += fullnameArr[indexTextFullname]
            indexTextFullname++
        }else{
            indexTextFullname-- 
            textIntro.innerHTML = fullnameIntro.slice(0, indexTextFullname + 4)
        }

        if(indexTextFullname === lengthFullnameArr){
            isIncreaseFullname = false
        }else if(indexTextFullname === 0){
            isIncreaseFullname = true
            showFullname = false
        }
    }else {
        if(isIncreaseDescJob){
            textIntro.innerHTML += descJobArr[indexTextDescJob]
            indexTextDescJob++
        }else{
            indexTextDescJob-- 
            textIntro.innerHTML = descJobIntro.slice(0, indexTextDescJob + 4)
        }

        if(indexTextDescJob === lengthDescJobArr){
            isIncreaseDescJob = false
        }else if(indexTextDescJob === 0){
            isIncreaseDescJob = true
            showFullname = true
        }
    }
    


    
}

function stopAddText() {
  clearInterval(myTimerText);
}