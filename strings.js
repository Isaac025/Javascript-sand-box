//STRINGS - character inside of quotation markd '' ""
const firstName = "John";
const lastName = "Doe";

//STRING PROPERPERTIES - length, concatenation (Joining +)
console.log(lastName.length);

const myPassword = "akano12345";
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);

// string methods - bulit in functions that can be done on strings
const email = "jjdoe@google.co.uk";
console.log(email);
//toupperCase, toLowerCase
console.log(email.toUpperCase());
console.log(email.toLowerCase());

// indexOf, LastIndexOf, charAt
console.log(email.charAt(0));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

//startsWith true or false, endswith, includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

// trim, trimStart and trimEnd (removes white spaces)
const username = "   ade001      ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

//replace replaceAll

//01******90
const myName = "jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));
console.log(myName.replace("jane", "%"));

//extract portions of a string substr, slice substring (start, end)
console.log(myName.substring(0, 3));
console.log(myName.slice(0, 3));

//substr (start, num of characters)
console.log(myName.substr(0, 2));

const accountNumber = "3534567896";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));
//12******90

console.log(accountNumber.replace(accountNumber.slice(2, 8), "******"));

//
const userName = "johnpaul";
console.log("welcome" + " " + userName.toUpperCase());

//concatenation
const author = "Jax Draxx";
const book = "The Ghost";
//Jax Draxx wrote the book the ghost
const sentence = author + " wrote the book " + book;
console.log(sentence);

//template literals used to format variables inside of a string
//``
const sentence2 = `${author} wrote the book ${book}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam"; // ADAM SANDLER featured in the movie romance scam
console.log(`${person.toUpperCase()} featured in the movie ${movie}`);

const country = "Russia";
console.log(country.length);

console.log(country.toUpperCase());

console.log(country.slice(0, 5));
console.log(country.startsWith("e"));
console.log(country.includes("h"));

const myCountry = `i live in ${country}`;
console.log(myCountry);
