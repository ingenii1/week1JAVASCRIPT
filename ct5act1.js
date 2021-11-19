const n=3
console.log(n)
function factorial (n)
{
    if ((n===0)||(n===1))
    {return 1} 
    else
    {return (n*factorial(n-1))}

}
console.log(factorial(33))
console.log(n)