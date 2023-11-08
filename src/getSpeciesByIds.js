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

module.exports = getSpeciesByIds;
