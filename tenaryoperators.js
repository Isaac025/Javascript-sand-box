// ternary operators
// if else
// condition ? first action : second action

const myNumber = -50;

myNumber > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");

const myNum = 38;

myNum % 2 === 0 ? console.log("EVEN") : console.log("ODD");

//Mr mario has a car
//Mr mario does not have a car
const hasACar = false;

const sentence = `Mr mario ${hasACar ? "has" : "does not have"} a car`;
console.log(sentence);

let isUserLoggedIn = false;
isUserLoggedIn ? console.log("Welcome User") : console.log("logged out");

let balance = 90000;
let loanAmount = 100000;

loanAmount <= 2 * balance
  ? console.log("ELIGIBLE FOR LOAN")
  : console.log("NOT ELIGIBLE");

//declare two variables savings and transactionAmount
let savings = 300000;
let transactionAmount = 8000;

transactionAmount < savings
  ? console.log("transaction Successful")
  : console.log("insufficient funds");

// write to tell a user if the transaction will be successful or not

transactionAmount > 0
  ? console.log(`credit alert of ${transactionAmount}`)
  : console.log(`debit alert`);

savings += transactionAmount;
console.log(savings);

//if credit add it to the savings amount if not substract it from the savings
let myMoney = 19.56789;
console.log(myMoney.toFixed(2));
