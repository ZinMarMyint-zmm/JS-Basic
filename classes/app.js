// let myself = {
//     //properties
//     name: "zin mar myint",
//     age: 23,
//     skill: "Web Development",
//     //methods
//     teach(){
//         return this.name+" teach "+this.skill;
//     },
//     showBdYear(){
//         return `${this.name} was borned in ${2022-this.age}`;
//     }
// }
// class Myself{

//     constructor(x,y){
//         // console.log("I am constructor ---"+x+"---"+y)
//         this.name = x;
//     }
//     //properties
    
//     age = 23;
//     skill = "Web Development";

//     //methods
//     teach(){
//         return this.name+" can teach";
//     }
//     showBdYear(){
//         return "I was borned in 1999."
//     }
// }
// //instantiate {class-> obj}

// let myself = new Myself("zin mar myint","ccc");
// console.log(myself.name);
// console.log(myself.skill);

class Student{
    constructor(name,age,phone){
        this.name=name;
        this.age=age;
        this.phone=phone;
    }
    learn(){
        return this.name+" can learn.";
    }
}
let s1 = new Student("zin mar myint",23,09549521);
let s2 = new Student("su su",23,09654231231);
let s3 = new Student("maymi",23,099798451);
let s4 = new Student("aye aye",23,091449622);