//Filter Elements from Array
//https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
//difficulty level - Easy

let arr = [9, 20, 30];
let newAr = [];

fn = function greaterThan10(n) {
  return n > 10;
};

var filter = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) newArr.push(arr[i]);
  }
  return newArr;
};

newAr = filter(arr, fn);
document.write("new" + newAr);
console.log(newAr);
