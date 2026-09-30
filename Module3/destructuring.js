//Object Destructuring-------------------------

let stu = {
  name: "Alvee",
  age: 25,
  city: "Dhaka",
};
//old system for getting name

let name = stu.name;
console.log(name);
console.log(stu.name);

// New System

const { name: myname, age, city } = stu; //if name was not declare before that we can keep it like that  const { name, age, city } , but now we give the name variable a name which is myname

console.log(myname);

let user = {
  Uname: "Mahia",
  Uage: 25,
  Uadd: {
    Ucity: "Rangpur",
    Uzip: 1230,
  },
};

const {
  Uname,
  Uage,
  Uadd: { Ucity, Uzip },
} = user;

console.log(Uname);
console.log(Uage);
console.log(Ucity);
console.log(Uzip);

//Array Destructuring-----------------------------------------

const arr = ["apple", "mango", "banana"]

//const [a,m,b] = arr 
// const [,,b] = arr //third element 
 const [,m,] = arr
console.log(m);
