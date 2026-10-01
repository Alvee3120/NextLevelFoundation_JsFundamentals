//for each can not retrun --> doing something with each items
// map can return a new array --> create a new array

const fruits = ["Apple", "Mango", "Banana", "WaterMelon", "Pineapple"];

fruits.forEach((f, index) => {
  console.log(`${index + 1} --> ${f}`);
});

let newFruits = fruits.map((f) => f.toLowerCase());

let newFruits2 = fruits.map((f) => {
   return f.toLowerCase();
}
);


console.log(newFruits2);


const numbers = [12, 34, 2, 6,23,43 ,34,234,342,35,252,23,2,4,7,6,432,42,17,64,36];

numbers.forEach((num) => {
  console.log(num);
});

let  newnum  = numbers.filter((num)=> num >10)

console.log(newnum);
