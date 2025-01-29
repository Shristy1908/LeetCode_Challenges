//Allow One function call
//https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
//Difficulty - Easy

var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a * b * c;
console.log(once(fn));
