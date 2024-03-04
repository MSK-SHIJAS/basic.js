// add two numbers

var a = 5;
var b = 6;
var c = a + b;
// console.log(c);

// arithematic operations


var x = 20;
var y = 10;
var e = x + y;
var f = x - y;
var g = x * y;
var h = x / y;
var i = x % y;
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);

let n = 5;
n++;
let z = n;
console.log(z);


let s = 5;
s--;
let w = s;
console.log(w);

// circle

let radius=10
area = 3.14*radius*radius
diameter = radius*radius
circumference = 2*3.14*radius
console.log(area);
console.log(diameter);
console.log(circumference);


// simple interest

let p =4900;
let r =2;
let t=3;
var interest = (p * r * t) / 100;
console.log("Simple Interest: " + interest);


// pattern 


let rows = 5;
let pattern = "";
for (let n = 1; n <= rows; n++) {
   for (let space = 1; space <= rows - n; space++) {
      pattern += " ";
   }
   for (let num = 1; num <= 2 * n - 1; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);

