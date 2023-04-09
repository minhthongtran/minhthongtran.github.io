'use strict';
//1.Define a function max() that takes two numbers as arguments and returns the largest of them.
//Use the if-then-else construct available in Javascrip
function max(number1, number2) {
  if (number1 >= number2) {
    return number1;
  } else {
    return number2;
  }
}

console.log('Max of Two 2, 3: ' + max(2, 3));

//2.Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them
function maxOfThree(number1, number2, number3) {
  let max = number1;
  if (number2 >= max) {
    max = number2;
  }
  if (number3 >= max) {
    max = number3;
  }
  return max;
}

console.log('Max of Three -1, 5, 3: ' + maxOfThree(-1, 5, 3));

//3.Write a function isVowel() that takes a character (i.e. a string of length 1)
//and returns true if it is a vowel, false otherwise
function isVowel(c) {
  let vowelList = ['a', 'i', 'u', 'e', 'o'];
  return vowelList.includes(c);
}
console.log('c is vowel: ' + isVowel('c'));
console.log('a is vowel: ' + isVowel('a'));

//4.Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10,
//and multiply([1,2,3,4]) should return 24
//.Note/Hint: Do these using Imperative programming approach (i.e. for...loop or while...loop)
function sum(arr) {
  let sum = 0;
  for (let s of arr) {
    sum += s;
  }
  return sum;
}

console.log('Sum of [1,2,3,4]: ' + sum([1, 2, 3, 4]));
function multiply(arr) {
  let multi = 1;
  for (let s of arr) {
    multi *= s;
  }
  return multi;
}
console.log('Multiply of [1,2,3,4]: ' + multiply([1, 2, 3, 4]));

//5.Define a function reverse() that computes the reversal of a string.
//For example, reverse("jagtestar") should return the string "ratset gaj"
function reverse(str) {
  let resultStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    resultStr += str.charAt(i);
  }
  return resultStr;
}

console.log(reverse('Tran Minh Thong'));

//6.Write a function findLongestWord() that takes an array of words and
//returns the length of the longest one.
function findLongestWord(arr) {
  let longest = arr[0].length;
  for (let a of arr) {
    if (a.length >= longest) {
      longest = a.length;
    }
  }
  return longest;
}

console.log(
  "Longest lenght of ['work', 'hard', 'student']: " + findLongestWord(['work', 'hard', 'student'])
);

//7.Write a function filterLongWords() that takes an array of words and an integer i and returns
//a newarray containing only those words that were longerthan i characters
function filterLongWords(arr, i) {
  return arr.filter(function (a) {
    return a.length > i;
  });
}

console.log(
  "Filter long words greater than 3 characters of ['on', 'hard', 'student']: " +
    filterLongWords(['on', 'hard', 'student'], 3)
);

//8.Write a function named, computeSumOfSquares, that takes as input,
//an array of numbers and calculates and returns the sum of the squares of each number in the input array.
// E.g. computeSumOfSquares([1,2,3]) should be computed as 12+ 22+32= 14.
//Note: Write your Javascript code without using Imperative programming. i.e.
//Do NOT use any explicit looping construct; instead use functional programming style/approach
function computeSumOfSquares(arr) {
  return arr.reduce((x, y) => x + y * y, 0);
}

console.log(computeSumOfSquares([1, 2, 3]));

//9.Write a function named, printOddNumbersOnly, that takes as input,
//an array of integral numbers and it finds and prints only the numbers which are odd
function printOddNumbersOnly(arr) {
  return arr.filter((a) => a % 2 == 1);
}

console.log('Print only odd number [2, 5, 9, 8]: ' + printOddNumbersOnly([2, 5, 9, 8]));

//10.Write a function named, computeSumOfSquaresOfEvensOnly,
//that takes as input, an array of integral numbers and calculates and returns the sum
//of the squares of only the even numbers in the input array.
//E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22+42= 20
function computeSumOfSquaresOfEvensOnly(arr) {
  return arr.filter((a) => a % 2 == 0).reduce((x, y) => x + y * y, 0);
}

console.log(
  'calculate sum of square of evens only [1, 2, 3, 4, 5]: ' +
    computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5])
);

//11.Using the Array.reduce(...) function, re-implement your functions, sum(...)
//and multiply(...) (defined in Problem 4 above) without using Imperative programming. i.e.
//Do NOT use any explicit looping construct; instead use functional programming style/approach
function sumFunctional(arr) {
  return arr.reduce((x, y) => x + y, 0);
}

console.log('Sum of [1, 2, 3] with functional interface: ' + sumFunctional([1, 2, 3]));

function multiplyFunctional(arr) {
  return arr.reduce((x, y) => x * y, 1);
}

console.log(
  'Multiply of [1, 2, 3, 4] with functional interface: ' + multiplyFunctional([1, 2, 3, 4])
);

//12.Implement Javascript code for a functionnamed, findSecondBiggest,
//which takes as input, an arrayof numbers and finds and returns
//the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5])
//should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
function findSecondBiggest(arr) {
  let biggest = arr[0];
  let secondBiggest = arr[1];
  for (let i of arr) {
    if (biggest < i) {
      secondBiggest = biggest;
      biggest = i;
    } else if (secondBiggest < i && i < biggest) {
      secondBiggest = i;
    }
  }
  return secondBiggest;
}

console.log(
  'Find second biggest of array [1, 9, 11, 0, 12, 20]: ' + findSecondBiggest([1, 9, 11, 0, 12, 20])
);

//13.Write a functionnamed printFibo, that takes as input, a given length, n, and any two
//starting numbers a and b, and it prints-out the Fibonacci sequence,
//e.g.(0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...) of the given length,
//beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output;
//printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
//output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output;
//printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output;
//and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
function printFibo(length, a, b) {
  if (length == 1) return a;
  let fibo = [];
  fibo.push(a);
  fibo.push(b);
  while (fibo.length < length) {
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
  }
  return fibo;
}
console.log('printFibo(n=1, a=0, b=1): ' + printFibo(1, 0, 1));
console.log('printFibo(n=2, a=0, b=1): ' + printFibo(2, 0, 1));
console.log('printFibo(n=3, a=0, b=1): ' + printFibo(3, 0, 1));
console.log('printFibo(n=10, a=0, b=1): ' + printFibo(10, 0, 1));

//14.Use Array Methods: filter, map, reduce, etc to implement functions below:
//1.Create a function using function declaration named sum with one parameter of Array type,
// the returned result is the sum of all elements which are greater than 20.
//2.Create a function using function expression named getNewArray with one parameter of String Array, return a
//new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’
function sumOfGreater20(arr) {
  return arr.filter((a) => a > 20).reduce((x, y) => x + y, 0);
}

console.log(
  'Sum of Array which element greater than 20 [1, 20, 20, 20]: ' + sumOfGreater20([1, 21, 21, 21])
);

function getNewArray(arr) {
  return arr.filter((a) => a.length >= 5 && a.indexOf('a') >= 0);
}

console.log('Get new Array [trana, minha, thong]: ' + getNewArray(['trana', 'minha', 'thong']));
