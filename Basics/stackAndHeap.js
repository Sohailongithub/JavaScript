// Stack memory stores primitive datatypes of values and it gives a copy of value 



let fruit = "mango";
console.log(fruit.charCodeAt(0));
console.log(fruit.codePointAt(0));
console.log(fruit.toUpperCase());


let fruit1 = "banana";
// console.log(fruit1);

fruit = "apple" 
// console.log(fruit);

// Heap memory stores Non-primitive datatypes of values and it gives refrence of value

let user1 = {
    email: "user1@email.com",
    Id: "user1Id"
};
// console.log(user1);


let user2 = {
    email: "user2@gmail.com",
    Id: "user2Id"
};
// console.log(user2);


user2.email = "Gian2@gmail.com"
// console.log(user2);

