/*Create a new index131.js file
Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
Each femaleStudents name using numeric indexes
Each maleStudents name using while
Each students name using for
*/
const femaleStudents = ['Keyosha','Angel','Juliani','Zahra','Sidrat'];
const maleStudents = ['Omer','Devon','Khista','Otto','Emerson'];
const students = femaleStudents.concat(maleStudents);
console.log (students);
var sortedList = students.sort()
console.log (sortedList)

let i=1;
console.log("*****Each femaleStudents name using numeric indexes: *****");
femaleStudents.forEach(function(student){
  console.log(`${i} - ${student}`);
  i++;
});
let j =0;
console.log("*****Each maleStudents name using while*****");
while (j <maleStudents.length){
console.log(`${maleStudents[j]}`);
j++;
}
console.log("*****Each students name using for*****");
for (let k=0; k<students.length; k++) {
  console.log(students[k]);
}
