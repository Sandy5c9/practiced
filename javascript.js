let message="HELLO,WORLD!";
const PI=3.14;
function greet(name){
    return`hello,${name}!`;
}
console.log(greet("ROHIT"));
//function declaration
function greet(name){
    return`hello,${name}`;
}
console.log(greet("sandeep jerripothula"));
//function expression
const hai=function(name){
    return`HELLO,${name}!`;
}
console.log(hai("ELEBERT"));
//arrow function
const abc=(name)=>`HELLO,$(name)!`;
console.log(greet("BUMRAH"));
 
//immediate
(function(){
    console.log("WELCOME TO ANURAG!")
})();

//CALLBACK
const anurag=(name)=>{
    console.log(`HELLO,${name}!`);
}
function processname(callback){
    const name="MR SANDEEP";
    callback(name);
}
processname(anurag);

//declaration and interation
let fruits=["apple","banana","cherry"];
fruits.forEach(fruit => console.log(fruit));

//arrays
fruits.push("orange");
fruits.forEach(fruit => console.log(fruit));
fruits.pop();
fruits.forEach(fruit => console.log(fruit));
fruits.shift();
fruits.forEach(fruit => console.log(fruit));
fruits.unshift("Grapes");
fruits.forEach(fruit => console.log(fruit));

//higher order function
let numbers=[22,33,44,55,66];
let squard=numbers.map(num=>num*num);
squard.forEach(sno=>console.log(sno));

//objects
let person={
    name:"JERRIPOTHULA",
    age:21,
    greet:function(name){
        return`HELLO,my name is sandeep ${this.name}`;
      },
    };
    console.log(person.name);
    console.log(person.greet());

    