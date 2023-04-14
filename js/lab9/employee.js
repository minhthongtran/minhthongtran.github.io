import { Person } from './person.js';

export class Employee extends Person {
  #salary;
  #hireDate;
  constructor(name, dob, salary, hireDate) {
    super(name, dob);
    this.#salary = salary;
    this.#hireDate = hireDate;
  }

  get getSalary() {
    return this.#salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  set setSalary(s) {
    this.#salary = s;
  }

  doJob(jobTitle) {
    console.log(`${this.getName} is a ${jobTitle} who earn salary ${this.getSalary}`);
  }
}
