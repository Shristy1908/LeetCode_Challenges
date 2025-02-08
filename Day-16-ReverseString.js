//Reverse String
//https://leetcode.com/problems/reverse-string/description/
//Difficulty - Easy

var s = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

reverseString(s);
document.write(s);
