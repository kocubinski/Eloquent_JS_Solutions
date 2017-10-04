// compute the average age difference between mothers and children (the age of the mother when the child is born).

// our data
var ANCESTRY_FILE = require('./data.js');

// to add up the members of our array
function getSum(total, num) {
  return total + num;
}

// easier to do things with our data
var data = JSON.parse(ANCESTRY_FILE),
// the year of birth
  	bornYear,
// their mother's name
  	motherName,
// their mother's birth year
  	motherBornYear,
// store the difference in their ages
  	ageDiffArr = [];

// iterate over data
for (var i = 0; i < data.length; i++) {
  // we only care about people whose mother we can find so we can calculate an age difference
  if (data[i].mother !== null) {
  	// the year of birth
    bornYear = data[i].born;
    // their mother's name
    motherName = data[i].mother;
    // iterate over the data again
    for (var j = 0; j < data.length; j++) {
    	// find the object whose name property matches mom's name
      if (data[j].name === motherName) {
      	// mom's birth year
        motherBornYear = data[j].born;
        // add to the array their age difference
        ageDiffArr.push(bornYear - motherBornYear);
      }
    }
  }
}

// add up all members of the array and divide by the number of members to calculate the average
var ageDiffTotal = ageDiffArr.reduce(getSum),
  	avgAgeDiff = ageDiffTotal / ageDiffArr.length;

// display the average to 2 decimals
console.log(avgAgeDiff.toFixed(2));