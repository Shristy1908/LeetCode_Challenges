
var nums=[2,2,2,1,2,4,4];

var majorityElement = function (nums) {
  let count = 0;
  let maj = 0;
  for (var num of nums) {
    if (count === 0) {
      maj = num;
    }
    if (maj === num) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
};

var majEle=majorityElement(nums);
document.write(majEle)
