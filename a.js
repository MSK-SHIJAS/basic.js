
// addition
function add(a, b) {
    return a + b;
}
 let sum=add(40,20)
 console.log(sum);

// substraction
function sub(a, b) {
    return a - b;
}
 let ans=sub(40,20)
 console.log(ans);


// multiplication
function mul(a, b) {
    return a * b;
}
 let c=mul(40,20)
 console.log(c);


// division
function div(a, b) {
    return a / b;
}
 let d=div(40,20)
 console.log(d);



/USING ARROW/ 

// ADDITION
let a = (p,a) => p+a
 console.log("SUM " + a(10,10));

//  SUBTRACTION

 let B = (p,a) =>  p-a
 console.log("SUB " + B(40,20));

 //  MULTIPLICATION

 let C = (p,a) =>  p*a
 console.log("MUL " + C(40,20));

 //  DIVISION

 let D = (p,a) =>  p/a
 console.log("DIV " + D(40,20));