let hours = 0o0;
let minutes = 0o0;
let seconds = 0o0;
let milliseconds = 0o0;
let interval;


const hoursContainer = document.getElementById("hours");
const minutesContainer = document.getElementById("minutes");
const secondsContainer = document.getElementById("seconds");
const millisecondsContainer = document.getElementById("milliseconds");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

const startTimer = () =>{
    clearInterval(interval);
    interval = setInterval(startWatch, 10);
}

const pauseTimer = () =>{
    clearInterval(interval);
}

const resetTimer = () =>{
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    millisecondsContainer.innerHTML = "00";
    secondsContainer.innerHTML = "00";
    minutesContainer.innerHTML = "00";
    hoursContainer.innerHTML = "00";
    clearInterval(interval);
}

function startWatch(){
    milliseconds++;
    if(milliseconds < 9){
        millisecondsContainer.innerHTML = `0${milliseconds}`;
    }
    else if(milliseconds < 99){
        milliseconds = 0;
        millisecondsContainer.innerHTML = "00";
        seconds++;
    }
    else{
        millisecondsContainer.innerHTML = milliseconds;
    }


    if(seconds < 10){
        secondsContainer.innerHTML = `0${seconds}`;
    }
    else if(seconds < 59){
        minutes++;
        seconds = 0;
        secondsContainer.innerHTML = "00";
    }
    else{
        secondsContainer.innerHTML = seconds;
    }


    if(minutes < 10){
        minutesContainer.innerHTML = `0${minutes}`;
    }
    else if(minutes > 59){
        hours++;
        minutes = 0;
        minutesContainer.innerHTML = minutes;
    }
    else{
        minutesContainer.innerHTML = minutes;
    }


    if(hours < 10){
        hoursContainer.innerHTML = `0${hours}`;
    }
    else{
        hoursContainer.innerHTML = hours;
    }
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
