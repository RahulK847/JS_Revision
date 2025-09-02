// Find the factorial of a number using recursion.  

const factorial = (num)=>{
    if (num == 1 || num == 2){
        return num
    }
    return num*factorial(num-1)
}

[1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => {
    console.log(`${num}! = ${factorial(num)}`);
});

