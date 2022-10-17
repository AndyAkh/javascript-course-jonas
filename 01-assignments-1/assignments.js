console.log("kkpishu");

const country = "Romania";
const continent = "Europe";
let population = 19;
console.log(country);
console.log(continent);
console.log(population);

let language = "Romanian";
// console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

let moreThanFinland = population > 6;
console.log(moreThanFinland);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";

console.log(description);

let templateDescription = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(templateDescription);

let average = 33;

if (population > average) {
  console.log(`${country}'s population is above average`);
} else
  console.log(
    `${country}'s population is ${average - population} million below average`
  );

// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) console.log("Only one border!");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else if (numNeighbours === 0) console.log("No borders");
const isIsland = false;

if (language === "English" && population < 50 && !isIsland)
  console.log("Romania is the country you are looking for!");
else console.log("Romania does not meet your criteria.");

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

console.log(
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);
