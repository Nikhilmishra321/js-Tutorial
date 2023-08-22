console.log("hello world")
/*
In a programming language, variables are used to store data values.

JavaScript uses the keywords var, let and const to declare variables.

An equal sign is used to assign values to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

let x;

*/

// At a restaurant, you order 1 soup for $10, 3 burger for $8 each and 1 ice-cream for  $5 use javaScript   to calculate cost of order

let soupPrice=10
let burgerPrice=8
let icePrice=5

//quantity of item

let soupQuantity=1;
let burgerQuantity=3;
let iceCreamQuantity=1;

//calculate total
const totalCost=( soupQuantity*soupPrice)+(burgerQuantity * burgerPrice)+(iceCreamQuantity*iceCreamPrice);
//print total cost
console.log('Total cost:$${totalCost}');
