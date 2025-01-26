let nums = [1, 4, 6, 2, 3, 9, 5];

const mergeSort = (nums) => {
  const mid = Math.floor(nums.length / 2);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  const leftSort = merge(left);
  const rightSort = merge(right);

  return merge(leftSort, rightSort);
};

const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
};

mergeSort(nums);
