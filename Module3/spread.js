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
