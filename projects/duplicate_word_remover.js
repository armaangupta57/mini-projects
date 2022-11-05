const readline = require("readline");

let raw_text;

console.log("Welcome to the Duplicate Word Remover");
console.log("   by Guppy");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your text: ", (text) => {
  raw_text = text;
  rl.close();
});

rl.on("close", () => {
  const raw_text_list = raw_text.split(" ");
  let new_string = "";

  for (let i = 0; i < raw_text_list.length; i++) {
    const word = raw_text_list[i];
    const next_word = raw_text_list[i+1] || "";
    new_string = new_string + word + " ";

    if (word === next_word) {
      let all_duplicates_found = false;
      let adder = 1;

      while (!all_duplicates_found) {
        const following_word = raw_text_list[i+1+adder];
        if (following_word === word) adder++;
        else break;
      }

      i+=adder;
    }
  }

  console.log(new_string);
})