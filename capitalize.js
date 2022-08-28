/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

 const capitalize = (str) => {
    const result = []
    for (let word of str.split (" ")) {
        const capitalizedWord = word[0].toUpperCase() + word.slice(1)
        result.push(capitalizedWord)
    }
    return result.join(" ")
  //Seperate into seperate arrays each word slice with " " as new words start after space
  //Capitalize arr[0] toUpperCase
  str.slice('')
};

//Second sol

//Create an empty 'result' string
const capitalize = (str) => {
    let result = str[0].toUpperCase()
    for (let i =1; i<str.length; i++){ //for each character in the string 
        if (str[i-1] === " "){ //If the character to the left has a space
            result +=str[i].toUpperCase //Capitalize the character and add it to 'result'
        }else{
            result+=str[i]//Add it to 'result'
        }
    }
return result   
            

}

module.exports = capitalize;