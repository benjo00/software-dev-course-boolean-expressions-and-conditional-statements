/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasMap = false;
let hasSword = false;

console.log("A friendly villager walks by and offers you a stick with cloth wrapped around the top.");
const choice4 = readline.question("Do you take it? Y or N");
if (choice4 === "Y") {
  hasTorch = true
  console.log("You now have a torch!");
} else if (choice4 === "N") {
  let hasTorch = false;
  console.log("You shake your head and keep walking. The villager rolls his eyes and walks away.");
}

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

console.log("You see a dark clump on the ground.");
const choice2 = readline.question("Do you investigate? Y or N?");

if (choice2 === "Y" || choice2 === "y") {
  hasSword = true;
  console.log("You find a sword!");
} else if (choice2 === "N" || choice2 === "n") {
  hasSword = false;
  console.log("You cautiously avoid the clump and keep walking.");
}

console.log("Now, goblins approach!");
const choice3 = readline.question("Do you fight them or run?");

if (choice3 === "fight them" && hasSword) {
  console.log("You defeat the goblins with your sword!");
} else if (choice3 === "fight them" && !hasSword) {
  console.log("You try to fight the goblins with your bare hands but are defeated.");
} else if (choice3 === "run") {
  console.log("You escape to safety!");
}

console.log("A magic portal opens.");
const choice5 = readline.question("Do you enter it? Y or N");

if (choice5 === "Y" && hasSword || hasTorch) {
  console.log("You enter the portal, fight and navigate your way to the castle. As you enter, your amnesia clears and you realize you'd been fed a magic potion to make you forget that you are the ruler of the land! You sit on your throne and smile, knowing the potion has worn off and all is well.");
} else if (choice5 === "Y" && !hasSword && !hasTorch) {
  console.log("You enter the portal but it's dark so you can't see where you're going and are defeated by bandits.");
}
else if (choice5 === "N") {
  console.log("You wander aimlsessly and live a boring life and die an old person of 150 years living in a cave.");
}



/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/