/*
- remove l from have and haveMap twice
*/

function checkInclusion(s1: string, s2: string): boolean {
  // need and need map
  let need = 0;
  const needMap: Record<string, number> = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (!needMap[char]) {
      need++;
    }
    needMap[char] = (needMap[char] || 0) + 1;
  }

  let have = 0;
  let haveMap: Record<string, number> = {};
  // check first window, update have and haveMap, return `true` if need === have
  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    if (!char) break;
    if (needMap[char]) {
      haveMap[char] = (haveMap[char] || 0) + 1;
    }
    if (haveMap[char] !== undefined && haveMap[char] === needMap[char]) {
      have++;
    }
    if (need === have) return true;
  }

  // move the window as long as r < s2.length, keep updating have/haveMap, return `true` when need === have
  let l = 1;
  // remove l from haveMap and have
  if (haveMap[s2[0]]) {
    if (haveMap[s2[0]] === needMap[s2[0]]) {
      have--;
    }
    haveMap[s2[0]] -= 1;
  }
  for (let r = s1.length; r < s2.length; r++) {
    const char = s2[r];
    if (!char) break;
    if (needMap[char]) {
      haveMap[char] = (haveMap[char] || 0) + 1;
    }
    if (haveMap[char] !== undefined && haveMap[char] === needMap[char]) {
      have++;
    }
    if (need === have) return true;

    // remove l from haveMap and have
    if (haveMap[s2[l]]) {
      if (haveMap[s2[l]] === needMap[s2[l]]) {
        have--;
      }
      haveMap[s2[l]] -= 1;
    }
    l++;
  }

  return false;
}

checkInclusion("adc", "dcda");
