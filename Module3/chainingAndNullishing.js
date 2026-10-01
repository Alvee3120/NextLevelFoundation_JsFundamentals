let user1 = {
  name: "Alvee",
  address: {
    city: "Noakhali",
  },
};

let user2 = {
  name: "Mahia",
};

// chaining --> ? , it check is it available , if not then shows undefined

console.log(user1?.address?.city);
console.log(user2?.address?.city);

// Nullishing --> ?? , it will show a result when chaining shows undefined

console.log(user1?.address?.city);
console.log(user2?.address?.city ?? "rangpur");
