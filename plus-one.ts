/*
w/o using BigInt conversion of large strings to Numbers get messed up
*/

function plusOne(digits: number[]): number[] {
  let number: string = "";

  digits.forEach((_digit) => {
    number += `${_digit}`;
  });

  const res: number[] = [];
  const resStr = (BigInt(number) + BigInt(1)).toString();

  for (const char of resStr) {
    res.push(Number(char));
  }

  return res;
}
