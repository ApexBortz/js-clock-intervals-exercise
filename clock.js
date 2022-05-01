// gets new Date and stores it as currentTime
const currentTime = new Date()

let currentHours = currentTime.getHours()
if(currentHours > 12){
    currentHours -= 12
}

const currentMinutes = currentTime.getMinutes()
const currentSeconds = currentTime.getSeconds()

// convert the seconds, mins, hours, into degrees
// values that change throughout the program
let secondDegree = (360/60) * currentSeconds;
let minuteDegree = (360/60) * currentMinutes;
let hourDegree = (360/12) * currentHours;

// DOM selectors - get each hand image by Id 
const secondHand = document.getElementById('second')
const minuteHand = document.getElementById('minute')
const hourHand = document.getElementById('hour')

// program function - setInterval function
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

// interval function for the current time
setInterval(function(){
    // 
    const currentTime = new Date()
    //
    const digitalTime = document.getElementById('digitalTime')
    // display the time text
    digitalTime.innerText = currentTime

},1000)
// ^ refreshes the interval to check the time every second
