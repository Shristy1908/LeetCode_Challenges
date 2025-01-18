// Add Strings
// https://leetcode.com/problems/add-strings/description/
// Difficulty - Easy


var num1 = "123";
var num2 = "345";

var addStrings = function (num1, num2) {
  result = BigInt(num1) + BigInt(num2);
  return result.toString();
};

document.write(result);
