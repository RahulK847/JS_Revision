// Check if a number is even or odd. 

const oddEven = (num) => (num % 2 ? "Odd" : "Even");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.forEach((num) => {
    console.log(`${num} is ${oddEven(num)}`);
});
