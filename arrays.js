// [element, element2, element3, ...]
//arrays usually contain the same datatypes
//empty arrays are falsy values
const students = ["David", "Quadri", "Isaac", "Johnpaul", "Isaac", "Uju"];

//array properties - length
console.log(students);
console.log(students.length);
//getting elements from an array, position
console.log(students[0]);
console.log(students[2]);
// change elements in an array, position
students[0] = "Azeez";
console.log(students);
students[3] = "JohnBull";
console.log(students);
students[students.length - 1] = "John Doe";
console.log(students);

//array methods
//add and remove elemnets from an array
//structure data type stack LIFO (last in first out ) FIFO (first in first out)

//push, unshift (push- end of array), (unshift - beginning)

students.push("michael");
students.push("Juwon");
students.unshift("uthman");

console.log(students);

//pop and shift (opposite of push and unshift)
students.pop();
students.shift();

console.log(students);

//includes
console.log(students.includes("Kelvin"));
console.log(students.indexOf("Isaac"));
console.log(students.lastIndexOf("Isaac"));
console.log(students.indexOf("Wale"));
console.log(students.at(2));

//extract portions of an array slice(tart, end(non-inclusive))
console.log(students.slice(0, 3));
console.log(students.slice(4, 7));

//methods to convert arrays to strings
// join, toString
console.log(students.join("%")); // can use another seperator
console.log(students.toString()); // ,

// iterator methods (going over each element)
//higher order methods(functions) -
// it needs another function as a parameter
//forEach, map, find, filter, some, every, reduce
//forEach - executes a function for every element in an array
students.forEach((student) => {
  console.log(student.toUpperCase());
});

students.forEach((student) => {
  console.log(student.charAt(0));
});

//map - creates a new array with the result of a function

const smallCaseStudents = students.map((student) => {
  return student.toLowerCase();
});
console.log(smallCaseStudents);

//filter - creates a new array with elements that pass a test (search condition)

const myNums = [3, 5, 6, 8, 10, 1, 4, 2];

const evenNum = myNums.filter((num) => {
  return num % 2 === 0;
});
console.log(evenNum);

const oddNum = myNums.filter((num) => num % 2 !== 0);
console.log(oddNum);

const lengthGreaterthan6 = students.filter((student) => {
  return student.length > 6;
});
console.log(lengthGreaterthan6);

const lengthGreaterthan5 = students.filter((student) => student.length > 5);
// only works for one line of code
console.log(lengthGreaterthan5);

// find returns the first element that passes a test (search condition)

const findGreaterthan5 = myNums.find((num) => num > 5);
console.log(findGreaterthan5);

const findFiveChar = students.find((student) => student.length === 5);
console.log(findFiveChar);

//some - returns true if at least one of every element passes a test
// every - reurns true if all element passess a test

const ifSomeGreater5 = myNums.some((num) => num > 5);
console.log(ifSomeGreater5);

const ifallGreater5 = myNums.every((num) => num > 5);
console.log(ifallGreater5);

//reverse, sort, concat, reduce
//string split

const carBrands = ["Toyota", "Rollsroyce", "Ferari", "Tesla", "BMW"];
console.log(carBrands);

// console.log(carBrands.reverse());
console.log(carBrands.sort()); // A - Z
console.log(carBrands.sort().reverse()); // z - a

// console.log(carBrands.sort((a, b) => b - a)); // z - a

// sorting numbers 0 - up up - 0
const prices = [200, 4000, 650, 100, 3500]; //total
console.log(prices.sort()); // buggy (wont work)
console.log(prices.sort((a, b) => a - b)); //smallest to largest
console.log(prices.sort((a, b) => b - a)); // largest to smalllest

//reduce - reduces every element in an array to a single value
//two parameters, callback function, startpoint
const totalPrice = prices.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(totalPrice);

// concat-
const africanCountries = ["Togo", "Mauritius", "Ghana", "Congo"];
const asianCountries = ["Singapore", "Japan", "South Korea"];

const holidayLocations = africanCountries.concat(asianCountries);
console.log(holidayLocations);

const fruit = "banana";
//split method on a string
console.log(fruit.split("a"));
console.log(fruit.split(""));

//write a function that reverses the letter in a word
// cat -- tac gel - leg
const reverseWord = (word) => {
  return word.split("").reverse().join("");
};

console.log(reverseWord("cat"));
console.log(reverseWord("gel"));
console.log(reverseWord("wolley"));

// palindrome - words that are spelt the same
//madam level tat noon  pap eye

function ispalindrome(word) {
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}

console.log(ispalindrome("Madam"));

//SET
//set is a collection of unque values in an array
const users = ["John", "Dave", "Nate", "John", "Dave"];
console.log(new Set(users));

//destructuring
//complex data structures
