// primitive type

// 7 type: string ,Number,Boolean,null,undefined ,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')


console.log(id==anotherId);


const bigNumber=23393726
console.log(bigNumber);




//Refrence (Non primitive)

//Array,Object,Functions

const hero=["shakiman","doga","nagraga"]
let myObj={
    name:"nikhil mishra",
    age:21,
    gender:"Male",

}
const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof scoreValue);


// Stack and Heap memory in javaScript



//Stack(primitive) ,Heap (Non-primitive)

let myYoutubeName="Nikhil@mishra123";

let anotherName=myYoutubeName

console.log(anotherName);
console.log(myYoutubeName);

let user={
    email:"user@google.com",
    upi:"user@ybl"

}
let userTwo=user

userTwo.email="hitesh@google.com"


