//Valid Palindrome
//https://leetcode.com/problems/valid-palindrome/description/?envType=problem-list-v2&envId=string
//difficulty - Easy 

var s = " ";

var isPalindrome = function (s) {
  const filteredString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = filteredString.length - 1;

  while (left < right) {
    if (filteredString[left] !== filteredString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

var res = isPalindrome(s);
document.write(res);
