const numbersArrays = [
  [2, 4, 6, 8, 11, 20, 15, 22],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [70, 42, 55, 81, 21, 91, 34],
  [2, 4, 6, 8, 10, 11, 12],
];

const stringsArray = [
  "hello",
  "ukulele",
  "awesome",
  "onomatopoeia",
  "textbook",
];

numbersArrays.forEach((innerArray) =>
  console.log(innerArray.filter((item) => item % 2 === 1).join(", "))
);

stringsArray.forEach((string) => {
  let consonantCount = 0;
  let vowelCount = 0;

  for (const character of string) {
    if (/[aeiou]/i.test(character)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
  console.log(
    `${string} has ${consonantCount} consonants and ${vowelCount} vowels`
  );
});
