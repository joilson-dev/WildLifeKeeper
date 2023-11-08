const data = require("../data/data");

function getAnimalsOlderThan(animal, age) {
  const species = data.species.find((species) => species.name === animal);

  if (!species) {
    return false;
  }

  const areAllAnimalsOlder = species.residents.every(
    (resident) => resident.age >= age
  );

  return areAllAnimalsOlder;
}

module.exports = getAnimalsOlderThan;
