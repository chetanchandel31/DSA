function longestConsecutive(nums: number[]): number {
  // map for existing nums
  let res = 0;
  const existingNums: Record<number, true> = {};
  nums.forEach((num) => {
    existingNums[num] = true;
  });

  // loop over all nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // for single num
    // if its not 1st num of sequence, return
    if (existingNums[num - 1]) {
      continue;
    }
    // if it is, measure its length and update res
    let length = 1;
    let curr = num;
    while (true) {
      if (existingNums[curr + 1]) {
        length++;
        curr++;
      } else {
        break;
      }
    }

    res = Math.max(res, length);
  }

  return res;
}
