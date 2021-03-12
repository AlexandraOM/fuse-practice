const peopleList = require("./omFamilyTree.json");
const lunr = require("lunr");
const startTime = process.hrtime();
var idx = lunr(function () {
  this.ref("id");
  this.field("givenNames");
  this.field("surnames");
  this.field("birthDate");
  this.field("deathDate");

  peopleList.forEach(function (person) {
    this.add(person);
  }, this);
});
console.log(JSON.stringify(idx.search("caroni")));
const elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));
console.log("It takes " + elapsedSeconds + "seconds");

function parseHrtimeToSeconds(hrtime) {
  var seconds = (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
  return seconds;
}
