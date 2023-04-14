'use strict';
export class Person {
  #name;
  #dateOfBirth;
  constructor(name, dateOfBirth) {
    this.#name = name;
    this.#dateOfBirth = dateOfBirth;
  }

  get getName() {
    return this.#name;
  }

  set setName(name) {
    this.#name = name;
  }

  get getDateOfBirth() {
    return this.#dateOfBirth;
  }

  set setDateOfBirth(dob) {
    this.#dateOfBirth = dob;
  }

  toString() {
    return `{Name: ${this.getName}, Date Of Birth: ${this.getDateOfBirth
      .toISOString()
      .slice(0, 10)}}`;
  }
}
