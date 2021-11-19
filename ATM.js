// Cash Machine Function Challenge
let pinNumber = 2425;
let balance = 2000

const cashMachine = (pin, amount) => {

  if ((pin === pinNumber) && (amount <= balance)){
    const newBalance = balance - amount;
    console.log(`Succesfull! You have withdrawn £${amount}, your new balance is £${newBalance}.`)
  } else if ((pin === pinNumber) && (amount > balance)){
    console.log(`You cannot withdraw more than your current balance of £${balance}`)
  } else if (pin != pinNumber){
    console.log("Your pin is incorrect!")
  } else {
    console.log (`Your pin is incorrect or your balance isn't high enough!`)
  }
}

cashMachine(2423, 300);