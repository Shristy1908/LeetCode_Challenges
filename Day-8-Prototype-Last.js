//Array Prototype last
//https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript
//Difficulty - Easy

let arr = [null, {}, 3];

Array.prototype.last = function () {
  if (this.length == 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

document.write(arr.last());
