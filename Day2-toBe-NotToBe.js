// To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Difficulty Level - Easy

var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) {
        throw new Error("Not Equal");
      } else {
        return true;
      }
    },
    notToBe: (val2) => {
      if (val === val2) {
        throw new Error("Equal");
      } else {
        return true;
      }
    },
  };
};

let b = expect(5).toBe(5);

document.write(b);
