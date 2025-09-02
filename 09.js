// Swap two numbers without using a third variable.  
function swap(n1, n2) {
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
    return [n1, n2];
}

let n1 = 5, n2 = 3;
console.log("Before Swap:", n1, n2);
[n1, n2] = swap(n1, n2);
console.log("After Swap:", n1, n2);
