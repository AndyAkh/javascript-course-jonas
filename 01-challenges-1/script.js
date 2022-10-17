//   Coding Challenge #1 & #2

// Data set 1
const massJohn = 92;
const heightJohn = 1.95;

const massMark = 75;
const heightMark = 1.69;

// Data set 2
// const massJohn = 85;
// const heightJohn = 1.76;

// const massMark = 95;
// const heightMark = 1.88;

const BMIjohn = massJohn / heightJohn ** 2;
const BMImark = massMark / heightMark ** 2;

const markHigherBMI = massMark > massJohn;

console.log(BMIjohn);
console.log(BMImark);
console.log(markHigherBMI);

if (BMIjohn > BMImark) console.log("John's BMI is higher than Mark's!");
else console.log("Mark's BMI is higher than John's!");

if (BMIjohn > BMImark)
  console.log(`John's BMI (${BMIjohn}) is higher than Mark's BMI (${BMImark})`);
else
  console.log(`Mark's BMI (${BMImark}) is higher than John's BMI (${BMIjohn})`);

//   Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

let dolphinsAvg, koalasAvg;

let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
koalasAvg = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinsAvg > koalasAvg) console.log("Dolphins won");
else if (dolphinsAvg < koalasAvg) console.log("Koalas won");
else console.log("DRAW");

dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;

koalas1 = 109;
koalas2 = 95;
koalas3 = 123;

dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
koalasAvg = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) console.log("Dolphins won");
else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) console.log("Koalas won");
else console.log("DRAW");

dolphins1 = 97;
dolphins2 = 112;
dolphins3 = 101;

koalas1 = 109;
koalas2 = 95;
koalas3 = 106;

dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
koalasAvg = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) console.log("Dolphins won");
else if (dolphinsAvg < koalasAvg && koalasAvg >= 100) console.log("Koalas won");
else if (dolphinsAvg >= 100 && koalasAvg >= 100 && dolphinsAvg === koalasAvg)
  console.log("DRAW");

//   Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant.
// In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

let bill = 430;
let tip;

tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(tip);

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill)
  }, and the total value ${bill + tip}`
);
