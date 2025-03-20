//asynchronous js
//codes that takes time to execute

// console.log("a");
// console.log("b");// 5 secs
// setTimeout(() => {
//   console.log("b");
// }, 5000);

// console.log("c");

//a c b
//fetching data
//geolocation
//payment gateway

//pubic private
//rest apis - GET POST DELETE PATCH
const url = "https://dummyjson.com/products";

//fetch request async/await
const getProduct = async () => {
  const response = await fetch(url);
  //   console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.products);
  //display in browser
};

getProduct();

//promise - - containers for future value
//pending, fuffilled, rejected
const getProducts2 = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.products);
    });
};

getProducts2();
