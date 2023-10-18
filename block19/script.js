let addingRecords = true;

while (addingRecords) {
  const studentRecords = [
    { name: "John William", major: "political science", age: 18 },
    { name: "Lisa Tsu", major: "biology", age: 19 },
    { name: "Juan Gonzalez", major: "mechanical engineering", age: 20 },
  ];

  function displayStudentRecords() {
    let recordString = "";
    for (let i = 0; i < studentRecords.length; i++);
    {
      const { name, major, age } = studentRecords[i];
      recordString += `${name} studies ${major} and is ${age} years old.`;
    }
  }

  displayStudentRecords();

  const studentName = prompt("Please enter the student's name:");
  const studentMajor = prompt("Please enter the student's major:");
  const studentAge = prompt("Please enter the student's age:");

  if (studentName && studentMajor && studentAge) {
    const newRecord = {
      name: studentName,
      major: studentMajor,
      age: studentAge,
    };
    studentRecords.push(newRecord);
    displayStudentRecords();
  } else {
    alert("Please enter valid values for all fields.");
  }
  addingRecords = confirm("Do you want to add another student?");
}
