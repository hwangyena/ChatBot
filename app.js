const __button = document.querySelectorAll("input");
const mo = document.querySelector(".mo");
const gak = document.querySelector(".gak");
const ko = document.querySelector(".ko");

let toggle_mo = 1;
let toggle_gak = 1;
let toggle_ko = 1;

__button.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        //console.log(btn.className);

        if(btn.className === "mo"){
            if(toggle_mo)  mo.innerHTML += "처럼이니";
            else  mo.innerHTML = "";
            toggle_mo ^= 1;
        }
        if(btn.className === "gak"){
            if(toggle_gak)   gak.innerHTML += "잡고 열심히 하면"
            else gak.innerHTML = "";
            toggle_gak ^= 1;
        }
        if(btn.className === "ko"){
            if(toggle_ko)  ko.innerHTML += "린이 탈출이다!"
            else ko.innerHTML = "";
            toggle_ko ^= 1;
        }


    });
});