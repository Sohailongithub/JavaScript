let gender = 'male';
let name = 'sohail';


// Used Latest Arrow function ES6 
let suffix = (gender) => {
  if (gender == "male") {
    return `Hello Mr.`;
  } else {
    return `Hello Mrs.`;
  }
};

//testing the arrow function  
let finalStr = suffix(gender) + name;
console.log(`Testing of arrow function ${finalStr}`);


// Used Function expression 
function suffix1(gender1) {
  if (gender1 == "female") {
    return `Hello Mrs. `;
  } else gender1 == "male";
  return `Hello Mr. `;
}

//testing the function expression 
let title = suffix1(gender) + name;
console.log(`Testing of function expression ${title}`);


// Both functions are executing perfect 

