let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);

if (num1 > num2) {
    console.log(`${num1} is the largest number`);
}else if (num1 == num2){
    console.log("Both Number are equal");
    
}else{
    console.log(`${num2} is the largest number`);
    
}