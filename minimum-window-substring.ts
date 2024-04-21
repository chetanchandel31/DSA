function minWindow(s: string, t: string): string {
  // need
  let needMap: Record<string, number> = {};
  let need: number = 0;
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (needMap[char]) {
      needMap[char] += 1;
    } else {
      needMap[char] = 1;
      need++;
    }
  }

  // have
  let haveMap: Record<string, number> = {};
  let have = 0;

  // result
  let minL = 0;
  let minR = s.length; // so we can check if it was updated at all

  // sliding window
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    // increase HAVE
    haveMap[char] = (haveMap[char] || 0) + 1;
    if (haveMap[char] === needMap[char]) {
      have++;
    }

    // while need === have
    while (need === have) {
      // check if found better result
      if (r - l + 1 < minR - minL + 1) {
        minL = l;
        minR = r;
      }
      // move l, update HAVE
      if (s[l] in haveMap && haveMap[s[l]] === needMap[s[l]]) {
        have--;
      }
      if (haveMap[s[l]] > 0) {
        haveMap[s[l]]--;
      }
      if (haveMap[s[l]] === 0) {
        delete haveMap[s[l]];
      }
      l++;
    }
  }

  return minR - minL + 1 > s.length ? "" : s.slice(minL, minR + 1);
}

console.log(minWindow("t", "z"));
