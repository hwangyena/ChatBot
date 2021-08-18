let hourSection = document.getElementById("hour");
let minSection = document.getElementById("min");
let secSection = document.getElementById("sec");

let hour = 0;
let min = 0;
let sec = 0;

let startTimer;

//타이머 증가
function setTime(){
    sec++;
    if(sec>=60){
        sec = 0;
        min += 1;
    }
    if(min>=60){
        min = 0;
        hour += 1;
    }
    printTime();
}

//타이머 보여주기
function printTime(){
    hourSection.innerText = hour<10 ? '0'+hour : hour;
    minSection.innerText = min<10 ? '0'+min : min;
    secSection.innerText = sec<10 ? '0'+sec : sec;
}

printTime();

//타이머 관련 함수
function start(){
    startTimer = setInterval(setTime, 1000);
}

function stop(){
    clearInterval(startTimer);
}

function reset(){
    sec = 0;
    min = 0;
    hour = 0;
    printTime();
    clearInterval(startTimer);
}