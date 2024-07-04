// Primitive Data Types String, Number, Boolean, Null, Undefined, Symbole, BigInt 

let Str = "Sohail "

let Num = 23;

let isLoggedIn = false;

let car = null;

let state; 

let Symbol = ("@*#")

let BigInt = 2457984984894264892464894298498494894289429824984n

// console.log(Str);
// console.log(Num);
// console.log(isLoggedIn);
// console.log(car);
// console.log(state);
// console.log(Symbol);
// console.log(BigInt);

// Refrence type Non Primitive 

let arr = [1,2,3,4,5]

let obj = {
    name: "sohail",
    age: 23,
    relationshipStatus : "Single"
}

let greet = (name) => {
    console.log("Hello " + name + "!");
}


console.log(arr);
console.log(obj);
greet("Sohail");