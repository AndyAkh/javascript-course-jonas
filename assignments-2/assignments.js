"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const romania = describeCountry("Romania", 19, "Bucharest");
console.log(romania);

const germany = describeCountry("Germany", 83, "Berlin");
console.log(germany);

const russia = describeCountry("Russia", 144, "Moskow");
console.log(russia);
