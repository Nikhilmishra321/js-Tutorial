//function  are the main “building blocks” of the program. They allow the code to be called many times without repetition.

//Function Decleration

// function showMessage(){
//     alert("hello everyone");
// }

showMessage();

// Local variable

// A variable declared inside a function is only visible inside that function.

// For example:

function showMessage(){
    let message="Hello , i'm JavaScript";

    alert(message);
}
showMessage();

//Outer Variable

let userName="john";

function showMessage(){
    let messages='Hello' + userName;
    alert (messages);
}
showMessage();


//Returing a values

function sum(a,b){
    return a+b;
}
let result=sum(2,9);
alert(result);

