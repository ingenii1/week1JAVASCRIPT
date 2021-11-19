//OBJECT DECLARATION
const person =
{name: "Boris"}
console.log (person.name)
//FUNCTION DECLARATION

let sayHi=false; //==>VARIABLE DECLARATION/BOOLEAN DATA TYPE
const introduce = () =>
{if (sayHi)
    { console.log(`Hello my name is ${person.name}`);
    sayHi=false}
    else
    {console.log("bye");
    sayHi=true}
}
introduce();