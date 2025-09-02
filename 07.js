// Find the largest number in an array.  

const largest = (arr)=>{
    let res = 0
    for (let num of arr){
        res = Math.max(res, num)
    }
    return res
}

console.log("largest Number is in the given array is ", largest([9, 3, 15, 2, 7]))