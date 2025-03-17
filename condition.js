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
// the score is greater than or equal to 50 otherwise failed

const score = 72;

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

if (myNum % 2 === 0) {
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

let transAmount = 4000;

if (transAmount > 2500) {
  console.log("Transaction Charge = 100");
} else {
  console.log("Transaction Charge = 50");
}

let word = "LYNX".toLowerCase();
if (
  word.includes("a") ||
  word.includes("e") ||
  word.includes("i") ||
  word.includes("o") ||
  word.includes("u")
) {
  console.log("Word contains a vowel");
} else {
  console.log("Word does not contain a vowel");
}

const scoreA = 100;
const scoreB = 100;

// else if statement more than two choices
if (scoreA > scoreB) {
  console.log("A wins");
} else if (scoreB > scoreA) {
  console.log("B wins");
} else {
  console.log("It is a Draw");
}

//write a program that rates movies
// above 8 is excelent
// above 6 is good
//above 5 is average
// else is bad

const movieRating = 6.5;
if (movieRating >= 8) {
  console.log("Excellent Movie");
} else if (movieRating >= 6) {
  console.log("Good Movie");
} else if (movieRating >= 5) {
  console.log("Average Movie");
} else {
  console.log("Bad Movie");
}

// less than 18 - young club
// 18 -60 - adult club
// above 60 - old people club

const usersAge = 90;
if (usersAge < 18) {
  console.log("Young Club");
} else if (usersAge > 60) {
  console.log("Adult Club");
} else {
  console.log("Old people club");
}

// nested if statement

//switch statement

// grading system  - passes remarks based on grades
// A - Excellent
// B - Very Good

const grade = "c";

switch (grade) {
  case "a":
  case "A":
    console.log("Excellent");
    break;
  case "b":
  case "B":
    console.log("Very Good");
    break;
  case "c":
  case "C":
    console.log("Good");
    break;
  case "d":
  case "D":
    console.log("Fair");
    break;
  case "e":
  case "E":
    console.log("Passed");
    break;

  default:
    console.log("Invalid Grade, Please Try again");
}

// includes l0gical or
//  // if(email && password){
//     if(email is registered){
//         if(password is correct){
//             // login
//         }else{
//             console.log('Incorrect pass');

//         }

//     }else{
//         console.log('please register');

//     }

// }else{
//     console.log('provide your email and password');

// }
