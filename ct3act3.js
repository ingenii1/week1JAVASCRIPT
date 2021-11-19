let password="keyword";
let a=password.length;
console.log(a);


let num=625735

let b=num%3
let c=num%5

console.log(b);
console.log(c);

switch (true){
    case num % 5 == 0:
        console.log("this number is divisible by 5");
        break;
        case num % 3 == 0:
            console.log("this number is divisible by 3");
            break;
            default:
                console.log(`${num} not divisible by 3 or 5`);
}