// Find the sum of digits of a number. 

const sum_of_digits = (num)=>{
    let sum = 0
    while (num>0){
        sum += num%10
        num = Math.floor(num/10)
    }
    return sum
}
[123, 456, 789].forEach((num)=>{
    console.log(`Digits Sum of ${num} is ${sum_of_digits(num)}`)
})