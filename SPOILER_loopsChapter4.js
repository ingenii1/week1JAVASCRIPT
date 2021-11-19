// // LOOPS WORK

// let favDrinks = ["Coffee", "Tea", "Pepsi", "Coke"]

// for (let i =0; i>favDrinks.length; i++) {
//     console.log(favDrinks[i])
// }

// let multiplesTwo = [];

// for (let i = 0; i < 2000; i++){
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`)

// let age = 15;
// while (age < 18 ){

//     console.log("You're a child!");
//     age++
// }

// console.log("You're an adult!")


// let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
// let currentCard = 'Club';

// while (currentCard != 'Spade'){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()* 4)]
// }

// console.log(currentCard)


// LOOPS ACTIVITIES

// // Activity 1
// let favFilms = ['Inception', 'The Dark Knight', 'Star Wars', 'Interstellar', 'Arrival'];
// favFilms.push('The Avengers', 'Ghostbusters');
// favFilms.pop();

// for (let i = 0; i <favFilms.length; i++){
//   console.log(favFilms[i])
// }


// // Activity 2
// for (let i = 0; i <6; i++) {
//   console.log(Math.floor(Math.random() * 50))
// }


// // Activity 3
// for (let i = 9; i>=0; i--){
//   console.log(i)
// }

// // Activity 4
// let myFilms = ['Batman', 'Superman', 'Star Wars', 'Avengers']

// for (let i = 0; i <myFilms.length; i++){
//   if (myFilms[2] === "Ghostbusters"){
//     console.log("Yay, it's Ghostbusters!")
//     break
//   } else {
//     console.log("Boo! We want Ghostbusters!")
//     break
//   }
// }


// // Activity 5
// let num = Math.floor(Math.random() * 30)
// for (let i = 0; i < 6; i++){
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
//     if (chrisFollowers[i] === johnFollowers[i]){
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

// let age=24;
// if(age>18){
// console.log(`${age} - £8`)

// } else if (age>18){
// console.log(`${age} - £10.95`)
// }
// else {
// console.log(`${age} -£7.50`)
// }

// let favSongs = [
//     "Grace",
//     "Something",
//     "Stairway To Heaven"
// ];

// console.log(favSongs[0]);
// console.log(favSongs[1]);
// console.log(favSongs[2]);