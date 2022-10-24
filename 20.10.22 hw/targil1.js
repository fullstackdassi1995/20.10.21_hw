let max = 0
function  pushActionButton(){
    let text1 = document.getElementById('text1_id').value
    let text2 = document.getElementById('text2_id').value

    //1
    document.getElementById('reshima_id').innerHTML = text1+text2+text1 + ('<br/>')
    
    //2
    let lengthtext1 = text1.length;
    let lengthtext2 = text2.length;
    max = lengthtext1 > lengthtext2 ? lengthtext1 : lengthtext2;

    for (let mone = 0 ; mone < max ; mone++){
        document.getElementById("text_id").innerHTML += text1[mone]
        document.getElementById('text_id').innerHTML += text2[mone]
    }
    
    //3
    for (let mone = text1.length - 1 ; mone >= 0 ; mone--){
        document.getElementById('reshima_id').innerHTML += text1[mone]
    }
    document.getElementById('reshima_id').innerHTML = ('<br/>')
    //4
    
    document.getElementById('reshima_id').innerHTML += text1[1]+text2[1]

}
