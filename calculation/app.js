let a = document.getElementById("a");
let b = document.getElementById("b");

function calc(){
    document.getElementById("answer").innerText = a.valueAsNumber + b.valueAsNumber;
    a.value = b.value ="";
}