const name  = ["apple", "banana" , "orange" , "strawbery"] ;

console.log(name);

//push --> add element at the end

name.push("grapes");
console.log(name);

// pop 

name.pop();
console.log(name);


//unshift --> add at 0 index
name.unshift("Papaya")
console.log(name);

//shift --> remove from 0 index
name.shift();
console.log(name);


//splice ( start index , delete count --> how many i want to delete)

name.splice(1,1 , "mango"); // in 1 index , delete 1 items and add mango
console.log(name);
