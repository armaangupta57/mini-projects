const readline = require("readline");

let new_password = "";
let length;
let require_caps;
let require_special;
let require_numbers;

const lower_case_letters = "abcdefghijklmnopqrstuvwxyz";
const upper_case_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special_characters = "!@#$%^&*?";
const numerical_digits = "0123456789";

console.log("Welcome to the Password Generator");
console.log("   by Guppy");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const generate_character = (caps, special, numbers) => {
    let characters = lower_case_letters;
    if (caps) characters += upper_case_letters;
    if (special) characters += special_characters;
    if (numbers) characters += numerical_digits;

    const random_num = Math.floor(Math.random() * characters.length);
    const character = characters.charAt(random_num);
    return character;
} 
  
rl.question("Enter a number for your passsword length: ", (raw_length) => {
    length = parseInt(raw_length);
    rl.question("Do you need capital letters? (Y/N): ", (caps_option) => {
        if (caps_option === "Y") require_caps = true;
        else require_caps = false;
        rl.question("Do you need special characters? (Y/N): ", (special_option) => {
            if (special_option === "Y") require_special = true;
            else require_special = false;
            rl.question("Do you need numbers? (Y/N): ", (numbers_option) => {
                if (numbers_option === "Y") require_numbers = true;
                else require_numbers = false;
                rl.close();
            })
        });
    });
});

rl.on("close", () => {
    for (let i = 0; i < length; i++) {
        const char = generate_character(require_caps, require_special, require_numbers);
        new_password += char;
    }

    console.log(`YOUR NEW PASSWORD IS: ${new_password}`);
});