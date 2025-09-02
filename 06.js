// Generate the first n Fibonacci numbers as an array
const fib = (num) => {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let seq = [0,1]
    for (let i = 2; i<num; i++){
        seq.push((seq[i-2] + seq[i-1]))
    }
    return seq.join(", ")
};
console.log(fib(8)); // 0, 1, 1, 2, 3, 5, 8, 13
