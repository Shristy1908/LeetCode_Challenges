//Function Composition
//https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
//Difficulty - Easy

var compose = function (functions) {
  return function (x) {
    for (var i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
var val = fn(4);

document.write(val);
