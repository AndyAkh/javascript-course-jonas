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

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const chinaPercentage = percentageOfWorld1(1441);
const germanyPercentage = percentageOfWorld1(83);
const romaniaPercentage = percentageOfWorld1(19);

console.log(chinaPercentage, germanyPercentage, romaniaPercentage);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const chinaPercentage2 = percentageOfWorld2(1441);
const germanyPercentage2 = percentageOfWorld2(83);
const romaniaPercentage2 = percentageOfWorld2(19);

console.log(chinaPercentage2, germanyPercentage2, romaniaPercentage2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(1));

const populations = [9, 19, 83, 1441];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

const neighbours = ["Bulgaria", "Russia", "Hungary", "Serbia"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country");

neighbours[1] = "Russian Empire";
console.log(neighbours);

const myCountry = {
  country: "Russia",
  capital: "Moskow",
  language: "russian",
  population: 144,
  neighbours: [
    "North Korea",
    "China",
    "Mongolia",
    "Kazakhstan",
    "Azerbaijan",
    "Georgia",
    "Ukraine",
    "Belarus",
    "Latvia",
    "Estonia",
    "Finland",
    "Norway",
  ],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. `;
  },

  checkIsland: function () {
    return this.neighbours ? false : true;
  },
};

console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}. `
);

myCountry.population += 1;
myCountry["population"] -= 13;
console.log(myCountry.population);

myCountry.describe();
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
