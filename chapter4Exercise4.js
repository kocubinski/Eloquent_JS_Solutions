// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

// To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

// // Your code here.

// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

function deepEqual(val1, val2) {
  var temp = "",
    	temp2 = "";
  if ((val1 === null) || (val2 === null)) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  } else if (typeof val1 === "object" && typeof val2 === "object") {
    temp = Object.keys(val1);
    temp2 = Object.keys(val2);
    temp = temp.toString();
    temp2 = temp2.toString();
    for (key in val1) {
      temp = temp.concat(val1[key]);
    }
    for (key in val2) {
      temp2 = temp2.concat(val2[key]);
    }
    if (temp === temp2) {
      return true;
    } else {
      return false;
    }
  } else if (val1 === val2) {
    return true;
  } else if (val1 !== val2) {
    return false;
  }
}

obj1 = {
  name: "Chad",
  gender: "male",
  wilks: 370
};

obj2 = {
  name: "Chad",
  gender: "male",
  power: 370
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(1, 1));
console.log(deepEqual("hi", 1));
console.log(deepEqual(null, obj1));
console.log(deepEqual(null, null));
