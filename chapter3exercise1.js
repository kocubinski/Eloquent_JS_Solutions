/* Write a function min that takes two arguments and returns their minimum.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10 */

function min(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (num1 === num2){
    console.log("Equal");
  } 
  else if (num1 > num2) {
    console.log(num2);
  }
  else if (num2 > num1){
    console.log(num1);
  }
}
