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

let minus = document.querySelector("#minus")
minus.addEventListener('click', function () {
    counter.innerText--
})
let likes = {}
let heart = document.querySelector("#heart")
heart.addEventListener('click', function () {
    let currentCount = counter.innerText
    if (likes[currentCount]) {
        likes[currentCount] += 1
    } else {
        likes[currentCount] = 1
    }
  likingIt() 
})
let likeList = document.querySelector('.likes')


function likingIt() {
    likeList.innerHTML = ""
    for (var key in likes) {
        let number = key
        let numberOfLikes = likes[key]
        let li = `<li>The number ${number} was liked ${numberOfLikes} times!</li>`
        document.querySelector(".likes").innerHTML += li
    }
}


