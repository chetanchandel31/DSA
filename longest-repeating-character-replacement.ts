// imp: store the `maxFrequency` instead of `mostFrequentChar` (because mostFrequentChar can change as l progresses)

/*
algorithm:
- sliding window (l = 0; loop with r)
- check for in-valid window (windowLength - maxFrequency > k) -> increase l
- update `map` and `maxFrequency` before the check
- update the `longestSubStrLength` after the check
*/

function characterReplacement(s: string, k: number): number {
  let longestSubStrLength = 0;

  let charToFrequencyMap: Record<string, number> = {};
  let maxFrequency: number = 0;

  let lowI = 0;

  for (let highI = 0; highI < s.length; highI++) {
    // update charToFreqMap and mostFreqChar
    charToFrequencyMap[s[highI]] = (charToFrequencyMap[s[highI]] ?? 0) + 1;
    maxFrequency = Math.max(maxFrequency, charToFrequencyMap[s[highI]]);

    // while invalid range (rangeLength - charToFrequency[mostFrequent]) > k
    // move lowI and adjust frequency map
    while (highI - lowI + 1 - maxFrequency > k) {
      if (s[lowI] in charToFrequencyMap) {
        charToFrequencyMap[s[lowI]] = charToFrequencyMap[s[lowI]] - 1;
      }
      lowI++;
    }

    // update longestSubStrLength
    longestSubStrLength = Math.max(longestSubStrLength, highI - lowI + 1);
  }

  return longestSubStrLength;
}

console.log(characterReplacement("AAAAABBBBCBB", 4));
