//REST AND SPREAD OPERATOR
// ...

const user = {
  name: "John Carter",
  age: 90,
  gender: "male",
};
//unstructured data type
const { age, ...prop } = user;
console.log(prop);

//rest operator

const arr = [3, 4, 6, 8];
// const [x, y] = arr;
// console.log(x, y);
//structured
const [x, y, ...others] = arr;
console.log(others);

// object - unstructured data type
//array - structured data type
const countries = ["Togo", "Nigeria", "Ghana", "Cameroon", "Benin"];
const [a, ...rest] = countries;
console.log(rest);

const product = {
  title: "Micheal Kors",
  price: 300,
  image: "Image",
};

const { price, ...property } = product;
console.log(property);

//spread operator ...

const detailedProduct = {
  stock: 6,
  color: "red",
  category: "bags",
  weight: 13,
  ...product,
};
console.log(detailedProduct);

const onlineStudents = ["John", "peter", "Mary", "Malik", "Ridwan"];

const physicalStudents = ["Bolu", "Kenny", "Ope", "Bola", "Yakubu"];

const allStudents = [...onlineStudents, ...physicalStudents, "Ruud", "seyi"];
console.log(allStudents.length);
