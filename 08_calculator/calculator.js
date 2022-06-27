const add = function(...numbers) {
	let sum = numbers.reduce((previousValue, currentValue) => previousValue+currentValue , 0);
  return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let sum = numbers.reduce((previousValue, currentValue) => previousValue+currentValue , 0);
  return sum;
};

const multiply = function(numbers) {
  let product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue, 1)
  return product;
};

const power = function(index, power) {
	return Math.pow(index, power);
};

const factorial = function(num1) {
	if(num1 == 0) {
    return 1;
  }
  let arr = [...Array(num1 + 1).keys()].slice(1);
  let factorial = arr.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
