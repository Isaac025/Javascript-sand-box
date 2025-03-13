function calcSumOfNums() {
  const num1 = prompt("Enter First Number: ");
  const num2 = prompt("Enter Second Number: ");

  console.log(parseInt(num1) + parseInt(num2));
}

calcSumOfNums();
// type conversion
// numbers to strings tostring, sting
// strings to numbers
// 60 ===> '60

const num = 98;
console.log(typeof num);
console.log(typeof num.toString);
console.log(typeof String(num));

//strings to number //ade //'98' -- 98
//Number parseInt
const myStr = "30";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr) * 2);
