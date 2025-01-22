//Chunk Array
//https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript
//Difficulty - Easy

let arr = [1, 2, 3, 4, 5, 6, 7];
let size = 3;

var chunk = function (arr, size) {
  let result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, size + i));
  }
  return result;
};

document.write(JSON.stringify(chunk(arr, size)));
