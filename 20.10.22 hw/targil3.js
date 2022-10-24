
function clickmeButton(){
const colori = document.getElementById('options').value

if (colori == 'green'){
    document.getElementById("text_id").style.color = "green";
}
if (colori == 'red'){
    document.getElementById("text_id").style.color = "red";
}
if (colori == 'yellow'){
    document.getElementById("text_id").style.color = "yellow";
}
if (colori == 'orange'){
    document.getElementById("text_id").style.color = "rbg(200,0,0)";
}

}


