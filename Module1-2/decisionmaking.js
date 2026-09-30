// If else 


let age = 10 ;

if (age >= 18){
    console.log("voter")
}else {
    console.log("not Voter")
}

// switch case 

let marks = 100 

switch (true) {

    case marks >= 90 :
        console.log("A+");
        break;
    
    case marks >= 80 :
        console.log("A");
        break;
    
    case marks >= 70 :
        console.log("B");
        break;
    
    default:
        console.log("Fail , Need Improvements");
        break;
        

        
        
}


// ternary 

let age2 = 10 

age2 >= 18 ? console.log("voter") : console.log("not voter");

