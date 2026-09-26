const height = Number(process.argv[3]);
const weight = Number(process.argv[2]);

console.log(`Your Height is ${height}m \nYour weight is ${weight}kg`);


const calculateBMI = (height, weight) =>  weight / (height*height) ;


const BMI = calculateBMI(height, weight) ;

console.log(`Your BMI is ${BMI}`);

switch (true) {
    case BMI < 18.5 :
        console.log("you are underweight");
        break;

    case (BMI >= 18.5 && BMI <= 24.9):
        console.log("you are normal");
        break;

    case (BMI >= 25 && BMI <= 29.9 ):
        console.log("you are overweight");
        break;
    
    case (BMI >= 30 ):
        console.log("you are obese");
        break;
        
    default:
        console.log("Invalid Height or weight");
        break;
}
