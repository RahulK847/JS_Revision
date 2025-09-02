// Check if a string is a palindrome. 

const pali = (str) => str === str.split("").reverse().join(""); // Super short one-liner version:


const palindrome = (str) => {
    let l = 0, r = str.length-1
    while (r>l){
        if (str[r] !== str[l]){
            return "is not";
        }
        r--;
        l++;
    }
    return "is";
}

["pop", 'ana', 'bacab', "ppap"].forEach((str)=>{
    console.log(`${str} ${palindrome(str)} a palindrome`);
})