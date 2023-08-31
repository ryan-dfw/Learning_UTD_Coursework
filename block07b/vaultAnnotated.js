// for rubric purposes, psuedocode in single line comments; comments in multilines //

// let each key = a number
let key1 = 10;                                                                      /* sets a number to a variable */
let key2 = 40;                                                                      /* sets a number to a variable */
let key3 = 39;                                                                      /* sets a number to a variable */


// do main;
main();                                                                             /* calls the main function */

// a function called main (considering nothing) should be;
function main() {                                                                   /* defines a main function */
    // terminal.exist();
    const readline = require('readline');                                           /* imports the node.js readline module */
    const rl = readline.createInterface({                                           /* establishes a interface to read user input */
        input: process.stdin,                                                       /* loads input from standard library */
        output: process.stdout                                                      /* loads output from standard library */
        });
    //terminal.askquestion(userInput);
    rl.question('What do you think the first number is?\n', (userInput) => {        /* prompts user with a question, taking input */
        let correctNumbers = 0;                                                     /* starts up a variable to track # of correct answers */
        // if (= 10);
        if (userInput == 10) {                                                      /* checks for it to be 10 */
            console.log('yes');                                                     /* prints yes */
            correctNumbers ++;
        } else {
            const key1Result = 10 - userInput;                                      /* sets 10 less user input to key1result */
            console.log('consider adding ' + key1Result);                           /* suggests the number for you to add */
        }
    rl.question('What do you think the second number is?\n', (userInput) => {       /* prompts user with a question, taking input */
        // if (= 40);
        if (userInput == 40) {                                                      /* checks for it to be 40 */
            console.log('yes');                                                     /* prints yes */
            correctNumbers ++;
        } else {
            const key2Result = 40 / userInput;                                      /* sets 40 divided by user input to key2result */
            console.log('consider multiplying by ' + key2Result);                   /* suggests the number for you to multiply by */            
        }
    rl.question('What do you think the third number is?\n', (userInput) => {       /* prompts user with a question, taking input */
        // if (= 39);
        if (userInput == 39) {                                                      /* checks for it to be 39 */
            console.log('yes');                                                     /* prints yes */
            correctNumbers ++;
        } else {
            const key3Result = 39 - userInput;                                      /* sets 39 less user input to key2result */
            console.log('consider subtracting ' + (key3Result * -1));               /* suggests the number for you to add, inverted */            
        }
        
        // if = 3, say(good) else say(bad);
        if (correctNumbers == 3) {                                                  /* checks if you got 3 correct */
            console.log('that is it');                                              /* congragulates you */
        } else {
            console.log('consider trying again');                                   /* kinda insults you */
        }
        const thanks = "thanks for playing";                                        /* sets up a string data type */
        console.log(thanks);                                                        /* uses that string data type */

        // terminal.close();
        rl.close();                                                                 /* closes the terminal */
    });
});
});
}