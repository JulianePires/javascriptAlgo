/**
 * Returns an array that contains the indexes of the greaters elements 		 * near of each value of the parameter array.
 *
 * @param		array An array of numbers.
 * @returns	An array of indexes (numbers).
 */
const nearestGreater = (array) => {
    const arraySize = array.length
    
    return array.map((value, index) => {
        let preIndex = index-1
        let postIndex = index+1
        
        while(preIndex >= 0 || postIndex < arraySize){
            if(preIndex >= 0 && array[preIndex] > value) return preIndex
            if(postIndex < arraySize && array[postIndex] > value) return postIndex
            preIndex--
            postIndex++
        }
        
        return -1
    })
}

const largestAdjacentProduct = (inputArray) => {
    const arraySize = inputArray.length
    let largestProduct = Number.MIN_SAFE_INTEGER
    
    for(let pointer = 0; pointer < arraySize-1; pointer++){
        largestProduct = Math.max(inputArray[pointer]*inputArray[pointer+1], largestProduct)
    }
    
    return largestProduct
}

module.exports = {nearestGreater, largestAdjacentProduct}
	