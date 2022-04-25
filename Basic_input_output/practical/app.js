//select
let width = document.getElementById("width");
let breadth = document.getElementById("breadth");
let result = document.getElementById("result");
let list = document.getElementById("list");

function calcArea(){

    if(width.value == 0 || breadth.value == 0){
        alert("Please fill width and breadth.");
    }else{
        let area = width.value * breadth.value;
        result.innerHTML= `${width.value}ft x ${breadth.value}ft = ${area} ft<sup>2<sup>`;
        width.value="";
        breadth.value="";
    }
    

}

function addList(){

    if(result.innerHTML == ""){
        alert("Result is empty.")
    }else{
        list.innerHTML += `<li>${result.innerHTML}</li>`
        clearResult();
    }
    
}

function clearResult(){
    result.innerHTML="";
}