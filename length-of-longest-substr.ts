/*
if (charToIndexMap[s[highI]] === undefined) {
      charToIndexMap[s[highI]] = highI;
}

missed adding first char to map
*/

function lengthOfLongestSubstring(s: string): number {
  let longestSubStrLength = 0;
  let charToIndexMap: Record<string, number> = {};

  let lowI = 0;
  let highI = 0;

  while (highI < s.length) {
    // update map
    if (charToIndexMap[s[highI]] === undefined) {
      charToIndexMap[s[highI]] = highI;
    }

    // update longestSubStrLength
    const subStrLength = highI - lowI + 1;
    longestSubStrLength = Math.max(subStrLength, longestSubStrLength);

    // move highI
    highI++;
    const highChar = s[highI];
    const isRepeated =
      charToIndexMap[highChar] !== undefined &&
      charToIndexMap[highChar] < highI &&
      charToIndexMap[highChar] >= lowI;
    // if s[highI] is repeated -> move lowI & update map
    if (isRepeated) {
      lowI = charToIndexMap[highChar] + 1;
    }
    charToIndexMap[highChar] = highI;
  }

  return longestSubStrLength;
}
