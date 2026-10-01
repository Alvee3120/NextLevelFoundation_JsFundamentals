let products = [
  { title: "mouse", price: 501, instock: true },
  { title: "mobile", price: 125200, instock: true },
  { title: "pc", price: 9000, instock: true },
  { title: "headphone", price: 35001, instock: false },
];

//accumulator holds the previous value , and current holds the current value
// we set the accumulator initail value set to 0
let totalPrice = products.reduce((acc, current) => {
  return (acc += current.price);
}, 0);

console.log(totalPrice);

let sorted = products.sort((a, b) => a.price - b.price); // low to high
let sorted1 = products.sort((a, b) => a.price - b.price); // high to low
console.log(sorted);


let estPrice = products.filter((p) => p.instock == true).reduce((acc , cur) => {
  return acc += cur.price ;
},0 )

console.log(estPrice);
