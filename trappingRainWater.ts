/*
- we ONLY need the smallest among maxLeft and maxRight
- if we traverse "smallest side first", it will end at longest building


- move pointer
- update maxLeft/maxRight
- update res
*/

function trap(height: number[]): number {
  let l = 0;
  let r = height.length - 1;

  let maxLeft = height[l];
  let maxRight = height[r];

  let res = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      l++;
      maxLeft = Math.max(maxLeft, height[l]);
      res += maxLeft - height[l];
    } else {
      r--;
      maxRight = Math.max(maxRight, height[r]);
      res += maxRight - height[r];
    }
  }

  return res;
}
