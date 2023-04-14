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
