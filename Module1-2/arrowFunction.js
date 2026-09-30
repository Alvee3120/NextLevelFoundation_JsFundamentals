// multiple line 

const total = (price, quan) => {

    const grandTotal = price * quan ;

    return grandTotal;
    
}

const spend = total(10,12);
console.log(spend);


// Single line  , no need to write return 

const total2 = (price , quantity ) => price*quantity ;

const sp = total2(20,12);
console.log(sp)