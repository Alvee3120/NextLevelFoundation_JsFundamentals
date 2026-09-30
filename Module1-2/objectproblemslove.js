let student = {
        name: "Alvee",
        id: 3120,
        marks: {
            DSA : 80,
            Cpp : 87,
            SAD: 73,
        }
}

let totalMarks = 0;
let totalSubject = 0;

for (const subj in student.marks){
    totalMarks += student.marks[subj] ;
    totalSubject++;
}
let average = totalMarks/totalSubject ;

if (average >=80){
    console.log("passed");
    
}else{
    console.log("failed, Need Improvements");
    
}
console.log(totalSubject,totalMarks , average);
