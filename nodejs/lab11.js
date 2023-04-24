Array.prototype.even = function () {
  return this.filter((e) => e % 2 == 0);
};

Array.prototype.odd = function () {
  return this.filter((e) => e % 2 == 1);
};

let oddArray = [1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log(oddArray);

let evenArray = [1, 2, 3, 4, 5, 6, 7, 8].even();
console.log(evenArray);
