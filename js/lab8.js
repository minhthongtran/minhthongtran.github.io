'use strict';
Array.prototype.sortArray = function () {
  return this.sort(function (a, b) {
    return a - b;
  });
};

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arr.sortArray();
console.log(arr);

let student = {
  firstName: '',
  lastName: '',
  inputNewGrade(g) {
    this.grades.push(g);
  },
  computeAverageGrade() {
    return this.grades.reduce((x, y) => x + y, 0) / this.grades.length;
  },
};

let student1 = Object.create(student);
student1.firstName = 'Minh1';
student1.lastName = 'Thong1';
student1.grades = [];
student1.inputNewGrade(3);
student1.inputNewGrade(4);
let student2 = Object.create(student);
student2.firstName = 'Minh';
student2.lastName = 'Thong';
student2.grades = [];
student2.inputNewGrade(4);
student2.inputNewGrade(3.4);

let students = [];
students.push(student1);
students.push(student2);
console.log(students);

students.forEach((s) => {
  console.log(s.computeAverageGrade());
});

function Student(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
  this.grades = [];
}

Student.prototype.inputNewGrade = function (g) {
  this.grades.push(g);
};

Student.prototype.computeAverageGrade = function () {
  return this.grades.reduce((x, y) => x + y, 0) / this.grades.length;
};

let st1 = new Student('Minh', 'Thong');
st1.inputNewGrade(3);
st1.inputNewGrade(4);
st1.testFunction = function () {
  console.log(11111111);
};

let st2 = new Student('Minh', 'Thong');
st2.inputNewGrade(4);
st2.inputNewGrade(3.5);
console.log(st2);
console.log(st1);

let students1 = [];
students1.push(st1);
students1.push(st2);

students1.forEach((s) => {
  console.log(s.computeAverageGrade());
});
