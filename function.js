//functions

// 4 5 7 9 4 6

// function declaration
//function functionName () {write the code}
// log "hello world" to the console

function logger() {
  console.log("hello world");
}

// call it or invoke
logger();
logger();

// function welcomeUser() {
//   console.log("welcome User");
// }

// welcomeUser();

//function parameters - values passed to the function to use, (parameters)
function welcomeUser(name = "Anon") {
  console.log(`welcome ${name}`);
}

welcomeUser();
welcomeUser("vera");
welcomeUser("Quadri");
welcomeUser("Uju");

// write a function that adds two numbers together

function addTwoNumbers(n1 = 0, n2 = 0) {
  const total = n1 + n2;
  console.log(total);
}

addTwoNumbers(34, 10);
addTwoNumbers(9, 10);
addTwoNumbers(8);

function subtractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}

subtractTwoNumbers(90, 5);
subtractTwoNumbers(2, 5);

//write a function called wordConverter, that converts all alphabets
// to uppercase

function wordConverter(word) {
  console.log(word.toUpperCase());
}

wordConverter("hello");

// write a func called replaceAllE

function replaceAllE(word) {
  console.log(word.toLowerCase().replaceAll("e", "*"));
}

replaceAllE("basketballer");
replaceAllE("elephant");
replaceAllE("EYE");

function checkLength(word) {
  console.log(word.length);
}

checkLength("football");

// write a func that returns the first character in a word provided
function checkChar(word) {
  console.log(word.charAt(0));
}

checkChar("bob");
checkChar("leaf");

// John Doe

function getInitials(firstname, lastname) {
  const initials = firstname.charAt(0) + lastname.charAt(0);
  console.log(initials);
  //   const initials =`${firstname.charAt(0).${lastname.charAt(0)}}`;
}

getInitials("Paul", "David");
getInitials("Dele", "Ali");

//write a function that extracts the first five letters of any word provided
function extractFiveLetters(word) {
  const firstFive = word.substr(0, 5);
  console.log(firstFive);
}
extractFiveLetters("machine");

function positiveOrNegative(number) {
  //   if (number > 0) {
  //     console.log("positive");
  //   } else {
  //     console.log("negative");
  //   }

  number > 0 ? console.log("positive") : console.log("negaitive");
}

positiveOrNegative(-20);

//FUNCTION TO A FACTORY THAT PRODUCES A PRODUCT
//RTURN A VALUE return
function sayHello() {
  return "say hello";
}

const val = sayHello();
console.log(val);

//write a function that multiplies two numbers
function multiplyTwoNums(n1, n2) {
  return n1 * n2;
}

console.log(multiplyTwoNums(6, 10));

function average(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

console.log(average(13, 23, 6));

//write a function that converts weeks to days and return the number of days
function convertWeeksToDays(weeks) {
  return weeks * 7;
}

console.log(convertWeeksToDays(2));

// 2 hours is equals to 120 minutes
function hoursToMinutes(hours) {
  const min = hours * 60;

  return `${hours} hours is equal to ${min} minutes`;
}

console.log(hoursToMinutes(5));

// function declaration
function yearsToMonths(years) {
  return `${years} years is equal to ${years * 12} months`;
}

console.log(yearsToMonths(5));

function return40() {
  return 40;
}

console.log(return40());

//function expression
const myName = function () {
  return "John";
};
console.log(myName());

//hoisting
// function declaration - hoisted above puts at the top of the doc

removealla("email");
function removealla(word) {
  console.log(word.replace("a", " "));
}

//Arrow functions
const myArrowFunc = () => {
  console.log("Arrow Function");
};
myArrowFunc();

//write an arrow function that takes in two scores as a parameter
//your function should return different outcomes based on the score
//if scoreA is more than B
const checkWinner = (scoreA, scoreB) => {
  if (scoreA > scoreB) {
    return "Score A wins";
  } else if (scoreB > scoreA) {
    return "Score B wins";
  } else {
    return "Draw";
  }
};

console.log(checkWinner(15, 22));

//write a function called calculateBMI
//thats takes in  body mass and height as a parameter
//the function should return the BMI index  rounded to two decimal places

//weight divided by the square of height

//use the value mass- 70, height - 1.75 (ans = 22.86)

const calculateBMI = (mass, height) => {
  let bmi = mass / height ** 2;

  return bmi.toFixed(2);
};

console.log(calculateBMI(70, 1.75));

const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

console.log(getBMICategory(calculateBMI(70, 1.75)));

//write a function using the result of the BMI calculated above
//to determine the BMI category
//less than 18.5 is underweight
//between 18.5 and 24.9 is Normal weight
//between 25 and 29.9 is overweight
//anything else is obese
