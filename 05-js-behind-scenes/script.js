'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (!(birthYear >= 1981 && birthYear <= 1996)) {
      var millenial = false;
      //   Creating new variable with the same name as outer scope's variable
      const firstName = 'John Cena';
      const str = `Oh, and you aren't a millenial, ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      //   Reassigning outer scope's variable
      output = 'Fuck yeah';
    }

    console.log(millenial);
    // console.log(add(2, 6));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Andy';
calcAge(1997);
*/

// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(age);

var me = 'Andy';
let job = 'developer';
const age = 29;

// Hoisting with functions

console.log(addDecl(1, 2));
// console.log(addExpr(2, 3)); // cannot access before initialization
// console.log(addArrow(1, 2)); // cannot access before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = () => a + b;

// Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 144;
