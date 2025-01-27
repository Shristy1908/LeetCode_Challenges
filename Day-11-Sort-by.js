//Sort By

//https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript

// Difficulty - Easy

let arr = [2, 4, 1, 5, 7];
const fn = (x) => x;

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const result = sortBy(arr, fn);

document.write(result);
