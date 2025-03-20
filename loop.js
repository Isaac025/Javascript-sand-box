//LOOPS -

// LOOPS -
//repetive tasks
// for while do..while
// infinite

// let i = 0;
// if (i < 5) {
//   console.log("Hello world");
// }
// i++

//initializer condition increment
for (let i = 1; i <= 5; i++) {
  console.log("Hello World " + i);
}

// 10 times
for (let i = 1; i <= 10; i++) {
  console.log("Check pin");
}

// for loop to get the sum of natural numbers between 0-1000
//
let sum = 0;

for (let x = 0; x <= 1000; x++) {
  sum += x;
}
// 0 + 0 + 1 + 2
console.log(sum);

// WHILE
//initilizer
// let y = 0;
// while (y < 3) {
//   console.log("In the while loop");
//   y++;
// }
// 0-5
// let b = 0;
// let sum2 = 0;
// while (b <= 5) {
//   sum2 += b;
//   b++;
// }

// console.log(sum2);
// Vera
const people = ["Leo", "Tobi", "Vera", "Quadri", "Isaac", "JayCole"];
console.log(people.length);
console.log(people[1]);

// for (let i = 0; i < people.length; i++) {
//   if (people[i] === "Vera") {
//     console.log(${people[i]} is a good friend);
//   } else {
//     console.log(${people[i]} is a bad friend);
//   }
// }
// for (let i = 0; i < people.length; i++) {
//   if (people[i] === "Vera") {
//     // break;
//     continue;
//   }
//   console.log(people[i]);
// }
//break and continue
// even numbers between 0 and 10
// num % 2 !== 0
// for (let y = 1; y <= 10; y++) {
//   if (y % 2 !== 0) {
//     continue;
//   }
//   console.log(y);
// }

// do.. while
// loop must work at least once regardless of the condition
let a = 89;
do {
  console.log("do while");

  a++;
} while (a < 3);

// 6

// 4  6  8
// generate OTP

//MATH.RANDOM
// math.floor
console.log("hello"[1]);

const generateOTP = (limit = 4) => {
  let digits = "0123456789";
  let otp = "";
  //logic 4
  for (i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  return otp;
};

console.log(generateOTP());
