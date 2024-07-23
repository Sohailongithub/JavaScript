function sayMyName() {
  console.log("Sohail");
}

function addNumber(num1, num2) {
  console.log(num1 + num2);
}

// sayMyName();
// addNumber(10, 5)

function subtractNumber(num1, num2) {
  return num1 - num2;
}

let result = subtractNumber(10, 5);
// console.log(`Result : ${result}`);

let userLoggedIn = (username) => {
  if (!username) {
    return `Please Enter username`;
  } else {
    return `${username} just logged In`;
  }
};

// console.log(userLoggedIn());
// console.log(userLoggedIn("Sohail"));
// console.log(userLoggedIn("Sohail"));

////////////Video 2//////////////////

const calculateCart = (...val) => {
    return val
}

// console.log(calculateCart(200, 4000, 5000, 15000, 5000));

let user = {
    userName : "Aftab",
    age : 19,
    location : "Mumbai"
}

let handleObject = (anyObject) => {
    console.log(`Hello ${anyObject.userName} welcome to ${anyObject.location} You are ${anyObject.age} Years Old`);
}

// handleObject({
//     userName : "sohail",
//     age : 23,
//     location : "Mumbai"
// })


let Arr = ["Car", "Bike", "AirPlane", "Ship"]

let returnThirdValue = (anyArray) => {
    return anyArray[2];
}
console.log(returnThirdValue(["Apple", "Banana", "Mango", "Berry"]));

console.log(returnThirdValue(Arr));