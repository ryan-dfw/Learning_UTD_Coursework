const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validateIntegerInput = (userInput) => {
  const num = parseInt(userInput);
  return !isNaN(num) && Number.isInteger(num) && Number.isSafeInteger(num)
    ? num
    : (() => {
        throw new Error("Thread panicking: non-integer provided");
      })();
};

const validateArrayInput = (userInput) => {
  const regex = /^(\d\s+)+\d$/;
  return regex.test(userInput)
    ? userInput
    : (() => {
        throw new Error(
          "Thread panicking: Invalid input. Enter single-digit positive integers separated by spaces."
        );
      })();
};

const promptForArray = (question, callback) => {
  rl.question(question, (userInput) => {
    try {
      const validArrayInput = validateArrayInput(userInput);
      const integersArray = validArrayInput.split(" ").map(Number);
      callback(integersArray);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
      rl.close();
    }
  });
};

rl.question("Provide a number to be multiplied\n", (userInput1) => {
  let validNum1;
  try {
    validNum1 = validateIntegerInput(userInput1);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
    rl.close();
    return;
  }

  rl.question("Provide another number to be multiplied by\n", (userInput2) => {
    let validNum2;
    try {
      validNum2 = validateIntegerInput(userInput2);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
      rl.close();
      return;
    }

    console.log(`${validNum1 * validNum2}`);

    promptForArray(
      "Provide the first array of single-digit numbers separated by spaces\n",
      (validArray1) => {
        promptForArray(
          "Provide the second array of single-digit numbers separated by spaces\n",
          (validArray2) => {
            const concatenatedArray = validArray1.concat(validArray2);
            const sortedArray = concatenatedArray.sort((a, b) => a - b);
            console.log(JSON.stringify(sortedArray));
            rl.close();
          }
        );
      }
    );
  });
});
