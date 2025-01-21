//Fibonacci Number
//https://leetcode.com/problems/fibonacci-number/
//Difficulty - Easy

var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

var res = fib(4);
document.write(res);
