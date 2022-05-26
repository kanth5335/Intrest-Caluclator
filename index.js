function caluclate(){
let P = document.getElementById("principle").value
let T = document.getElementById("time").value
let R = document.getElementById("rate").value

let simpleInt = parseInt((P*T*R)/100);
let compoundInt = parseInt(P) + parseInt(simpleInt);

document.getElementById("sim").innerHTML=simpleInt;
document.getElementById("com").innerHTML=compoundInt;

}