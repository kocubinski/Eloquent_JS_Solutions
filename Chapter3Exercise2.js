/*We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

var flag = false;
var tempNum;

function isEven(num) {
  if (flag === false) {
    tempNum = num;
    if (num === 0) {
      flag = true;
      console.log("number is zero");
      return true;
    } 
    else if (num === 1) {
      flag = true;
      console.log("number is one");
      return false;
    } 
    else if (num > 1) {
      console.log("number is greater than 1")
      tempNum - 2;
      return isEven(tempNum);
    }
  }
}

// var a = isEven(10);
// console.log(a);
