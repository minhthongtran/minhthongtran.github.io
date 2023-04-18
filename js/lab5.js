//'use strict';
//1.Define a function max() that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascrip
// function max(number1, number2) {
//   if (number1 >= number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }

// console.log('Max of Two 2, 3: ' + max(2, 3));

// //2.Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them
// function maxOfThree(number1, number2, number3) {
//   let max = number1;
//   if (number2 >= max) {
//     max = number2;
//   }
//   if (number3 >= max) {
//     max = number3;
//   }
//   return max;
// }

// console.log('Max of Three -1, 5, 3: ' + maxOfThree(-1, 5, 3));

// //3.Write a function isVowel() that takes a character (i.e. a string of length 1)
// //and returns true if it is a vowel, false otherwise
// function isVowel(c) {
//   let vowelList = ['a', 'i', 'u', 'e', 'o'];
//   return vowelList.includes(c);
// }
// console.log('c is vowel: ' + isVowel('c'));
// console.log('a is vowel: ' + isVowel('a'));

// //4.Define a function sum() and a function multiply() that sums and multiplies (respectively)
// // all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10,
// //and multiply([1,2,3,4]) should return 24
// //.Note/Hint: Do these using Imperative programming approach (i.e. for...loop or while...loop)
// function sum(arr) {
//   let sum = 0;
//   for (let s of arr) {
//     sum += s;
//   }
//   return sum;
// }

// console.log('Sum of [1,2,3,4]: ' + sum([1, 2, 3, 4]));
// function multiply(arr) {
//   let multi = 1;
//   for (let s of arr) {
//     multi *= s;
//   }
//   return multi;
// }
// console.log('Multiply of [1,2,3,4]: ' + multiply([1, 2, 3, 4]));

// //5.Define a function reverse() that computes the reversal of a string.
// //For example, reverse("jagtestar") should return the string "ratset gaj"
// function reverse(str) {
//   let resultStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     resultStr += str.charAt(i);
//   }
//   return resultStr;
// }

// console.log(reverse('Tran Minh Thong'));

// //6.Write a function findLongestWord() that takes an array of words and
// //returns the length of the longest one.
// function findLongestWord(arr) {
//   let longest = arr[0].length;
//   for (let a of arr) {
//     if (a.length >= longest) {
//       longest = a.length;
//     }
//   }
//   return longest;
// }

// console.log(
//   "Longest lenght of ['work', 'hard', 'student']: " + findLongestWord(['work', 'hard', 'student'])
// );

// //7.Write a function filterLongWords() that takes an array of words and an integer i and returns
// //a newarray containing only those words that were longerthan i characters
// function filterLongWords(arr, i) {
//   return arr.filter(function (a) {
//     return a.length > i;
//   });
// }

// console.log(
//   "Filter long words greater than 3 characters of ['on', 'hard', 'student']: " +
//     filterLongWords(['on', 'hard', 'student'], 3)
// );

// //8.Write a function named, computeSumOfSquares, that takes as input,
// //an array of numbers and calculates and returns the sum of the squares of each number in the input array.
// // E.g. computeSumOfSquares([1,2,3]) should be computed as 12+ 22+32= 14.
// //Note: Write your Javascript code without using Imperative programming. i.e.
// //Do NOT use any explicit looping construct; instead use functional programming style/approach
// function computeSumOfSquares(arr) {
//   return arr.reduce((x, y) => x + y * y, 0);
// }

// console.log(computeSumOfSquares([1, 2, 3]));

// //9.Write a function named, printOddNumbersOnly, that takes as input,
// //an array of integral numbers and it finds and prints only the numbers which are odd
// function printOddNumbersOnly(arr) {
//   return arr.filter((a) => a % 2 == 1);
// }

// console.log('Print only odd number [2, 5, 9, 8]: ' + printOddNumbersOnly([2, 5, 9, 8]));

// //10.Write a function named, computeSumOfSquaresOfEvensOnly,
// //that takes as input, an array of integral numbers and calculates and returns the sum
// //of the squares of only the even numbers in the input array.
// //E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22+42= 20
// function computeSumOfSquaresOfEvensOnly(arr) {
//   return arr.filter((a) => a % 2 == 0).reduce((x, y) => x + y * y, 0);
// }

// console.log(
//   'calculate sum of square of evens only [1, 2, 3, 4, 5]: ' +
//     computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5])
// );

// //11.Using the Array.reduce(...) function, re-implement your functions, sum(...)
// //and multiply(...) (defined in Problem 4 above) without using Imperative programming. i.e.
// //Do NOT use any explicit looping construct; instead use functional programming style/approach
// function sumFunctional(arr) {
//   return arr.reduce((x, y) => x + y, 0);
// }

// console.log('Sum of [1, 2, 3] with functional interface: ' + sumFunctional([1, 2, 3]));

// function multiplyFunctional(arr) {
//   return arr.reduce((x, y) => x * y, 1);
// }

// console.log(
//   'Multiply of [1, 2, 3, 4] with functional interface: ' + multiplyFunctional([1, 2, 3, 4])
// );

// //12.Implement Javascript code for a functionnamed, findSecondBiggest,
// //which takes as input, an arrayof numbers and finds and returns
// //the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5])
// //should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
// function findSecondBiggest(arr) {
//   let biggest = arr[0];
//   let secondBiggest = arr[1];
//   for (let i of arr) {
//     if (biggest < i) {
//       secondBiggest = biggest;
//       biggest = i;
//     } else if (secondBiggest < i && i < biggest) {
//       secondBiggest = i;
//     }
//   }
//   return secondBiggest;
// }

// console.log(
//   'Find second biggest of array [1, 9, 11, 0, 12, 20]: ' + findSecondBiggest([1, 9, 11, 0, 12, 20])
// );

// //13.Write a functionnamed printFibo, that takes as input, a given length, n, and any two
// //starting numbers a and b, and it prints-out the Fibonacci sequence,
// //e.g.(0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...) of the given length,
// //beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
// //printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// //output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output;
// //printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output;
// //and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
// function printFibo(length, a, b) {
//   if (length == 1) return a;
//   let fibo = [];
//   fibo.push(a);
//   fibo.push(b);
//   while (fibo.length < length) {
//     fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
//   }
//   return fibo;
// }
// console.log('printFibo(n=1, a=0, b=1): ' + printFibo(1, 0, 1));
// console.log('printFibo(n=2, a=0, b=1): ' + printFibo(2, 0, 1));
// console.log('printFibo(n=3, a=0, b=1): ' + printFibo(3, 0, 1));
// console.log('printFibo(n=10, a=0, b=1): ' + printFibo(10, 0, 1));

// //14.Use Array Methods: filter, map, reduce, etc to implement functions below:
// //1.Create a function using function declaration named sum with one parameter of Array type,
// // the returned result is the sum of all elements which are greater than 20.
// //2.Create a function using function expression named getNewArray with one parameter of String Array, return a
// //new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’
// function sumOfGreater20(arr) {
//   return arr.filter((a) => a > 20).reduce((x, y) => x + y, 0);
// }

// console.log(
//   'Sum of Array which element greater than 20 [1, 20, 20, 20]: ' + sumOfGreater20([1, 21, 21, 21])
// );

// function getNewArray(arr) {
//   return arr.filter((a) => a.length >= 5 && a.indexOf('a') >= 0);
// }

// console.log('Get new Array [trana, minha, thong]: ' + getNewArray(['trana', 'minha', 'thong']));

// let test = 'IE6';
// console.log(parseInt('IE6'));

// let x;
// console.log(!x);

// const n1 = parseInt('42 is the answer');
// console.log(n1);

// console.log('Test hoisting');
//let x1;

// if (true) {
//   var x3;
// }
// console.log(x3);
// if (true) {
//   let x2;
// }
//console.log(x2);

// function log() {
//   console.log('No Arguments');
// }
// function log(x) {
//   console.log('1 Argument: ' + x);
// }
// function log(x, y) {
//   console.log('2 Arguments: ' + x + ', ' + y);
// }

// log();
// log(5);
// log(6, 7);

// const multiLineString = `This is line 1
// This is line 2`;

// console.log(multiLineString);

//console.log(window);

// function test1() {
//   let a = 1;
//   for (let i = 0; i < 10; i++) {
//     a = i + 10;
//   }
// }
//console.log(str);
// if (true) {
//   let str = 'Hello';
//   console.log(str);
// }
// console.log(str);
//console.log(test1());

// foo('Hi', 23);
// function foo(arg) {
//   if (arg) {
//     let str = 'Hello';
//   }
//   console.log(str);
// }

// function b() {
//   function a() {
//     console.log(x1);
//   }
//   a();
// }
// const x1 = 10;
// b();

// const a = { name: 'John', age: 10 };
// const b = { name: 'John', age: 10 };
// console.log(a === b);

// const a = { name: 'John', age: 10 };
// const b = a;
// console.log(a === b);
// const a = {};
// const b = {};
// console.log(a === b);

// const gradeReport = { s101: 3, s102: 2, s103: 3 };
// function average(arr) {
//   let total = 0;
//   let count = 0;
//   for (let s in arr) {
//     console.log(s);
//     total += arr[s];
//     count++;
//   }
//   return total / count;
// }

// console.log(average(gradeReport));

// var x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//   document.write(x);
//   document.write(a);
//   var f = function (a, b, c) {
//     b = a;
//     document.write(b);
//     b = c;
//     var x = 5;
//   };
//   f(a, b, c);
//   document.write(b);
//   var x = 10;
// };
// c(8, 9, 10);
// document.write(b);
// document.write(x);

// function myFunction() {
//   return x1 * x1;
// }
// var x1 = 9;
// document.write(myFunction());
// x1 = 5;
// document.write(myFunction());
// var aa = 5;
// document.write(!aa);
// document.write(!!aa);
// var foo = 1;
// function bar() {
//   if (!foo) {
//     var foo = 10;
//   }
//   alert(foo);
// }
// bar();

function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function () {
      document.write(i);
      return i;
    };
    shooters.push(shooter());
    i++;
  }
  return shooters;
}
let army = makeArmy();

var i = 0;
function test1() {
  for (i = 0; i < 10; i++) {
    document.writeln(i);
  }
}

function makeFunc() {
  function displayName() {
    console.log(name);
  }
  displayName();
  var name = 'AAA';
}

makeFunc();

// var funcs = [];
// for (var i = 0; i < 2; i++) {
//   funcs[i] = function () {
//     return i;
//   };
// }
// console.log(funcs[0]());
// console.log(funcs[1]());

// (function () {
//   if (true) {
//     document.writeln(message);
//   }
//   var message = 'hello';
//   document.writeln(message);
// })();

// function sum(sum1, sum2) {
//   document.writeln(sum1 + sum2);
// }
// setTimeout(() => {
//   sum(3, 4);
// }, 1000);

// let user = {
//   firstName: 'thong',
//   sayHi() {
//     console.log(this), console.log(`Hello ${this.firstName}`);
//   },
// };

// //user.sayHi();
// setTimeout(user.sayHi(), 2000);

// let user = {
//   name: 'John',
// };

// let car = {
//   name: 'Honda',
// };

// function display() {
//   console.log(this.name);
// }

// display.call(user);

let user1 = {
  firstName: 'Thong',
  sayHi() {
    const self = this;
    console.log(this);
    const setName = (newName) => {
      console.log(this);
      this.firstName = newName;
    };
    setName('Minh');
    console.log(`Hello ${this.firstName}`);
  },
};
user1.sayHi();
// setTimeout(user1.sayHi.apply(user1), 2000);
// setTimeout(user1.sayHi.call(user1), 2000);
// setTimeout(user1.sayHi.bind(user1), 2000);
//setTimeout(user1.sayHi(), 2000);

function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password == 'rockstar') ok();
  else fail();
}

// let user = {
//   name: 'John',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     console.log(this);
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail);

// let group = {
//   title: 'Our group',
//   students: ['John', 'Pete', 'Alice'],
//   showList: function () {
//     const self = this;
//     this.students.forEach(function (student) {
//       console.log(self.title + ': ' + student);
//     });
//   },
// };
// const showList = group.showList.bind(group);
// showList();

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
// };

// let pockets = {
//   money: 2000,
// };

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;
// console.log(pockets.pen);
// console.log(bed.glasses);

// function User2(name) {
//   (this.name = name), (this.isAdmin = false);
// }
// let user3 = new User2('Thong');
// let user4 = new User2('Minh');
// console.log(User2.prototype);
// console.log(user3);

// class Employee {
//   #fullName;
//   salary;
//   hdate;
//   static counter = 0;
//   constructor(fname, salary, hdate) {
//     this.#fullName = fname;
//     this.#setSalary(salary);
//     this.hdate = hdate;
//     Employee.incCounter();
//   }

//   calsSalary() {
//     //instance method
//     return this.salary;
//   }

//   static incCounter() {
//     Employee.counter += 1;
//   }

//   #setSalary(s) {
//     this.salary = s;
//   }

//   get name() {
//     return this.#fullName;
//   }

//   set name(n) {
//     this.#fullName = n;
//   }
// }

// let emp = new Employee('Minh Thong Tran', 10000, new Date('04-13-2023'));
// let emp1 = new Employee('Minh Thong Tran', 10000, new Date('04-13-2023'));
// console.log(emp);
// emp.name = 'John Doe';
// console.log(Employee.counter);
// //Employee.incCounter();
// //console.log(Employee.counter);
// emp.isAdmin = true;
// console.log(emp);

// class Manager extends Employee {
//   bonus = 0;
//   constructor(fname, salary, hdate, bonus) {
//     super(fname, salary, hdate);
//     this.bonus = bonus;
//   }
//   calsSalary() {
//     let s = super.calsSalary();
//     return s * this.bonus + s;
//   }
// }

// let manager = new Manager('Minh', 8000, new Date('04-13-2020'), 0.5);
// manager.isAdmin = true;
// manager.isManager = true;
// // console.log(manager);
// // console.log(manager.calsSalary());
// // console.log(Employee.counter);
// // console.log(manager instanceof Employee);
// // console.log(typeof Manager);

// console.log(emp1.__proto__);
// console.log(Employee.prototype);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.getName = function () {
//   return this.name;
// };

// let u1 = new User('Minh', 34);
// console.log(u1.getName());
// //-------------------------Lab8
// Array.prototype.sortArray = function () {
//   return this.sort(function (a, b) {
//     return a - b;
//   });
// };

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// arr.sortArray();
// console.log(arr);

// let student = {
//   firstName: '',
//   lastName: '',
//   inputNewGrade(g) {
//     this.grades.push(g);
//   },
//   computeAverageGrade() {
//     return this.grades.reduce((x, y) => x + y, 0) / this.grades.length;
//   },
// };

// let student1 = Object.create(student);
// student1.firstName = 'Minh1';
// student1.lastName = 'Thong1';
// student1.grades = [];
// student1.inputNewGrade(3);
// student1.inputNewGrade(4);
// let student2 = Object.create(student);
// student2.firstName = 'Minh';
// student2.lastName = 'Thong';
// student2.grades = [];
// student2.inputNewGrade(4);
// student2.inputNewGrade(3.4);

// let students = [];
// students.push(student1);
// students.push(student2);
// console.log(students);

// students.forEach((s) => {
//   console.log(s.computeAverageGrade());
// });

// function Student(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
//   this.grades = [];
// }

// Student.prototype.inputNewGrade = function (g) {
//   this.grades.push(g);
// };

// Student.prototype.computeAverageGrade = function () {
//   return this.grades.reduce((x, y) => x + y, 0) / this.grades.length;
// };

// let st1 = new Student('Minh', 'Thong');
// st1.inputNewGrade(3);
// st1.inputNewGrade(4);
// st1.testFunction = function () {
//   console.log(11111111);
// };

// let st2 = new Student('Minh', 'Thong');
// st2.inputNewGrade(4);
// st2.inputNewGrade(3.5);
// console.log(st2);
// console.log(st1);

// let students1 = [];
// students1.push(st1);
// students1.push(st2);

// students1.forEach((s) => {
//   console.log(s.computeAverageGrade());
// });

// console.log(typeof st1);
// console.log(typeof student1);

// let group = {
//   title: 'Our Group',
//   students: ['John', 'Pete', 'Alice'],
//   showList: function () {
//     let printStudent = (s) => {
//       console.log(this.title + ': ' + s);
//     };
//     this.students.forEach(
//       // function (student) {
//       //   console.log(this.title + ': ' + student);
//       // }.bind(this)
//       (s) => printStudent.apply(this, [s])
//     );
//   },
// };
// group.showList();

// function b() {
//   function a() {
//     console.log(x); //10
//   }
//   const x = 10;
//   a();
//   console.log(x); //10
// }
// const x = 20;
// b();

// let x = 1;
// function foo(y) {
//   return function (z) {
//     return x + y + z;
//   };
// }
// let f = foo(2);
// console.log('Here: ' + f(2));

// const students = [
//   { name: 'Quincy', grades: [99, 88], courses: ['cs301', 'cs303'] },
//   { name: 'Jason', grades: [29, 38], courses: ['cs201', 'cs203'] },
//   { name: 'Alexis', grades: [79, 78], courses: ['cs105', 'cs211'] },
//   { name: 'Sam', grades: [91, 82], courses: ['cs445', 'cs303'] },
//   { name: 'Katie', grades: [66, 77], courses: ['cs303', 'cs477'] },
// ];

// let stuArray = students
//   .filter((s) => s.courses.includes('cs303'))
//   .reduce((avgGrade, s) => {
//     let sumGrade = s.grades.reduce((x, y) => x + y, 0);
//     //let avgGrade = {};
//     avgGrade[s.name] = sumGrade / s.grades.length;
//     return avgGrade;
//   }, {});

// console.log(stuArray);

// const person = {
//   name: 'Edward',
//   printName: function (greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };
// function foo() {
//   const printNameGreeting = person.printName;
//   printNameGreeting();
// }

// foo();

const usertest = {
  fName: 'Josh',
  greet: function () {
    function setName(name) {
      this.name = name;
    }
    setName('Edward');
  },
};

usertest.greet();
console.log(usertest.fName);

function getMonthlyFee(fee) {
  return fee * 2;
}

var anna = {
  name: 'an',
  total: 250,
  deduct(fee, fn) {
    return fn.bind(this, fee)();
  },
};

function sayHi() {
  console.log(111);
}

y1 = sayHi();
// setInterval(sayHi, 1000);
// console.log(anna.deduct(40, getMonthlyFee));
// console.log(getMonthlyFee.apply(anna, [40]));

var objectStr = "{'a': 1, 'd' : {'b': 1}}";
objectStr = objectStr.replaceAll('1', '2');
console.log(objectStr);
