/** Given an array along with a chunk size, return a new array that contains 
 * many subarrays where the length of each subarray is length `size`. 
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

 const arrayChunk = (array, size) => {
    //Create an empty 'chunkedArray' to hold the subarrays
    //For each index in the array that is divisible by "size"
    //Create a subarray of length 'size' that slices from the current index
    // Push this subarray to our 'chunkedArray"
  
    const chunkedArray = []
    for (let i=0; i<array.length; i+=size){
        const subarray = array.slice(i, i+size)
        chunkedArray.push(subarray)
    }
    return chunkedArrays
  };
  
  module.exports = arrayChunk;