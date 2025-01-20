//Missing Number
//https://leetcode.com/problems/missing-number/?envType=problem-list-v2&envId=array
//Difficulty - Easy

var nums = [0, 2, 4, 1];

var missingNumber = function (nums) {
  var numLen = nums.length;

  var expectedSum = (numLen * (numLen + 1)) / 2;
  var actualSum = nums.reduce((ac, sum) => ac + sum);

  return expectedSum - actualSum;
};

var missingNo = missingNumber(nums);
document.write(missingNo);
