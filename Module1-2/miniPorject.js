let students = [
  { id: 101, name: "alvee", age: 25, department: "CSE" },
  { id: 102, name: "mahia", age: 25, department: "CSE" },
];

function getAll() {
  for (let s in students) {
    console.log(students[s]);
  }
}

function addStudent(name, age, dept) {
  let newid = students.length > 0 ? students[students.length - 1].id + 1 : 101;

  let newStudent = {
    id: newid,
    name: name,
    age: age,
    department: dept,
  };
  students.push(newStudent);
  console.log("Student Added Successfully");
}

addStudent("hridoy", 24, "BBA");
addStudent("mariam", 24, "BBA");
addStudent("abcs ", 27, "BBA");
addStudent("sewe", 22, "BBA");
console.log(students);

function findstudent(id) {
  let foundstudent = null;

  for (let student of students) {
    if (student.id == id) {
      foundstudent = student;
      break;
    }
  }
  if (foundstudent) {
    console.log("Found Student ", foundstudent);
  } else {
    console.log("404 not founud");
  }
}

findstudent(107);

function deleteStudent(id) {
  let targetStudent = -1;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == id) {
      targetStudent = i;
      break;
    }
  }
  if (targetStudent != -1) {
    let deletedStd = students.splice(targetStudent, 1);
    console.log(`deleted ${deletedStd[0].name} id: ${deletedStd[0].id}  `);
  } else {
    console.log("Not found");
  }
}

deleteStudent(106);
deleteStudent(105);

getAll();
