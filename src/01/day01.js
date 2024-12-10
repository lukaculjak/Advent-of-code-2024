import { readInput } from "../utils/utility.js";

// PART 1

(async () => {
  // const input = await readInput("./testData.txt");
  const input = await readInput("./input.txt");

  const col0 = input.map((arr) => arr[0]).sort((a, b) => a - b);
  const col1 = input.map((arr) => arr[1]).sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let num1 = col0[i];
    let num2 = col1[i];

    if (num1 > num2) {
      sum += num1 - num2;
    } else {
      sum += num2 - num1;
    }
  }

  console.log("PART 1 - Total: ", sum);
})();

// PART 2

(async () => {
  // const input = await readInput("./testData.txt");
  const input = await readInput("./input.txt");

  const col0 = input.map((arr) => arr[0]).sort((a, b) => a - b);
  const col1 = input.map((arr) => arr[1]).sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let num1 = col0[i];

    for (let j = 0; j < input.length; j++) {
      let num2 = col1[j];
      if (num1 === num2) {
        sum += num1;
      }
    }
  }

  console.log("PART 2 - Total: ", sum);
})();
