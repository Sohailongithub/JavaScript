// let gender = "male";
// let name = "sohail"

// gender = 'female';
// name = 'afrin'

// gender = 'male';
// name = 'aftab';

// gender = "animal"
// name = "dog"

// if (gender == "female"){
//     console.log(`MRS. ${name}`);
// } else if (gender == "male"){
//     console.log(`MR. ${name}`);
// }else {
//     console.log("I dont know you !");
// }

//////////////////////////////////////////////////////////////////
//////////////////COFFEE MACHINE//////////////////////////////////


let coffeeMachine = (drink) => {
  switch (drink) {
    case 1:
      console.log(`espresso`);
      break;
    case 2:
      console.log(`Cappuccino`);
      break;
    case 3:
      console.log(`Latte`);
      break;
    case 4:
      console.log(`Mocha`);
    default:
      console.log("Invaild Selection");
      break;
  }

  console.log(`${drink} Your coffee is ready !`);
};

coffeeMachine(5);
