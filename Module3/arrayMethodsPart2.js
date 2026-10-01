// find , every , includes , some 


let students = [
    { name: "alvee" , marks: 85},
    { name: "mahia" , marks: 87},
    { name: "hridoy" , marks: 70},
]

//find --> it will only return the first matching value 

let hehe = students.find((s) => s.marks > 70) ;

console.log(hehe);



//includes

let fruits = ["Apple", "Mango", "Banana", "WaterMelon", "Pineapple"];

console.log(fruits.includes("Apple")); //only return true or false


// some --> return true false
let studentcheck= students.some((s)=> s.marks >85)

console.log(studentcheck);

//every  --> check is everyone meets the conditions or not

let studentcheck2= students.every((s)=> s.marks >60)

console.log(studentcheck2);
