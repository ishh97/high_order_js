const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(first, last) {
  let modifiedFood = [];
  for (let Item = first; Item < last - 1; Item++) {
    modifiedFood.push(foods[Item]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:
function isEven(num) {
  return num % 2 == 0 ? true : false;
}
function isPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function checkNumber(numberArray, operation) {
  NewArray = numberArray.filter(operation);
  return NewArray;
}
// Progression 4:
function reject(numberArray) {
  let compositeArray = [];
  numberArray.forEach((num) => {
    isPrime(num) ? false : compositeArray.push(num);
  });

  return compositeArray;
}
function nonPrime(numberArray) {
  sol = reject(numberArray);
  return sol;
}

// Progression 5:
const isEvenUsingLambda = (num) => num % 2 == 0;

// Progression 6:

function square(n) {
  return n ** 2;
}

function findSquareOfNumbers(myArray) {
  let squareA = myArray.map(square);
  return squareA;
}
// Progression 7:

function multiply(myArray) {
  return myArray.reduce((product, num) => {
    return product * num;
  });
}

function sumOfSquares(myArray) {
  return myArray.map(square).reduce((total, n) => {
    return total + n;
  });
}
