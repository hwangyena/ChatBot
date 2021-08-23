function clickCssEvent(){
    let click_btn = document.getElementById("phone_non_click");
    click_btn.classList.add("phone_click");

    window.setTimeout(()=>{
        click_btn.classList.remove("phone_click");
    }, 50);
}

function btn(){
    clickCssEvent();
    window.setTimeout(()=>{
        document.getElementById("number").style.visibility = "visible";
    }, 1950);
}