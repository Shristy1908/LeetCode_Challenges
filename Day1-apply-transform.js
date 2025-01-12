// Apply Transform over Each Element In Array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Difficulty level - Easy

let arr = [1, 2, 3];
let newArr = [];

var fn = function plusone(n) {
  return n + 1;
};

var map = function (arr, fn) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

newArr = map(arr, fn);
document.write(newArr);
console.log("newArr" + newArr);
