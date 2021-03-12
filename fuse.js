const peopleList = require('./omFamilyTree.json');
// const peopleList = data.familyTree.people;
const peopleListEdited = peopleList.map((person) => {
  return {
    ...person,
    birthDate: person.birthDate?.toString(),
    deathDate: person.deathDate?.toString(),
  };
});
const Fuse = require('fuse.js');
const startTime = process.hrtime();
const options = {
  includeScore: true,
  keys: ['givenNames', 'surnames', 'birthDate', 'deathDate'],
  minMatchCharLength: 3,
  threshold: 0.4,
};

const fuse = new Fuse(peopleListEdited, options);

const result = fuse.search('182');
// const result = peopleList.filter(({ givenNames, surnames }) => {
//   return surnames && surnames.includes("O'Mahony");
// });
console.log(result.slice(0, 5), result.length);
const elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
console.log('It takes ' + elapsedSeconds + 'seconds');
// 0 results = 0.015
// 9 results = 0.051

function parseHrtimeToSeconds(hrtime) {
  var seconds = (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
  return seconds;
}
/*
Craft real world searches
Use big tree to test
*/
