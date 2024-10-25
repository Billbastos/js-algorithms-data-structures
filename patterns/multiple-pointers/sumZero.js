/*  Write a function called sumZero that accepts a sorted array of integers.
    The function should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or undefined
    if a pair does not exist
*/

// It works unordered as well but o(n^2)
function sumZero(sortedArray) {
  // loop trought array and check the first item with all remaining items
  for (let i = 0; i < sortedArray.length; i++) {
    for (let k = i + 1; k < sortedArray.length; k++) {
      if (sortedArray[i] + sortedArray[k] === 0) {
        // should return array pair of the zero result e.g: [-3,3]
        return [sortedArray[i], sortedArray[k]]
      }
    }
  }
  // should return undefined if there's not 0 in the answer (don't need to return anything)
}

// Two pointers approach refactored o(n)
function sumZero(sortedArray) {
  let left = 0
  let right = sortedArray.length - 1
  while (left < right) {
    let sum = sortedArray[left] + sortedArray[right]
    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// [-3,-2,-1,0,1,2,4]

// examples:
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3,3]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 5])) // [-2,2]
console.log(sumZero([-101, -12, -10, 0, 1, 2, 10, 50, 100])) // [-10,10]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) // undefined

// Edge cases:
// Input is array that is not numbers?
// Input that is not an array (null, undefined, string, etc) ?
// Empty array?
