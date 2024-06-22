/*
- identify right/left side by checking (l <= m)
  - on left side
    - move right if -> target > mid || target < l
    - else move left
  - on right side
    - move left if target < mid || target > r
    - else move right
*/

function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    // check for left side
    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    // check for right side
    else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
}
