/*
  Implement a function called countUniqueValues, which accepts a sorted array, 
  and counts the unique values in the array. There can be negative numbers in the array, 
  but it will always be sorted.
*/

// 1. Understand the problem
// We have to count the unique values in a sorted array.
// The array can have negative numbers.
// The array is sorted.
// We have to return the count of unique values.
// We have to return 0 if the array is empty.
function countUniqueValues(sortedArray) {
  // if the array is empty, return 0
  if (sortedArray.length === 0) return 0
  // create a pointer to the first element
  let i = 0
  // loop through the array
  for (let j = 1; j < sortedArray.length; j++) {
    // if the element in the first pointer is different from the element in the second pointer
    if (sortedArray[i] !== sortedArray[j]) {
      // move the first pointer to the next element
      i++
      // change the value of the element in the first pointer to the value of the element in the second pointer
      sortedArray[i] = sortedArray[j]
    }
  }
  // return the count of unique values
  return i + 1
}

// examples:
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4
console.log(countUniqueValues([1, 2, 3])) // 3
