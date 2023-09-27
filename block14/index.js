const numbersArrays = [
  [2, 4, 6, 8, 11, 20, 15, 22],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [70, 42, 55, 81, 21, 91, 34],
  [2, 4, 6, 8, 10, 11, 12],
];

numbersArrays.forEach((innerArray) =>
  console.log(innerArray.filter((item) => item % 2 === 1).join(", "))
);

const stringsArray = [
  "hello",
  "ukulele",
  "awesome",
  "onomatopoeia",
  "textbook",
];

stringsArray.forEach((string) => {
  let consonantCount = 0;
  let vowelCount = 0;
  for (const character of string) {
    /[aeiou]/i.test(character) ? vowelCount++ : consonantCount++;
  }
  console.log(
    `${string} has ${consonantCount} consonants and ${vowelCount} vowels`
  );
});

const forwardsArrays = [
  [1, 2, 3],
  [1, 3, 5, 7, 9, 11],
  [20, 50, 30, 60, 200],
  [1, -1, 2, -3, 5, -8, 13],
];

forwardsArrays.forEach((innerArray) =>
  console.log(innerArray.reverse().join(", "))
);
