let nums = [1, 3, 5, 8];
let init = 100;

fn = function sum(accum, curr) {
  return accum + curr;
};

var reduce = function (nums, fn, init) {
  let val = init;
  for (var i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

let reducedVal = reduce(nums, fn, init);
document.write(reducedVal);
