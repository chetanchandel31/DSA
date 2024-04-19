function findMin(nums: number[]): number {
  let lowI: number = 0;
  let highI: number = nums.length - 1;

  let res = nums[0];

  while (lowI < highI) {
    if (nums[lowI] <= nums[highI]) {
      res = Math.min(nums[lowI], res);
      break;
    }

    let midI = Math.floor(highI - lowI / 2);
    res = Math.min(nums[midI], res);

    if (nums[midI] >= nums[lowI]) {
      lowI = midI + 1;
    } else {
      highI = midI - 1;
    }
  }

  return res;
}
