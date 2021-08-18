let idArray = ['y','e','s','m','e'];
let position = 0;

function showId(){
    if(position>=idArray.length) return;
    
    document.getElementById("id_section").innerText += idArray[position];
    position++;
}