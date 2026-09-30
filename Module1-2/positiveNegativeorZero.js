let num = Number(process.argv[2]);

if(num > 0){
    console.log(`${num} is Positive Number`);
    
}else if (num < 0){
    console.log(`${num} is Negative Number`);
}else{
    console.log(`${num} is Zero`);
}