//OBJECT DECLARATION==>as follows
const pet =
//properties or keys separated by a coma
//=(KEY):(VALUE OF THE KEY) always separated by a colon
{name: "Warrior",
age: 12,

//Array:[]==>ARRAY DECLARATION.curly brackets
colour:
["brown","white","black","blonde"],

typeOfPet: 
["cat","dog"]
}
console.log (pet.name);//==>print out. (object.property or key)
console.log (pet["name"]);//==> print out (object[key])
console.log (pet.age);
console.log (pet.colour[0,3]);//==>print out [(row),(column)]
console.log (pet.typeOfPet[0,1]);

//FUNTION DECLARATION
const eating=true;
const drinking=false;
//<<funtion>>
const petState=()=>
{
if (eating)
{console.log(`your pet ${pet.name} with ${pet.age} years old, is eating`);
 }
else
if (drinking)
{console.log(`your pet ${pet.name} with ${pet.age} years old, is drinking`);
 drinking = false;}
else
{console.log("your pet "+(pet.name)+" with "+(pet.age)+" years old is neither drinking nor eating");}
}
petState();
console.log("hello world");
