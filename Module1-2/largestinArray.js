let marks = [23,45,2,4234,523,213,4,23,432,10000,234,4,2,76,48,785,56,45,86,6,743,65,7,3,64,5456, 9999] ;


let max = marks[0] ;

for (let i = 1; i < marks.length; i ++){
    if(max < marks[i]){
        max = marks[i];
    }
}
console.log(max);
