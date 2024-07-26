const Calculate = (num1,num2, operation) => {
  if (operation === 'add') {
    return (`You have Added Num1 and Num2 : ${num1 + num2}`);
  } else if (operation === 'subtract') {
    return (`You have Subtracted Num1 and Num2 : ${num1 - num2}`);
  } else if (operation === 'multiply') {
    return (`You have Multiplied Num1 and Num2 : ${num1 * num2}`);
  } else if (operation === 'divide') {
    return (`You have Divided Num1 and Num2 : ${num1 / num2}`);
  } else if (operation === 'modulus'){
    return (`Modulus of Num1 & Num2 : ${num1 % num2}` )
  } else {
    return (`Invaild`)
  }
};

console.log(Calculate(10, 5, 'add'));
console.log(Calculate(10, 5, 'subtract'));
console.log(Calculate(10, 5, 'multiply'));
console.log(Calculate(10, 5, 'divide'));
console.log(Calculate(7, 3, 'modulus'));
