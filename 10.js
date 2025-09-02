// Check if a number is prime. 

const is_prime = (num)=>{
    if (num <= 1) return "not a Prime number"; 
    for (let i = 2; i<Math.sqrt(num); i++){
        if (num%i == 0){
            return "not a Prime number"
        } 
    }
    return "a Prime Number"
}

let testNumbers = [1, 2, 3, 4, 5, 7, 11, 15, 17, 19, 21, 23, 25, 29, -31];
testNumbers.forEach((num)=>{
    console.log(`${num} is ${is_prime(num)}`)
})