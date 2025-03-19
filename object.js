//OBJECTS - {key: value, key2: value2}
//objects are more descriptive
const person = {
  firstName: "John",
  Lastname: "Doe",
  age: 45,
  isMarried: true,
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "Lagos",
    zip: "100111",
    geoLocation: {
      lat: 23.46,
      lng: 45.78,
    },
  },
};

//getting properties from an object
//dot notation ObjName.propertyName and bracket notation objName['propertyName']
console.log(person.age);
console.log(person.firstName);
console.log(person.Lastname.toUpperCase());
console.log(person["firstName"]);
console.log(person["friends"]);
console.log(
  `I live at ${person.location.street} estate, ${person["location"]["area"]}`
);

//adding a new property to an object
//workPlace

person.workPlace = "Apollo School";
console.log(person);

person.location.landmark = "City Mall";
console.log(person);

//removing property delete
delete person.job;
console.log(person);

const user = {
  username: "ade001",
  email: "ade@google.com",
  profilepic: "image",
  age: 25,
  isLoggedIn: true,
  isVerified: true,
  posts: ["Nigeria just get as e be", "I love Food"],
  welcomeUser: function () {
    return this.isLoggedIn ? `welcome ${this.username}` : "Log in to continue";
  },
  verifyUser: function () {
    return this.isVerified
      ? "verification successful"
      : "verify your account to coninue";
  },
};

//object methods -the user writes the function himself
//function declaration (this - refers to the object itself)
// that tells user welcome username or log in to continue
console.log(user.welcomeUser());

//write an object method called verifyUser
//if user is verified return verification successful else
//verify your account to continue
console.log(user.verifyUser());

const book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  yearPublished: 1976,
  rating: 4.0,
  similarAuthors: ["JohnDoe", "Peter", "Mark"],
  price: 5000,
  genre: "fictional",
  description: function () {
    return `the book titled ${book.title} cost $${book.price} and it is a ${book.genre} novel`;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? "This book is recommended" : "Not recomended";
  },
};

console.log(book.description());

console.log(book.recommendBook());

//Object.keys, Object.values, Object.entries

const transaction = {
  amount: 4000,
  date: "16th, March 2025",
  charges: 25,
  refNum: "tranx-1257662673763",
};

console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

//object destructuring

//rest and spread operator
const match = {
  teamA: "Wolfsburg",
  teamB: "Leece",
  teamAScore: 3,
  teamBScore: 2,
  duration: 96,
  corners: 12,
  numOfSubsUsed: 7,
  fouls: 14,
  stadium: "Wembley",
  weather: "Snowy",
  matchOutcome: function () {
    if (this.teamAScore > this.teamBScore) {
      return `${this.teamA} won with a score of ${this.teamAScore}`;
    } else if (this.teamBScore > this.teamAScore) {
      return `${this.teamB} won with a score of ${this.teamBScore}`;
    } else {
      return `It ended in a draw`;
    }
  },
  matchOverview: function () {
    return `the match between ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`;
  },
};

const { teamA, fouls, stadium, corners } = match;
console.log(fouls, stadium, corners);

console.log(match.matchOutcome());
console.log(match.matchOverview());

//1. write a function to determine the winner of the match
//wolfsburg won with a score of 3
//2. write a function given the overview of the match
//match between wolfsburg and leece was played at wembley in a snowy condition

//object destructuring - we are getting properties from an object

const property = {
  name: "Exquisite Villa",
  rent: "2.3M/year",
  bedrooms: 7,
  bathroom: 10,
  cautionFee: 5000,
  legalFee: 4000,
  facilities: ["pool", "sauna", "theatre", "gym"],
  location: {
    area: "Gbagada",
    city: "Lagos",
    num: 45,
    street: "Charly Boy",
    geo: {
      lat: 100.27,
      lng: 45.78,
    },
  },
};

const {
  name,
  rent,
  location: {
    street,
    city,
    geo: { lng },
  },
} = property;

const product = {
  price: 9.99,
  discount: 7.17,
};

const { price, discount } = product;
let newPrice = price - (discount / 100) * price;

console.log(newPrice.toFixed(2));

