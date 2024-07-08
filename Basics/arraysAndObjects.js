let sohail = {
    name: "sohail",
    age: 23,
    location: 'mumbai'
};

let rahul = {
    name: "rahul",
    age: 35,
    location: 'delhi'
};

let personIntro = (person) => {
    return(`Hello this is ${person.name} and my age is ${person.age} I live in ${person.location}`)
}

console.log(personIntro(rahul));
console.log(personIntro(sohail));



/////////////////////////////////////////////////

let arr =  [1,2,3,4,5]

console.log(arr.indexOf(5));
