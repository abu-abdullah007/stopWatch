let hours = 0;
let minutes = 0;
let seconds = 0;
let stopTime = true;

let display = document.querySelector('#display');

const startTime = () =>{
    if(stopTime == true){
        stopTime = false;
        timerCycle();
    }
}

const pauseTime = () =>{
    if(stopTime == false){
        stopTime = true;
    }
}

const resetTime = () =>{
    stopTime = true;
    display.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
}

const timerCycle = () =>{
    if(stopTime == false){
        seconds = parseInt(seconds);
        minutes = parseInt(minutes);
        hours = parseInt(hours);

        seconds = seconds + 1;

        if(seconds == 60){
            minutes = minutes + 1;
            seconds = 0;
        }

        if(minutes == 60){
            hours = hours + 1;
            minutes = 0;
            seconds = 0;
        }

        if(seconds < 10){
            seconds = "0" + seconds;
        }

        if(minutes < 10){
            minutes = "0" + minutes;
        }

        if(hours < 10){
            hours = "0" + hours;
        }
        display.innerHTML = hours + ":" + minutes + ":" + seconds;

        setTimeout("timerCycle()",1000);
    }
}
