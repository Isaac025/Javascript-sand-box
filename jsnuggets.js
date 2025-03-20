try {
  console.log(age);
  //do sth
} catch (error) {
  //handle the error
  //error message
  console.log(error.message);
}

// optional chaining
const person = {
  name: "Bob",
  age: 76,
};
console.log(person?.job); // will not break code
console.log(person.job);

let error = {
  firstName: "First Name is required",
};

//error?.firstName

//nullish coalescence
const image = null;
const whatsappAvatar = image ?? "Avatar Image";
console.log(whatsappAvatar);
