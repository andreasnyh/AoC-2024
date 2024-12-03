import { test_input, input } from "./input.mjs";

// --- Part 1 ---
const inputArr = test_input
  .trim()
  .replaceAll(/\D+/gm, ",")
  .split(",")
  .map(Number);

const [a1, a2] = inputArr.reduce(
  ([a1, a2], num, i) => {
    i % 2 === 0 ? a1.push(num) : a2.push(num);
    return [a1, a2];
  },
  [[], []],
);

const sorted1 = a1.sort((a, b) => a - b);
const sorted2 = a2.sort((a, b) => a - b);

const sum = sorted1.reduce(
  (acc, num, i) => acc + Math.abs(num - sorted2[i]),
  0,
);
console.log("Part 1 answer: ", sum);

// --- Part 2 ---

const numberCount = sorted2.reduce((acc, curr) => {
  acc[curr] ? acc[curr]++ : (acc[curr] = 1);
  return acc;
}, {});

const similarityScores = [];
sorted1.forEach((num) => {
  similarityScores.push(num * (numberCount[num] || 0));
});
const sum2 = similarityScores.reduce((acc, curr) => acc + curr, 0);

console.log("Part 2 answer: ", sum2);
