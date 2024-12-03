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

function isSafe(arr) {
  const isArrRising = isRising(arr);
  const inOrder = arr.every((num, index) => {
    if (index === 0) return true;
    if (isArrRising) {
      return num >= arr[index - 1];
    } else {
      return num <= arr[index - 1];
    }
  });

  if (!inOrder) return false;

  const isChangeSafe = arr.every((num, index) => {
    if (index === 0) return true;
    const diff = Math.abs(num - arr[index - 1]);
    return diff >= 1 && diff <= 3;
  });

  return isChangeSafe;
}

inputArr.forEach((row) => {
  if (isSafe(row)) {
    sum++;
  }
});

console.timeEnd("Time");
console.log("Part 1 answer: ", sum);
