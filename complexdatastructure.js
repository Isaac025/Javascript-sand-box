const customers = ["Ade", "Ngozi"];

customers.map((customer) => {
  console.log(customer.charAt(0));
});

//[object1, object2]
//name, age, gender, location, purchase

const myCustomers = [
  {
    name: "Kung Lao",
    age: 62,
    gender: "M",
    location: "Ibadan",
    purchase: 6000,
  },
  {
    name: "Johnny Cage",
    age: 30,
    gender: "M",
    location: "Lagos",
    purchase: 8000,
  },
  {
    name: "Liu Kang",
    age: 22,
    gender: "M",
    location: "Ibadan",
    purchase: 4300,
  },
  {
    name: "Sonya Blade",
    age: 20,
    gender: "F",
    location: "Lagos",
    purchase: 7400,
  },
  { name: "Kitana", age: 32, gender: "F", location: "Ondo", purchase: 6200 },
];

myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((customer) => {
  console.log(customer.name);
});

//get customers that are 26 and above
const olderCustomers = myCustomers.filter((customer) => customer.age >= 25);
console.log(olderCustomers);

//younger than 25

const youngerCustomers = myCustomers.filter((customer) => customer.age < 25);
console.log(youngerCustomers);

//female customers
const femaleCustomers = myCustomers.filter(
  (customer) => customer.gender.toUpperCase() === "F".toUpperCase()
);

console.log(femaleCustomers);

//male customers
const maleCustomers = myCustomers.filter(
  (customer) => customer.gender.toUpperCase() === "m".toUpperCase()
);
console.log(maleCustomers);

//get the number of customers staying in lagos

const lagosCustomers = myCustomers.filter(
  (customer) => customer.location === "Lagos"
);
const lagosCustomersamount = lagosCustomers.length;

console.log(lagosCustomersamount);

//arrange the customers according to age
const customersAge = myCustomers.sort((a, b) => a.age - b.age);
console.log(customersAge);

//get the average age of the customers
const totalAge = myCustomers.reduce((acc, customer) => {
  return acc + customer.age;
}, 0);

const avgAge = totalAge / myCustomers.length;
console.log(avgAge);

//get me a customer staying in ibadan

const customerLocation = myCustomers.find((c) => c.location === "Ibadan");
console.log(customerLocation);

//get a new array conatianing all the purcahse of all customers
let customerspurchase = myCustomers.map((c) => c.purchase);
console.log(customerspurchase);

//get all customers with a minimum of 6000 purchase amount
const purchaseAmountlessthan6000 = myCustomers.filter(
  (customer) => customer.purchase >= 6000
);
console.log(purchaseAmountlessthan6000);

// get the total purchase amount of all customers
let totalPurchaseAmount = myCustomers.reduce((acc, customer) => {
  return acc + customer.purchase;
}, 0);
// get the average purchase for all the last three customer
// const lastThreeCustomers = myCustomers.slice(2, 6);
// console.log(lastThreeCustomers);
const lastThreeCustomers = myCustomers.slice(2);
const lastThreeCustomersPurchase = lastThreeCustomers.reduce(
  (acc, customer) => {
    return acc + customer.purchase;
  },
  0
);

const lastthreeCustomersAvg = lastThreeCustomersPurchase / 3;
const avg = lastthreeCustomersAvg.toFixed(2);
console.log(avg);

const ibadanTotalPurchase = myCustomers
  .filter((c) => c.location === "Ibadan")
  .reduce((acc, c) => acc + c.purchase, 0);
console.log(ibadanTotalPurchase);

const shoppingCart = [
  { title: "Jean", price: 100, qty: 2 },
  { title: "Hat", price: 50, qty: 4 },
  { title: "Cream", price: 30, qty: 1 },
  { title: "Duffel Bag", price: 150, qty: 5 },
  { title: "Balaclava", price: 70, qty: 3 },
];

//Jean costs $100
shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price}`);
});

//get items that costs more than 70 dollars
let higherProducts = shoppingCart.filter((item) => item.price > 70);
console.log(higherProducts);

//get the total amount spent on each item
//jeans will cost $200
shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price * item.qty}`);
});

let totalCost = shoppingCart.reduce((acc, item) => {
  return acc + item.price * item.qty;
}, 0);

console.log("Total cost is "+ totalCost);
