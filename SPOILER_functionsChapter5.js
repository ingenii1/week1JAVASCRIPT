// const pressGrindBeans = () => {
//   console.log("Grinding for 20 seconds...");
// };

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// let coffeeIsGrinding = false;
// let coffeeIsGrinding = "Yes it is grinding";
// let coffeeIsGrinding = 100;

// const pressGrindBeans = () => {
//   if (coffeeIsGrinding) {
//     console.log("Stopping the grind.")
//     coffeeIsGrinding = false;
//   } else {
//     console.log("Grinding is about to begin...")
//     coffeeIsGrinding = true;
//   }
// }

// pressGrindBeans();
// pressGrindBeans();


// let accNumber1 = 50449921;
// let accNumber2 = 72329100;
// let accNumber3 = 211542689;

// const cashWithdrawal = (amount, accnum) => {
//   console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, accNumber1);
// cashWithdrawal(30, accNumber2);
// cashWithdrawal(400, accNumber3);


// const addUp = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(addUp(100,392));


// const multiplyByNineFifths = (celsius) => {
//   return celsius * (9/5);
// };

// const getFarenheit = (celsius) => {
//   return multiplyByNineFifths(celsius) +32;
// } 
// console.log(`The temperature is ${getFarenheit(15)}F`);

// function factorial(n) {
//   if ((n === 0) || (n === 1)){
//   return 1;
//   } else {
//     return (n*factorial(n-1));
//   }
// }

// console.log(factorial(33));

// const coffeeOrder = (size, typeOfDrink) => {
//   console.log(`You coffee order is a ${size} ${typeOfDrink}.`);
// }

// const factorial = (n) => {
//   if ((n === 0)) || ((n === 1)){
//     return 1;
//   } else {
//     return (n* factorial(n-1))
//   }
// } 
// console.log(factorial(33))

// // Pizza topping function
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//   console.log(`Pizza with ${topping1} & ${topping2}`);
//   orderCount++
// }

// console.log(takeOrder("Ham", "Pineapple"));
// // console.log(orderCount);

// // Cash Machine Function Challenge
// let pinNumber = 2425;
// let balance = 2000

// const cashMachine = (pin, amount) => {

//   if ((pin === pinNumber) && (amount <= balance)){
//     const newBalance = balance - amount;
//     console.log(`Succesfull! You have withdrawn £${amount}, your new balance is £${newBalance}.`)
//   } else if ((pin === pinNumber) && (amount > balance)){
//     console.log(`You cannot withdraw more than your current balance of £${balance}`)
//   } else if (pin != pinNumber){
//     console.log("Your pin is incorrect!")
//   } else {
//     console.log (`Your pin is incorrect or your balance isn't high enough!`)
//   }
// }

// cashMachine(2423, 300);


// Loops & Arrays
// // Activity 1
// let favFilms = ['Inception', 'The Dark Knight', 'Star Wars', 'Interstellar', 'Arrival'];

// favFilms.push('The Avengers', 'Ghostbusters')

// for (let i = 0; i <favFilms.length; i++){
//   console.log(favFilms[i])
// }


// // Activity 2
// for (let count = 0; count <=5; count++) {
//   console.log(Math.floor(Math.random() * 50))
// }

// // Activity 3
// for (let i = 9; i>=0; i--){
//   console.log(i)
// }


// // // Activity 4
// let myFilms = ['Batman', 'Superman', 'IronMan', 'Avengers']

// for (let i = 0; i <myFilms.length; i++){
//   if (myFilms[2] === "Ghostbusters"){
//     console.log("Yay, it's Ghostbusters!")
//   } else {
//     console.log("Boo! We want Ghostbusters!")
//   }
// }


// // Activity 5
// let num = Math.floor(Math.random() * 30)

// for (let i = 0; i <= 6; i++){
//   console.log(num)
//   if (num % 7 == 0){
//     console.log(` ----- ${num} is divisble by 7!`)
//   }
//   num = Math.floor(Math.random() * 30)
// }

// // Activity 6 
// let chrisFollowers = ['Ben', 'Jordan', 'Dan', 'John'];
// let johnFollowers = ['Chris', 'Jordan', 'Dan', 'Ben'];

// for (let i = 0; i<chrisFollowers.length; i++){
//   for (let j = 0; j<johnFollowers.length; j++){
//     }
//     if (chrisFollowers[i] === johnFollowers[j]){
//         console.log(`${chrisFollowers[i]} is in both arrays!`)
//   }
// }

// // Activity 7
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);
