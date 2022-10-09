/*
// Challenge #1

const calcAverage = (match1, match2, match3) => (match1 + match2 + match3) / 3;

const dolphinsAvg = calcAverage(44, 23, 71);
console.log(dolphinsAvg);

const koalasAvg = calcAverage(65, 54, 49);
console.log(koalasAvg);

const checkWinner1 = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= koalasAvg * 2) {
    console.log(`Dolphins won (${dolphinsAvg} vs ${koalasAvg})`);
    return dolphinsAvg;
  } else if (koalasAvg >= dolphinsAvg * 2) {
    console.log(`Koalas won (${koalasAvg} vs ${dolphinsAvg})`);
    return koalasAvg;
  } else console.log(`No winner`);
  return 0;
};

checkWinner1(dolphinsAvg, koalasAvg);

const checkWinner2 = function (dolphinsAvg, koalasAvg) {
  if (dolphinsAvg > koalasAvg) {
    console.log(`Dolphins won (${dolphinsAvg} vs ${koalasAvg})`);
    return dolphinsAvg;
  } else if (koalasAvg > dolphinsAvg) {
    console.log(`Koalas won (${koalasAvg} vs ${dolphinsAvg})`);
    return koalasAvg;
  } else console.log(`No winner`);
  return 0;
};

checkWinner2(dolphinsAvg, koalasAvg);
*/

// Challenge #2

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips);
console.log(totals);
*/

// Challenge #3

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
  );
}
