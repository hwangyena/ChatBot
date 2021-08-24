const quokaChat = {
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
    "뭐 좋아해?",
    "좋아하는 거",
    "취미"
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

    console.log(quokaChat[answer]);
    textShow(quokaChat[answer]);
}
