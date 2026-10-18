console.log('hu');

//const str = "racecar";
// const isPalindrome = (words) => {
//     const cleanWords = words.toLowerCase();
//     const reverseWords = cleanWords.split('').reverse().join('');
//     return cleanWords === reverseWords;
// }
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("heloo"))


const palindromes = (word) => {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');;
    const reverseWord = cleanWord.split('').reverse().join('');
    return cleanWord === reverseWord;
}

module.exports = 
    palindromes
