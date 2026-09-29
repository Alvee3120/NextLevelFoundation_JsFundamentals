// we will build a order processing system to understand dry (donot repeat yourself) and how a function is important

function isValidPrice(price) {
  return typeof price === "number" && price > 0;
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercent) {
  if (!isValidPrice(price)) {
    return 0;
  }
  let discountAmount = (price * discountPercent) / 100;

  return price - discountAmount;
}

function calculateFinalBill(price, vatPercent = 15) {
  vat = (price * vatPercent) / 100;
  return price + vat;
}

function formatBDT(amount) {
  return `${amount.toFixed(2)} BDT`;
}

function capitalized(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function processOrder(user, itemPrice, discountCode) {
  console.log(`-----Processing Order for ${capitalized(user.name)}-------`);
  if (!isValidEmail(user.email)) {
    console.log("Erro , Invalid user email");
    return;
  }

  let currentPrice = itemPrice;
  if (discountCode == "FLAT20") {
    currentPrice = calculateDiscount(itemPrice, 20);
    console.log("20% Discount Applied");
  }
  let totalBill = calculateFinalBill(currentPrice);
  console.log(`Final Ammount to Pay ${formatBDT(totalBill)}`);
  console.log("Order Completed");
}

let user1 = { name: "Alvee", email: "alvee@gmail.com" };

processOrder(user1,2000,"FLAT2r0");