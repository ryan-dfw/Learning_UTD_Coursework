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

const forwardsArrays = [
  [1, 2, 3],
  [1, 3, 5, 7, 9, 11],
  [20, 50, 30, 60, 200],
  [1, -1, 2, -3, 5, -8, 13],
];

numbersArrays.forEach((innerArray) =>
  console.log(innerArray.filter((item) => item % 2 === 1).join(", "))
);

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

forwardsArrays.forEach((innerArray) =>
  console.log(innerArray.reverse().join(", "))
);

for (var i = 1; i <= 100; i++) {
  var result = "";
  if (i % 3 === 0) {
    result = "Fizz";
  }
  if (i % 5 === 0) {
    result += "Buzz";
  }
  console.log(result || i);
}

// begin here the code

// let there be an immutable array of arrays of values such as:
// 2, 4, 6, 8, 11, 20, 15, 22
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// 70, 42, 55, 81, 21, 91, 34
// 2, 4, 6, 8, 10, 11, 12

// let there be an immutable array of strings such as:
// hello
// ukulele
// awesome
// onomatopoeia
// textbook

// let there be an immutable array of numbers such as:
// 1, 2, 3
// 1, 3, 5, 7, 9, 11
// 20, 50, 30, 60, 200
// 1, -1, 2, -3, 5, -8, 13

// considering each inner array of the numbers arrays,
// print to system output a filtered consideration such items wherein
// shall the modulo of the item divided by two strictly equal the literal interger 1
// a join function is called passing a string literal comma and space to assist with formatting

// considering each string in the array of strings, let there be an arrow function such that:
// with a count of consonants reset each iteration and
// with a count of vowels reset each iteration
// for each character in the considered string
// should the character test to be aeiou, increment the vowel count by 1, else increment the consonant count by 1
// print to standard
