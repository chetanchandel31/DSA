function minWindow(s: string, t: string): string {
  // what we need
  const needMap: Record<string, number> = {};
  let need = 0;

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!needMap[char]) {
      need++;
    }
    needMap[char] = (needMap[char] || 0) + 1;
  }

  // what we have
  const haveMap: Record<string, number> = {};
  let have = 0;

  // sliding window
  let l = 0;
  // keep track of min-sliding window
  let minL = 0;
  let minR = s.length; // to check if it was ever updated

  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    // update have
    if (needMap[char]) {
      haveMap[char] = (haveMap[char] || 0) + 1;
    }
    if (haveMap[char] && haveMap[char] === needMap[char]) {
      have++;
    }

    while (need === have) {
      // update min-window
      if (r - l < minR - minL) {
        minL = l;
        minR = r;
      }
      // update have
      if (haveMap[s[l]] && haveMap[s[l]] === needMap[s[l]]) {
        have--;
      }
      if (haveMap[s[l]]) {
        haveMap[s[l]] = haveMap[s[l]] - 1;
      }
      // move l
      l++;
    }
  }

  return minR === s.length ? "" : s.slice(minL, minR + 1);
}

console.log(minWindow("t", "z"));
