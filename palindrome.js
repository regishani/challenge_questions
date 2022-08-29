/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

//1st WAY
 const palindrome = (str) => {
    //Check if first string and last string are the same
    return str === reversedString(str)
};
const reversedString = (str) =>{
    return str.split('').reverse().join('')
}

//2nd way!!!
const palindrome = (str) => {
    const middle = Math.floor(str.length/2)
    for (let i = 0; i<middle; i++){
        const reversedIndex = str.length -1 -i
        if(str[i]!= str[reversedIndex]){
            return false
        }else{
            return true
        }

    }
}

module.exports = palindrome;