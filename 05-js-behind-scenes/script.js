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
// console.log(me);
// console.log(job);
// console.log(age);

/*
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
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(9999);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1772);

const andy = {
  name: 'Andy',
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

andy.calcAge();

const iulia = {
  year: 1999,
};

iulia.calcAge = andy.calcAge;

iulia.calcAge();
*/

// var firstName = 'Ionel';

// const andy = {
//   firstName: 'Andy',
//   year: 1997,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   /*
//   const self = this; // self or that
//     const isMillenial = function () {
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },
//   */
//   greet: () => {
//     console.log(this);
//     console.log(`Hello ${this.firstName}!`);
//   },
// };

// andy.greet();
// andy.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   console.log(a + b);
//   return a + b;
// };

// addExpr(2, 4);
// addExpr(5, 10, 8, 55);

// const addArrow = () => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(1, 2);

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  firstName: 'Andy',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(`Friend:`, friend);
console.log(`Me`, me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Ronaldo';

console.log(jessica);
console.log(marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Mbappe', 'Hagi'],
};

const jessicaCopy = Object.assign({}, jessica2); // shallow copy, not deep clone
jessicaCopy.lastName = 'Griezmann';
jessicaCopy.family.push('Dica');
jessicaCopy.family.push('Sapunaru');

console.log(jessica2);
console.log(jessicaCopy);
