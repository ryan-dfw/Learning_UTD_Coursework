let key1 = 10;
let key2 = 40;
let key3 = 39;

main();

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question('What do you think the first number is?\n', (userInput) => {
        let correctNumbers = 0;
        if (userInput == key1) {
            console.log('yes');
            correctNumbers ++;
        } else {
            const key1Result = key1 - userInput;
            console.log('consider adding ' + key1Result);
        }
        rl.question('What do you think the second number is?\n', (userInput) => {
            if (userInput == key2) {
                console.log('yes');
                correctNumbers ++;
            } else {
                const key2Result = key2 / userInput;
                console.log('consider multiplying by ' + key2Result);
            }
            rl.question('What do you think the third number is?\n', (userInput) => {
                if (userInput == key3) {
                    console.log('yes');
                    correctNumbers ++;
                } else {
                    const key3Result = 39 - userInput;
                    console.log('consider subtracting ' + (key3Result * -1));
                }
                
                if (correctNumbers == 3) {
                    console.log('that is it');
                    } else {
                    console.log('consider trying again');
                    }
                rl.close();
            });
        });
    });
}