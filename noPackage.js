const peopleList = require('./omFamilyTree.json');
// const peopleList = data.familyTree.people;
const optionsToShow = (searchValue) => {
  return peopleList.filter((person) =>
    [person.givenNames, person.surnames, person.birthDate?.toString()]
      .join(' ')
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );
};

const startTime = process.hrtime();
const result = optionsToShow('182');

console.log(result.slice(0, 5), result.length);
const elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
console.log('It takes ' + elapsedSeconds + 'seconds');
//
// 9

function parseHrtimeToSeconds(hrtime) {
  var seconds = (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
  return seconds;
}
