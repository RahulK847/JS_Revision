// Reverse a string without using built-in `reverse()`.  

const Reverse = (str) => {
    let reversed_str = "";
    for (const ch of str) {
        reversed_str = ch + reversed_str; // prepend instead of append
    }
    return reversed_str;
};

['Rahul', "Riya", 'Rohan'].forEach((str) => {
    console.log(Reverse(str));
});
