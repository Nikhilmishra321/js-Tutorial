//object literals

const jsUser={
    name:"Nikhil",
    class:"tybca",
    age:18,
    location:"surat",
    email:"@nikhilmishra"
}
console.log(jsUser);

jsUser.email="@nikhil"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}