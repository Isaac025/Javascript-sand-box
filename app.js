//Document object Model (DOM)

//select element on the document, tagName(h1, p), className, idName
//combinations

// const headings = document.getElementsByTagName("h1");
// console.log(headings);
// // console.log(headings[0]);

// const myH1s = document.getElementsByClassName("heading");
// console.log(myH1s);

// const textPara = document.getElementById("text");
// console.log(textPara);

//querySelector(css selector) one thing(the first one it sees)
//., #, div p

//queryselectorAll
// const firstPara = document.querySelector("p");
// console.log(firstPara);

// const allParas = document.querySelectorAll("p");
// console.log(allParas);

//interacting with the contents on the document
//textContent, innerText, innerHTMl

const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);
heading.textContent += " JS IS FUN";

// heading.innerText = "JS IS FUN";

const container = document.querySelector("div");
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'>visit google</a>";

const myName = "Azeez Thiago";
const firstName = "Azeez";
const lastName = "Thiago";
// const initails = "A.T";
const intro = document.querySelector("h2");
intro.textContent = `Welcome ${firstName.charAt(0)}.${lastName.charAt(0)}`;
//welcome initiials

//interact with attributes
const myLink = document.querySelector(".myLink");

//facebook
myLink.textContent = "Facebook";
myLink.setAttribute("href", "https://facebook.com");
myLink.setAttribute("target", "_blank");
myLink.getAttribute("href");
console.log(myLink.getAttribute("href"));

//interact with styles
myLink.style.color = "red";
myLink.style.textDecoration = "none";

const btn = document.querySelector("button");
// btn.className = "mybtn";
//classList
btn.classList.add("mybtn");
btn.classList.add("kelvin");
//remove classnames
btn.classList.remove("kelvin");

//create element in js
const section = document.createElement("section");
section.innerHTML = "<h1>Created from JS</h1>";
section.className = "mysection";

//append it body or wherever it is needed
const body = document.querySelector("body");

body.appendChild(section);

//respondng to users interaction
//1. event e.g. click, submit 2. event handler, function
const testbtn = document.querySelector(".testbtn");

testbtn.addEventListener("click", () => {
  console.log("User clicked");
  body.style.backgroundColor = "red";
});

//form handling
//submit
//click
//form refreshes the page when submitted
const form = document.querySelector("form");
const fullname = document.querySelector(".fullname");
const small = document.querySelector("form small");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullNameValue = fullname.value.trim();
  console.log("form submitted", fullNameValue);
  //validate the input
  if (fullNameValue === "") {
    small.style.display = "block";
    small.textContent = "Please provide a name";
  }
});
