//spread operator --> ...
// let newArr = [...oldArr]
// let newObj = {...oldObj}

let fruits = ["apple", "mango", "banana"];
let groceries = ["rice", "lentis", "flour"];

let shoppingCart = [...fruits, ...groceries, "soap", "biscuits"];

console.log(shoppingCart);

let personalInfo = {
  name: "alvee",
  age: 23,
  mobile: "01642874989",
};

let addressInfo = {
  district: "noakhali",
  subDistric: "sadar",
};

let allinfo = {
  ...personalInfo,
  ...addressInfo,
  zip: 3804,
};


console.log(allinfo);


const letters = [..."Alvee"] 
console.log(letters); //[ 'A', 'l', 'v', 'e', 'e' ]


let numbers = [1,45,36,3,63,23,634,23] ;

console.log(Math.max(numbers)); // shows NaN cause it receives one array
console.log(Math.max(...numbers)); //shows 634 casue it receive 1,45,36.........