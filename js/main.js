'use strict';
import { Person } from './lab9/person.js';
import { Employee } from './lab9/employee.js';

let persons = [];

let per1 = new Person('Ana Smith', new Date('1998-12-15'));
let per2 = new Person('Bob Jone', new Date('1945-11-16'));
let per3 = new Person('Carlos Slim Helu', new Date('1976-09-24'));

persons.push(per1);
persons.push(per2);
persons.push(per3);

persons.forEach((p) => {
  console.log(p.toString());
});

let emp = new Employee('Jim Hanson', new Date('1998-12-15'), 245990, new Date('2023-12-15'));
emp.doJob('Software Engineer');

const students = [
  { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
  { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
  { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
  { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
  { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] },
];

let average = students
  .filter((s) => {
    return s.courses.includes('cs303');
  })
  .map((s) => {
    let sum = s.grades.reduce((x, y) => x + y, 0);
    let average = sum / s.grades.length;
    let ob = {};
    ob[`${s.name}`] = average;
    return ob;
  });
console.log(average);

function b() {
  const x = 10;

  console.log(x);
  a(50);

  function a(x) {
    console.log(x);
  }
}

var x = 20;

b();

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],
  showList: function () {
    this.students
      .forEach(function (student) {
        console.log(this.title + ': ' + student);
      })
      .bind(this);
  },
};
group.showList();
