//Single Number
//https://leetcode.com/problems/single-number/?envType=problem-list-v2&envId=array
//Difficulty - Easy

var nums = [1, 2, 2, 1, 4];

var singleNumber = function (nums) {
  const uniqueEle = new Set(nums);
  const uniqueEleSum = Array.from(uniqueEle).reduce((ac, sum) => ac + sum);
  const totlElementSum = nums.reduce((ac, sum) => ac + sum);

  return 2 * uniqueEleSum - totlElementSum;
};

let singleEle = singleNumber(nums);
document.write(singleEle);
