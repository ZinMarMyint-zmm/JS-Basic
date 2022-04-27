function run(e){
    console.log(e);
    console.log("I");
    console.log("am");
    console.log("run.");
}

// document.querySelector("#name").addEventListener("focus",function(){
//     console.log("I'm focus");
// });
// document.querySelector("#name").addEventListener("blur",function(){
//     console.log("I'm blur");
// });
// document.querySelector("#name").addEventListener("change",function(){
//     console.log("I'm change");
// });

// document.getElementById("testLink").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(this.getAttribute("href"));
//     console.log(this.innerText);
//     console.log(e);
// })

// document.getElementById("name").addEventListener("keyup",function(){
//     console.log(this.value);
// })
// 
// document.querySelector("ul").addEventListener("click",function(e){
// //     console.log(e.target.innerText);});
//property
// document.querySelector("#testBtn").onclick=function(){
//     console.log(this.innerText);
//     run();
// }

// document.addEventListener("keyup",function(e){
//     if(e.keyCode==13){
//         run();
//     }
//     console.log(e.key,e.keyCode);
// });

// document.addEventListener("keypress",function(){
//     console.log("I'm keypress.")
// });
//method
// document.querySelector("#testBtn").addEventListener("click",function(){
//     run();
// });
// document.querySelector("select").addEventListener("change",function(){
//     console.log(this.value);
// })

// document.querySelector("[type='file']").addEventListener("change",function(){
//     console.log(this.files);
// })

// document.getElementById("testForm").addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log("I'm submit.");
// });

// window.onload=function(){
//     console.log("I'm window onload event.");
// }
// console.log("hello");

document.addEventListener("mousemove",function(e){
    console.log(e.clientX,e.clientY);
})

// window.addEventListener("scroll",function(){
//     console.log(this.scrollY);
//     console.log("U scroll");
// })
