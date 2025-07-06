const findTheOldest = function (people) {
  let oldest = people.reduce((oldestAge, current) => {
    // check if there is yearOfDeath, if there is not, then use current Year to find current age
    let currentPersonAge = 0;
    let oldestPersonAge = 0;

    if (!current.yearOfDeath || !oldestAge.yearOfDeath) {
      let date = new Date();

      currentPersonAge = date.getFullYear() - current.yearOfBirth;
      oldestPersonAge = date.getFullYear() - oldestAge.yearOfBirth;
    } else {
      currentPersonAge = current.yearOfDeath - current.yearOfBirth;
      oldestPersonAge = oldestAge.yearOfDeath - oldestAge.yearOfBirth;
    }

    return currentPersonAge > oldestPersonAge ? current : oldestAge;
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
