const quokkaChat = {
    0: "무슨 말인지 모르겠어",
    1: "안녕!! 난 쿼카야",
    2: "난 책 읽는걸 좋아해",
    3: "밥 먹는 중!"
}

const userHi = [
    "안녕",
    "안녕!",
    "반가워",
    "안녕하세요"
]

const userHabbit = [
    "취미가 뭐야?",
    "취미가 뭐야",
    "뭐 좋아해?",
    "좋아하는 거",
    "취미",
    "취미?"
]

const userDoing = [
    "뭐하고있어",
    "뭐하고 있어",
    "뭐해?",
    "뭐해",
    "뭐하니"
]

function textShow(str){
    let txt = document.getElementById("answer");
    txt.innerText = str;
}

function changeImg(answer){
    let img = document.getElementById("quokka");
    
    if(answer==0) img.src = "./image/quokka_non_save.png";
    else if(answer==2) img.src = './image/quokka_study.png';
    else if(answer==3) img.src = "./image/quokka_eat.png";
    else img.src = "./image/quokka_basic.png";
}

/*
 * Event Listener 
 */

//chatting event
function chatting(){
    let user = document.getElementById("user_text").value;

    let answer = 0;
    if(user.length === 0){
        alert("message를 입력해주세요!");
        return;
    }
    
    if(userHi.includes(user)) answer = 1;
    else if(userHabbit.includes(user)) answer = 2;
    else if(userDoing.includes(user)) answer = 3;

    console.log(quokkaChat[answer]);
    textShow(quokkaChat[answer]); /*quokka text*/
    changeImg(answer); /*quokka img*/

    inactivityTime(); 
}

// 모드 변경 event 
let mode = 1;
function modeConvert(){
    let modeId = document.getElementById("mode");
    if(mode===1){ //dark mode
        document.body.style.backgroundColor = "#585551";
        modeId.classList.remove("dark");
        modeId.classList.add("light");
    }
    else{//light mode
        document.body.style.backgroundColor = "#d4cac5";
        modeId.classList.remove("light");
        modeId.classList.add("dark");
    }
    mode ^= 1;

    inactivityTime(); 
}

/* Timer Set */
let start = false;
function inactivityTime() {
    var time;
    
    // events
    window.onload = resetTime;
    document.getElementById("quokka").onclick = resetTime;

    function alertUser() {
        document.getElementById("quokka").src = "./image/quokka_timeover.png";
        textShow("나 심심해");
        start = true;
    }

    function resetTime() {
        clearTimeout(time); //실행 취소
        document.getElementById("quokka").src = "./image/quokka_basic.png";
        if(start) textShow("불렀어?!");
        time = setTimeout(alertUser, 1000 * 60); //1 min
    }

};

// run the function
inactivityTime(); 