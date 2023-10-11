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
  process.exit(1);
};

rl.question("Provide a number to be multiplied\n", (userInput1) => {
  let validNum1;
  try {
    validNum1 = validateIntegerInput(userInput1);
  } catch (error) {
    console.error(error.message);
    rl.close();
    return;
  }

  rl.question(
    "Provide another number to have it be multiplied by\n",
    (userInput2) => {
      let validNum2;
      try {
        validNum2 = validateIntegerInput(userInput2);
      } catch (error) {
        console.error(error.message);
      }

      console.log(`${validNum1 * validNum2}`);

      rl.close();
    }
  );
});
