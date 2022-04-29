
const currentTime = new Date()

let currentHours = currentTime.getHours()
if(currentHours > 12){
    currentHours -= 12
}

const currentMinutes = currentTime.getMinutes()
const currentSeconds = currentTime.getSeconds()

let secondDegree = (360/60) * currentSeconds;
let minuteDegree = (360/60) * currentMinutes;
let hourDegree = (360/12) * currentHours;

const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

setInterval(function(){
    // interval of increment for each hand
    secondDegree += 6;
    minuteDegree += 0.1;
    hourDegree += 0.0016666666
    // rotates each hand
    secondHand.style.transform = "rotate(" + secondDegree + "deg)"
    minuteHand.style.transform = "rotate(" + minuteDegree + "deg)"
    hourHand.style.transform = "rotate(" + hourDegree + "deg)"
} ,1000 )

setInterval(function(){
    const currentTime = new Date()
    const digitalTime = document.getElementById('digitalTime')
    digitalTime.innerText = currentTime

},1000)

