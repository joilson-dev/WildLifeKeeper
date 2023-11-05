const data = require("../data/data");

function countEntrants(entrants) {
  return entrants.reduce(
    (count, entrant) => {
      if (entrant.age < 18) {
        count.child++;
      } else if (entrant.age >= 18 && entrant.age < 50) {
        count.adult++;
      }
      if (entrant.age >= 50) {
        count.senior++;
      }
      return count;
    },
    { child: 0, adult: 0, senior: 0 }
  );
}

function calculateEntry(entrants) {
  if (!Array.isArray(entrants) || entrants.length === 0) {
    return 0;
  }
  const counts = countEntrants(entrants);

  const { child, adult, senior } = counts;

  const childPrice = data.prices.child;
  const adultPrice = data.prices.adult;
  const seniorPrice = data.prices.senior;

  const totalCost =
    child * childPrice + adult * adultPrice + senior * seniorPrice;

  return totalCost;
}


const entrants = [
  { name: "Lara Carvalho", age: 5 },
  { name: "Frederico Moreira", age: 5 },
  { name: "Pedro Henrique Carvalho", age: 5 },
  { name: "Maria Costa", age: 18 },
  { name: "Núbia Souza", age: 18 },
  { name: "Carlos Nogueira", age: 50 },
];

console.log(calculateEntry(entrants));



module.exports = { calculateEntry, countEntrants };
