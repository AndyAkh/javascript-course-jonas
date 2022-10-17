"use strict";

// Functions

// function logger() {
//   console.log("Function is working!");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(3, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/* 
// Functions declaration - can be called before declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Functions expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);

console.log(age2);

*/

// Arrow functions
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2009);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}.`;
};

console.log(yearsUntilRetirement(1997, "Andy"));
console.log(yearsUntilRetirement(1973, "Bob"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}.`;
// };

/*
const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

const years = new Array(1997, 1984, 2005, 2009);

console.log(years);

console.log(friends[0]);
console.log(years[6]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2 = new Array(1997, 1984, 2005, 2009, 2014);

console.log(calcAge(years2[4]));
*/

/*
// Add elements
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");

console.log(friends);

friends.unshift("John");

console.log(friends);

// Remove elements
friends.pop(); // last element

friends.pop();

console.log(friends);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf("John"));
console.log(friends.includes("John"));

console.log(friends.includes("Steven"));
*/

/*
const andy = {
  firstName: "Andy",
  lastName: "Doe",
  age: 2037 - 1997,
  job: "programmer",
  friends: ["Michael", "Steven", "Peter"],
};

console.log(andy);

console.log(andy.lastName);
console.log(andy["job"]);

const nameKey = "Name";
console.log(andy["first" + nameKey]);

// const interestedIn = prompt("What do you want to know about me?");

// if (andy[interestedIn]) {
//   console.log(andy[interestedIn]);
// } else {
//   console.log("I don't know about that");
// }

andy.location = "Romania";

console.log(andy);

// Challenge
// "Andy has 3 friends and his best friend is Michael"

console.log(
  `${andy.firstName} has ${andy.friends.length} friends, and his best friend is ${andy.friends[0]}`
);
*/

const andy = {
  firstName: "Andy",
  lastName: "Doe",
  birthYear: 1997,
  job: "programmer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return (
      `${this.firstName} is a ${this.age} years old ${this.job} and he has ` +
      `${this.hasDriversLicense ? "a" : "no"} drivers license`
    );
  },
};

console.log(andy.calcAge());
console.log(andy);
console.log(andy.age);

// Challenge
// "Andy is a 40 years old programmer and he has a/no driver's license"

console.log(andy.getSummary());
console.log(andy);
