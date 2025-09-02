// Count the number of vowels in a string. 

const no_of_vowels = (str)=>{
    const vowels = new Set(["e", "a", "u", "i", 'o']);
    let count = 0;
    for (let ch of str.toLowerCase()){
        if (vowels.has(ch)){
            count++;
        }
    }
    return count;
}

my_str = "Hello World"
console.log(`Numbers of Vowels in ${my_str} is ${no_of_vowels(my_str)}`)