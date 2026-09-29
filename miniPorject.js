let students = [
  { id: 101, name: "alvee", age: 25, department: "CSE" },
  { id: 102, name: "mahia", age: 25, department: "CSE" },
];


function addStudent(name , age, dept){
    let newid  =  students.length > 0 ? students[students.length -1].id +1 : 101;

    let newStudent = {
        id : newid,
        name : name,
        age: age,
        department: dept,
    }
    students.push(newStudent);
    console.log("Student Added Successfully");
    
}

addStudent("hridoy", 24, "BBA");
addStudent("mariam", 24, "BBA");
addStudent("abcs ", 27, "BBA");
addStudent("sewe", 22, "BBA");
console.log(students);
