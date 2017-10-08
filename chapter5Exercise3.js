// Compute and output the average-age of the people in the ancestry data-set per century. 

// Eloquent JavaScript's given ancestry array.
var ejsAncestryArr = [{
    "name": "Carolus Haverbeke",
    "sex": "m",
    "born": 1832,
    "died": 1905,
    "father": "Carel Haverbeke",
    "mother": "Maria van Brussel"
  },
  {
    "name": "Emma de Milliano",
    "sex": "f",
    "born": 1876,
    "died": 1956,
    "father": "Petrus de Milliano",
    "mother": "Sophia van Damme"
  },
  {
    "name": "Maria de Rycke",
    "sex": "f",
    "born": 1683,
    "died": 1724,
    "father": "Frederik de Rycke",
    "mother": "Laurentia van Vlaenderen"
  },
  {
    "name": "Jan van Brussel",
    "sex": "m",
    "born": 1714,
    "died": 1748,
    "father": "Jacobus van Brussel",
    "mother": "Joanna van Rooten"
  },
  {
    "name": "Philibert Haverbeke",
    "sex": "m",
    "born": 1907,
    "died": 1997,
    "father": "Emile Haverbeke",
    "mother": "Emma de Milliano"
  },
  {
    "name": "Jan Frans van Brussel",
    "sex": "m",
    "born": 1761,
    "died": 1833,
    "father": "Jacobus Bernardus van Brussel",
    "mother": null
  },
  {
    "name": "Pauwels van Haverbeke",
    "sex": "m",
    "born": 1535,
    "died": 1582,
    "father": "N. van Haverbeke",
    "mother": null
  },
  {
    "name": "Clara Aernoudts",
    "sex": "f",
    "born": 1918,
    "died": 2012,
    "father": "Henry Aernoudts",
    "mother": "Sidonie Coene"
  },
  {
    "name": "Emile Haverbeke",
    "sex": "m",
    "born": 1877,
    "died": 1968,
    "father": "Carolus Haverbeke",
    "mother": "Maria Sturm"
  },
  {
    "name": "Lieven de Causmaecker",
    "sex": "m",
    "born": 1696,
    "died": 1724,
    "father": "Carel de Causmaecker",
    "mother": "Joanna Claes"
  },
  {
    "name": "Pieter Haverbeke",
    "sex": "m",
    "born": 1602,
    "died": 1642,
    "father": "Lieven van Haverbeke",
    "mother": null
  },
  {
    "name": "Livina Haverbeke",
    "sex": "f",
    "born": 1692,
    "died": 1743,
    "father": "Daniel Haverbeke",
    "mother": "Joanna de Pape"
  },
  {
    "name": "Pieter Bernard Haverbeke",
    "sex": "m",
    "born": 1695,
    "died": 1762,
    "father": "Willem Haverbeke",
    "mother": "Petronella Wauters"
  },
  {
    "name": "Lieven van Haverbeke",
    "sex": "m",
    "born": 1570,
    "died": 1636,
    "father": "Pauwels van Haverbeke",
    "mother": "Lievijne Jans"
  },
  {
    "name": "Joanna de Causmaecker",
    "sex": "f",
    "born": 1762,
    "died": 1807,
    "father": "Bernardus de Causmaecker",
    "mother": null
  },
  {
    "name": "Willem Haverbeke",
    "sex": "m",
    "born": 1668,
    "died": 1731,
    "father": "Lieven Haverbeke",
    "mother": "Elisabeth Hercke"
  },
  {
    "name": "Pieter Antone Haverbeke",
    "sex": "m",
    "born": 1753,
    "died": 1798,
    "father": "Jan Francies Haverbeke",
    "mother": "Petronella de Decker"
  },
  {
    "name": "Maria van Brussel",
    "sex": "f",
    "born": 1801,
    "died": 1834,
    "father": "Jan Frans van Brussel",
    "mother": "Joanna de Causmaecker"
  },
  {
    "name": "Angela Haverbeke",
    "sex": "f",
    "born": 1728,
    "died": 1734,
    "father": "Pieter Bernard Haverbeke",
    "mother": "Livina de Vrieze"
  },
  {
    "name": "Elisabeth Haverbeke",
    "sex": "f",
    "born": 1711,
    "died": 1754,
    "father": "Jan Haverbeke",
    "mother": "Maria de Rycke"
  },
  {
    "name": "Lievijne Jans",
    "sex": "f",
    "born": 1542,
    "died": 1582,
    "father": null,
    "mother": null
  },
  {
    "name": "Bernardus de Causmaecker",
    "sex": "m",
    "born": 1721,
    "died": 1789,
    "father": "Lieven de Causmaecker",
    "mother": "Livina Haverbeke"
  },
  {
    "name": "Jacoba Lammens",
    "sex": "f",
    "born": 1699,
    "died": 1740,
    "father": "Lieven Lammens",
    "mother": "Livina de Vrieze"
  },
  {
    "name": "Pieter de Decker",
    "sex": "m",
    "born": 1705,
    "died": 1780,
    "father": "Joos de Decker",
    "mother": "Petronella van de Steene"
  },
  {
    "name": "Joanna de Pape",
    "sex": "f",
    "born": 1654,
    "died": 1723,
    "father": "Vincent de Pape",
    "mother": "Petronella Wauters"
  },
  {
    "name": "Daniel Haverbeke",
    "sex": "m",
    "born": 1652,
    "died": 1723,
    "father": "Lieven Haverbeke",
    "mother": "Elisabeth Hercke"
  },
  {
    "name": "Lieven Haverbeke",
    "sex": "m",
    "born": 1631,
    "died": 1676,
    "father": "Pieter Haverbeke",
    "mother": "Anna van Hecke"
  },
  {
    "name": "Martina de Pape",
    "sex": "f",
    "born": 1666,
    "died": 1727,
    "father": "Vincent de Pape",
    "mother": "Petronella Wauters"
  },
  {
    "name": "Jan Francies Haverbeke",
    "sex": "m",
    "born": 1725,
    "died": 1779,
    "father": "Pieter Bernard Haverbeke",
    "mother": "Livina de Vrieze"
  },
  {
    "name": "Maria Haverbeke",
    "sex": "m",
    "born": 1905,
    "died": 1997,
    "father": "Emile Haverbeke",
    "mother": "Emma de Milliano"
  },
  {
    "name": "Petronella de Decker",
    "sex": "f",
    "born": 1731,
    "died": 1781,
    "father": "Pieter de Decker",
    "mother": "Livina Haverbeke"
  },
  {
    "name": "Livina Sierens",
    "sex": "f",
    "born": 1761,
    "died": 1826,
    "father": "Jan Sierens",
    "mother": "Maria van Waes"
  },
  {
    "name": "Laurentia Haverbeke",
    "sex": "f",
    "born": 1710,
    "died": 1786,
    "father": "Jan Haverbeke",
    "mother": "Maria de Rycke"
  },
  {
    "name": "Carel Haverbeke",
    "sex": "m",
    "born": 1796,
    "died": 1837,
    "father": "Pieter Antone Haverbeke",
    "mother": "Livina Sierens"
  },
  {
    "name": "Elisabeth Hercke",
    "sex": "f",
    "born": 1632,
    "died": 1674,
    "father": "Willem Hercke",
    "mother": "Margriet de Brabander"
  },
  {
    "name": "Jan Haverbeke",
    "sex": "m",
    "born": 1671,
    "died": 1731,
    "father": "Lieven Haverbeke",
    "mother": "Elisabeth Hercke"
  },
  {
    "name": "Anna van Hecke",
    "sex": "f",
    "born": 1607,
    "died": 1670,
    "father": "Paschasius van Hecke",
    "mother": "Martijntken Beelaert"
  },
  {
    "name": "Maria Sturm",
    "sex": "f",
    "born": 1835,
    "died": 1917,
    "father": "Charles Sturm",
    "mother": "Seraphina Spelier"
  },
  {
    "name": "Jacobus Bernardus van Brussel",
    "sex": "m",
    "born": 1736,
    "died": 1809,
    "father": "Jan van Brussel",
    "mother": "Elisabeth Haverbeke"
  }
];

// A function that takes in an EJS-like ancestry-array
// and returns an array where each member is the century-of-death for each member of the inputted array.
function getDeathCent(ancestryArr) {
  // the array we will return, starts empty
  var centuryArr = [];

  // Grab the year of death from the inputted ancestry-array, turn it into a string, 
  // and grab the first two members of the string, and put each into our array we will eventually return.
  for (var i = 0; i < ancestryArr.length; i++) {
    centuryArr.push(ancestryArr[i].died.toString().substr(0, 2));
  }

  // Convert each member of our array of strings to their numeric equivalents, then add 1. 
  // Now each member is representative of the century-of-death for each member of the inputted array.
  function getCentury() {
    for (var i = 0; i < centuryArr.length; i++) {
      centuryArr[i] = parseInt(centuryArr[i]);
      centuryArr[i] += 1;
    }
    return ancestryArr;
  }

  getCentury(centuryArr);
  console.log(centuryArr);
  return centuryArr;
}

// A function that takes in an EJS-like ancestry-array 
// and returns an array where each member is the year-of-death for each member of the inputted array.
function getAgeAtDeath(ancestryArr) {
  // the array we will return, starts empty
  var ageAtDeathArr = [];

  // For each member of our EJS-like ancestry-array, 
  // subtract the year-of-death from the year-of-birth to calculate the age at time-of-death. 
  // Then put each time-of-death age into the array we will eventually return.
  for (var i = 0; i < ancestryArr.length; i++) {
    ageAtDeathArr.push(ancestryArr[i].died - ancestryArr[i].born);
  }
  console.log(ageAtDeathArr);
  return ageAtDeathArr;
}

// A function that will take our array of centuries-when-deaths occurred, 
// and our array of ages-at-death, then return an object where the key-names 
// are the centuries-of-death that exist in our data-set, 
// and the values will be an array of the ages of people who died during that respective century.
function convert(centuryOfDeathArr, ageOfDeathArr) {
  // the object we will return, starts empty
  var newObj = {};

  // Set the key-names of the new object equal to the centuries-of-death that exist in our initial data-set, 
  // and set them equal to an empty array.
  for (var i = 0; i < centuryOfDeathArr.length; i++) {
    newObj[centuryOfDeathArr[i]] = [];
  }
  // Fill those empty arrays with the ages-of-deaths for the people who correspond to that century.
  for (var i = 0; i < centuryOfDeathArr.length; i++) {
    newObj[centuryOfDeathArr[i]].push(ageOfDeathArr[i]);
  }
  console.log(newObj);
  return newObj;
}

// A function that will take our century: ages-of-death object, and returns the average of each array.
function convertedObjPropAvg(convertedObj) {
  // A function we will use in conjuction with reduce() to sum all members of each array.
  function getSum(total, num) {
    return total + num;
  }
  // For every property in our object, which are all arrays, add up each array's members 
  // and then divide by their array-length to find their average. 
  // Now, each key-name will be set to the average age-of-death for that century.
  for (key in convertedObj) {
    var temp = convertedObj[key].reduce(getSum);
    convertedObj[key] = temp / convertedObj[key].length;
  }
  console.log(convertedObj);
  return convertedObj;
}

// Take our object that is now composed of key-names that are centuries, 
// and key-values which are average ages-of-death for that respective century, 
// round the averages to one decimal (to correspond to the answers given by EJS), 
// and print them with their key-names.
function print(convertedObj) {
  for (key in convertedObj) {
    console.log(key + ": " + convertedObj[key].toFixed(1));
  }
}

var a = getDeathCent(ejsAncestryArr);
var b = getAgeAtDeath(ejsAncestryArr);
var c = convert(a, b);
var d = convertedObjPropAvg(c);
var e = print(d);

// kocubinski's version

var peopleByCentury = ejsAncestryArr.reduce(function(acc, p) {
    var century = parseInt(p.died.toString().substr(0, 2)) + 1,
	people = acc[century] || [];

    people.push(p);
    acc[century] = people;
    return acc;
}, {});

var averages = Object.keys(peopleByCentury).map(function (century) {
    var lifeSpans = peopleByCentury[century].map(function(p) {
	return p.died - p.born;
    });
    return [ century,
	     lifeSpans.reduce(function(sum, span) {
		 return sum + span;
	     }, 0) / lifeSpans.length ];
});

console.log(averages);

