let price = 500;
let quantity = 15;

console.log(
  `-----------Invoice----------\nYour item Price is : ${price}\nYou pick ${quantity} items\nSo, Total: ${price * quantity} `,
);

let totalbill = price * quantity;

function getDiscount(price, discount = 20) {
  return (price * discount) / 100;
}

console.log(`you got discount : ${getDiscount(totalbill)}`);


let stock = 0 ;

console.log(`Status : ${stock > 0 ? "In Stock" + " " + stock : "Out of Stock"}`);
