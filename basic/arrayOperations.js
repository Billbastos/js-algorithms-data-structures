const addToBeginning = (arr, val) => {
  arr.unshift(val)
}

const addToEnd = (arr, val) => {
  arr.push(val)
}

const removeFromBeginning = (arr) => {
  arr.shift()
}

const removeFromEnd = (arr) => {
  arr.pop()
}

const arr = [1, 2, 3, 4]
addToBeginning(arr, 0)
console.log(`addToBeginning`, arr)

addToEnd(arr, 5)
console.log(`addToEnd`, arr)

removeFromBeginning(arr)
console.log(`addToEnd`, arr)

removeFromEnd(arr)
console.log(`addToEnd`, arr)
