const data = require("../data/data");

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  const species = ids.map((id) => {
    return data.species.find((animal) => animal.id === id);
  });

  const validSpecies = species.filter((animal) => animal !== undefined);

  return validSpecies;
}
console.log(
  getSpeciesByIds(
    "0938aa23-f153-4937-9f88-4858b24d6bce",
    "e8481c1d-42ea-4610-8e11-1752cfc05a46"
  )
);
module.exports = getSpeciesByIds;
