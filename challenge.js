let countPaused = false;
const counter = document.querySelector("#counter")

setInterval(function(){
    if (countPaused == false){
        counter.innerText++
    }
}, 1000)

let pause = document.querySelector("#pause")
pause.addEventListener('click', function () {
    if (countPaused == false) {
        countPaused = true
    } else {
      countPaused = false  
    }
})

let plus = document.querySelector("#plus")
plus.addEventListener('click', function () {
    counter.innerText++
})

let minus = document.querySelector("#minus"
minus.addEventListener('click', function () {
    counter.innerText--
})

let heart = document.querySelector("#heart")
heart.addEventListener('click', function () {
    heart.innerText++
})