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
  const inOrder = row.every((num, index) => {
    if (index === 0) return true;
    if (isRising(row)) {
      return num >= row[index - 1];
    }

    return num <= row[index - 1];
  });

  if (!inOrder) return false;

  return row.every((num, index) => {
    if (index === 0) return true;
    const diff = Math.abs(num - row[index - 1]);
    return diff >= 1 && diff <= 3;
  });
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
