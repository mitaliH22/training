// function calculateBill() {
//   console.log("Running Calculate Bill!!");
//   const total = 100*1.3;
//   console.log(Math.floor(total));
//   return total;
// }

// calculateBill();

// const bill = 100;
// const taxRate = 0.13;
// function calculateBill() {
//   console.log("Running calculate bill!!");
//   const total = bill * 1 + taxRate;
//   return total;
// }

// function calculateBill(billAmount, taxRate) {
//     console.log(billAmount, taxRate);
//   // this is the function body
//   console.log("Running Calculate Bill!!");
//   const total = billAmount * (1 + taxRate);
//   return total;
// }
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);

// const firstName = "wes";
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }
// const greeting = sayHiTo("Wes");
// console.log(greeting);

// console.log(doctorize2("wes"));
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
function doctorize2(firstName) {
  return `Drr. ${firstName}`;
}

function greet(name){
  return `Hello ${name}`;
}

function go(){
  // debugger;
  const name = doctorize(greet('tess'));
  console.log(name);
}
go();


// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// const inchToCM2 = (inches) => {
//   return inches * 2.54;
// };

// const totalll = (a,b=3) => a+b;
// console.log(totalll(2)); 

// const b = (first,last) => ({name: `${first} ${last}`, age:0 });
// console.log(b("wes","tess"));

// (function () {
//   console.log("Running the Anon function");
//   return `Your are cool`;
// })();

// const wes = {
//   name: "Wes Bos",
//   // Method!
//   sayHi: function sayHi() {
//     console.log("Hey Wes!");
//     return "Hey Wes!";
//   },
//   //Short hand Method
//   yellHi() {
//     console.log("HEY WESSSSS");
//   },
// };

// const buttonn = document.querySelector(".clickMe");
// buttonn.addEventListener("click", wes.yellHi );
// console.log(buttonn);

// const button = document.querySelector(".clickk");
// button.addEventListener("click", function () {
//   console.log("nice Job!");
// });

// setTimeout(function () {
//   console.log("DONE TIME TO EAT");
// }, 10000);

