// int type ( return int value)

function total(price =10 , quan = 12){
    const grandTotal = price * quan ;
    return grandTotal ;
}

const spend = total(5,12);

console.log(spend);



 //void type ( no return )
function greatings (name){
    console.log(`Hello ${name}`);
}

greatings('Mahia');
greatings('Alvee');

