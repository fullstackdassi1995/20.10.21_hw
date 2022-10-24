const reshima = []
function pushActionButton() {
let number = document.getElementById('number_id').value

if (number > 0){
    reshima.push(number)
}
if (number < 0){
    reshima.unshift(number)
}
if (number == 0){
    for (let mone = reshima.length ; mone >= 0 ; mone--){
        document.getElementById('reshima').value = reshima.shift()
    }
}
document.getElementById('reshima').innerHTML = reshima

}
let mis = 0
function myFunction() {
 
    let mispar = document.getElementById('number2_id').value;
    for (mone = reshima.length-1 ; mone > 0 ; mone--)
        if (reshima[mone] == mispar  ){
        mis++
        }
        document.getElementById('reshima').innerHTML = mis
}
