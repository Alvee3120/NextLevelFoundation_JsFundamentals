let cart = [
  {
    name: "shirt",
    price: 1200,
    quantity: 2,
  },
  {
    name: "pant",
    price: 1800,
    quantity: 2,
  },
  {
    name: "shorts",
    price: 300,
    quantity: 7,
  },
];
// task: koto gulo item kineche and koto tk bill hoyeche 


let totalItem = 0;
let totalBill =0;

console.log(cart.length);

for( let i = 0 ; i < cart.length ; i++){
    totalItem += cart[i].quantity;
    totalBill += (cart[i].price)*(cart[i].quantity);
}

console.log(totalBill, totalItem);
