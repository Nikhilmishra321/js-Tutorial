//primtive

//7types :String, Number,Booean,null,undefind,Symbol,BigInt

//Non primtive

//Arrays,object,Function

const heroes=["shakiman","hathim"]

let myObject={
    name:"ram",
    class:"bca"
}

let myFunction=function(){
    console.log("Hello world")

}
console.log(typeof myFunction)




//+++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive) heap(non-primitive)

let myYoutubeName="mishra@gmail.com"

let anotherName=myYoutubeName
anotherName="Nikhil@gmail.com"

console.log(myYoutubeName)
console.log(anotherName)