import { test_input, input } from "./input.mjs";

// --- Part 1 ---
console.time("Time");
let sum = 0;
const inputArr = test_input
  .trim()
  .split(/\n/)
  .map((row) => row.trim().split(" ").map(Number));

function isRising(arr) {
  return arr[0] < arr[1];
}

function isSafe(row) {
  const isRisingFlag = isRising(row);

  for (let index = 1; index < row.length; index++) {
    const num = row[index];
    const prevNum = row[index - 1];

    // Check order
    if (isRisingFlag && num < prevNum) return false;
    if (!isRisingFlag && num > prevNum) return false;

    // Check difference
    const diff = Math.abs(num - prevNum);
    if (diff < 1 || diff > 3) return false;
  }

  return true;
}

inputArr.forEach((row) => {
  if (isSafe(row)) {
    sum++;
  }
});

console.timeEnd("Time");
console.log("Part 1 answer: ", sum);

// --- Part 2 ---
console.time("Time 2");
// Reset sum
sum = 0;
inputArr.forEach((row) => {
  if (isSafe(row)) {
    sum++;
    return
  } else {
    for (let i = 0; i < row.length; i++) {
      const _row = [...row]
      _row.splice(i, 1)
      if (isSafe(_row)) {
        sum++
        break
      }
    }
  }
});
console.timeEnd("Time 2");
console.log("Part 2 answer: ", sum);
