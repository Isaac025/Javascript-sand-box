// JS MATH OBJECT

// sqrt, round, ceil, floor, pow, trunc, random,
console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(10 ** 2);
console.log(Math.round(4.29));
console.log(Math.round(-1.3));
console.log(Math.ceil(2.1));
console.log(Math.floor(3.9));
console.log(Math.trunc(11.99));
//trunc removes the decimal part

//Math.random - randoms generate random numbers bewteen 0 -1
console.log(Math.random());
console.log(Math.random() * 11);
console.log(Math.trunc(Math.random() * 11));

// 1 -10
console.log(Math.floor(Math.random() * 10 + 1));

//raffle draw car
const customers = ["Kelvin", "John", "Khalid", "David"];

const randomWinner = () => {
  let randomNumber = Math.floor(Math.random() * customers.length);
  return customers[randomNumber];
};

console.log(randomWinner());

//OTP generator 

