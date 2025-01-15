//Palindrome Number
//https://leetcode.com/problems/palindrome-number/
//Difficulty - Easy

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let x1 = x;
  var s = 0;
  var r = 0;
  while (x > 0) {
    r = x % 10;
    s = s * 10 + r;
    x = Math.floor(x / 10);
  }
  if (s == x1) return true;
  else return false;
};

var res = isPalindrome(1231);
document.write(res);
