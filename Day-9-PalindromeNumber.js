//Palindrome Number
//https://leetcode.com/problems/palindrome-number/
//Difficulty - Easy

var x = 121;

var isPalindrome = function (x) {
  return x === +x.toString().split("").reverse().join("");
};

document.write(isPalindrome(x));
