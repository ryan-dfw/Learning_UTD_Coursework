const unsortedArray = [
  [2, 4, 6, 8, 11, 20, 15, 22],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [70, 42, 55, 81, 21, 91, 34],
  [2, 4, 6, 8, 10, 11, 12],
];

const oddArraysArray = [];

for (const innerArray of unsortedArray) {
  const oddArray = [];
  for (const item of innerArray) {
    if (item % 2 === 1) {
      oddArray.push(item);
    }
  }
  oddArraysArray.push(oddArray);
}

for (const oddArray of oddArraysArray) {
  const formattedOutput = oddArray.join(", ");
  console.log(formattedOutput);
}
