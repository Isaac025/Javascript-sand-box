// conditional statement
// if statement
//if(condition) {
// lines of code
//}

if (true) {
  console.log("Hello world");
}

// age >= 18 (18+) // YOU Are eligible to vote

const age = 25;

if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "hhfuwhhasYT";
//write an if statement that logs  password to the console

if (password.length >= 9) {
  console.log("PASSWORD IS STRONG");
}

//if else statements

if (true) {
  console.log("hello class");
} else {
  console.log("goodbye class");
}

if (password.length >= 9) {
  console.log("PASSWORD IS STRONG");
} else {
  console.log("password is weak");
}
if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
} else {
  console.log("NOT ELIGIBLE");
}

let balance = 8000;
let amount = 10000;

if (amount < balance) {
  console.log("Transaction successful");
} else {
  console.log("insufficient funds");
}

const userPin = 1050;
const enteredPin = 1234;

if (userPin === enteredPin) {
  console.log("pin is correct");
} else {
  console.log("INCORRECT PIN");
}

const email = "youremail.com";

if (email.includes("@")) {
  console.log("Email Is Valid");
} else {
  console.log("INVALID EMAIL");
}

// write a program that dusplays you passed the exams if
// the score is greater than or equal to 50 otherwo

const score = 32;

if (score >= 50) {
  console.log("PASSED THE EXAM");
} else {
  console.log("FAILED");
}

let number = -20;
if (number > 0) {
  console.log("Positive");
} else {
  console.log("Negaitve");
}

const num1 = 56;
const num2 = 34;

if (num1 > num2) {
  console.log("Num1 is greater");
} else {
  console.log("Num2 is greater");
}

// write a program that check if a number is even or odd

const myNum = 39;

if (myNum % 2 == 0) {
  console.log(`${myNum} is EVEN`);
} else {
  console.log(`${myNum} is ODD`);
}

const purchaseAmount = 300;
if (purchaseAmount > 100) {
  console.log("ELIGIBLE FOR A DISCOUNT");
} else {
  console.log("NOT ELIGIBLE FOR A DISCOUNT");
}

let teamA = (54 + 56 + 78) / 3;

// let teamB1 = 67;
// let teamB2 = 60;
// let teamB3 = 82;

let teamB = (67 + 60 + 82) / 3;

console.log(`teamA has an average score of ${teamA}`);
console.log(`teamB has an average score of ${teamB}`);

if (teamA > teamB) {
  console.log("TeamA wins");
} else {
  console.log("TeamB wins");
}

let timeOfDay = 17;

if (timeOfDay > 10 && timeOfDay < 16) {
  console.log("You should be in class");
} else {
  console.log("Be at home");
}
