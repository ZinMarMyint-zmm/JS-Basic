//window(BOM)

//window input text
// let x = window.prompt("What is your name?");


// //window output text
// window.alert(x);

// console.log(x);

//yes or no
//let x = window.confirm("စားပြီးပြီလား");

//document(DOM)
//document.write(`<h1>${x ? "စားပြီးပါပြီ":"မစားရသေးပါဘူး"}</h1>`);
// document.getElementById("header");
// <h1 id=​"header">​Min Ga Lar Par​</h1>​
// let x = document.getElementById("header");
// undefined
// x
// <h1 id=​"header">​Min Ga Lar Par​</h1>​
// x.innerHTML
// 'Min Ga Lar Par'
// x.innerText
// 'Min Ga Lar Par'
// x.innerText="မင်ဂလာပါ";
// 'မင်ဂလာပါ'
// x.innerText="Good Morning";
// 'Good Morning

// let inputText = window.prompt("Say something");
// document.getElementById("header").innerText=inputText;

//input from window-> outppt from document
//၁.input တောင်း
//၂.စာရေး ok buttonနှိပ်
//၃.h1 မှာရေးလိုက်တဲ့စာသားကိုထည့်ပေးလိုက်တယ်


//selet element
let i = document.getElementById("inputText");
let h = document.getElementById("header");

function changeHeader(){
    //get text from input
    let text = i.value;

    //set text to header
    h.innerText=text;
}

// document.getElementById("list");
// <ul id=​"list">​…​</ul>​<li class=​"List-item">​…​</li>​<li class=​"List-item">​…​</li>​<li class=​"List-item">​…​</li>​<li class=​"List-item">​…​</li>​</ul>​
// let u = document.getElementById("list");
// undefined
// u
// <ul id=​"list">​…​</ul>​
// u.innerHTML
// '\n        <li class="List-item">Apple</li>\n        <li class="List-item">Orange</li>\n        <li class="List-item">Mango</li>\n        <li class="List-item">Banana</li>\n    '
// u.innerText
// 'Apple\nOrange\nMango\nBanana'