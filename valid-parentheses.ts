function isValid(s: string): boolean {
  const map: Record<string, string> = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  const stack: string[] = [];

  // go over arr
  for (const char of s) {
    // check if its opening/closing bracket
    // if opening bracket -> add to stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // if closing -> check if last element is valid opening bracket
      if (stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
