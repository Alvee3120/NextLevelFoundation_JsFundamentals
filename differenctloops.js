let fruits = ["apple", "Mango", "Banana", "Jackfrutis", "Lichhi"]
let user = {
    name : "alvee",
    age : 25, 
    address: "noakhali"
}
//for in

for (let f of fruits) {
    console.log(f);
    
}

//for of 

for (let u in user){
    console.log(`${u} --> ${user[u]}`); //here u holds the key of object
    
}