console.log(10+"20");
console.log(9 - "5");
console.log("java" +"Script");
console.log(" " +" ");
console.log("vinod" - "thapa");
console.log(true +true);



// interview question 1
// Difference between null vs undefined?

var iamnotuse=null
console.log(iamnotuse);
console.log(typeof(iamnotuse));


// what is NaN


// Nan is a property of global object.
// In other words it is a variable in global scope
// The initial value of Nan is Not-A-Number

var myPhoneNumber=8864008061;
var myName= "Nikhil mishra";

console.log(isNaN(myPhoneNumber));

console.log(isNaN(myName));

if((isNaN(myName))){
    console.log("please enter valid number");
}
