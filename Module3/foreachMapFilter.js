//for each can not retrun 
// map can return a new array


const fruits  = ["Apple", "Mango", "Banana", "WaterMelon", "Pineapple"] ;

// let newFruits = fruits.forEach((fruit , index) =>{

//     console.log(`${index} --> ${fruit}`);
    
// })

 let newFruits2 = fruits.map((fruit) => { fruit.toLowerCase() })  ;

console.log(newFruits2);
