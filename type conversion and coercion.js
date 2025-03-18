// function calcSumOfNums() {
//   const num1 = prompt("Enter First Number: ");
//   const num2 = prompt("Enter Second Number: ");

//   console.log(parseInt(num1) + parseInt(num2));
// }

// calcSumOfNums();
// type conversion
// numbers to strings tostring, sting
// strings to numbers
// 60 ===> '60

const num = 98;
console.log(typeof num);
console.log(typeof num.toString);
console.log(typeof String(num));

//strings to number //ade //'98' -- 98
//sring to number +(infront)
//Number parseInt
const myStr = "30";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr) * 2);
console.log(+"30" + 2); //32

//write a code thats a question using the prompt method
//the question should say "Who is there?"
//if the question reply is "Dami", it should prompt for a password
//if the qestion reply is not "Dami", alert "I dont know you"
//if the password is "javascript", then alert "welcome user"
//if the password is not "javascript", alert "wrong password"
//if there is no question, alert "cancelled"

// function question() {
//   const userLogin = prompt("who is there?");
//   if (userLogin.toLocaleLowerCase() === "dami") {
//     prompt("password");
//     if ("password" === "javascript") {
//       alert("welcome user!!");
//     } else if ("Password" !== "javascript") {
//       alert("wrong password");
//     }
//   } else if (userLogin !== "Dami") {
//     alert("I don't know you");
//   } else {
//     alert("cancelled");
//   }
// }

// question();

//assignment
function question() {
  let userLogin = prompt("Who is there?");
  if (userLogin === "Dami") {
    let password = prompt("Enter Password");
    if (password === "javascript") {
      alert("welcome user");
    } else if (password !== "javascript") {
      alert("wrong password");
    }
  } else if (userLogin === null) {
    alert("cancelled");
  } else {
    alert("I don't know you");
  }
}

question();

// '2' +'3' = 5
//TYPE COERCION - FORCE
console.log("2" + 4); // 24
console.log("2" * 4); // 8
console.log("Wale" / 4); // NaN
console.log("4" - "4"); //0

// whenever a string is involved with + ---> string concatenation
//e.g '50' + 4 == "504"
//however a valid number string '24' is involved with other
//math operators - coerced to behave as a number e.g '50' - 5
// a non valid number string e.g. ade involved with math operators
//except + would result to NaN when used e.g. "ade" -5 = NaN
