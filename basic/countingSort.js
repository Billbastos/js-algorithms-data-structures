function countingSort(arr) {
  const frequency = new Array(100).fill(0)
  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = frequency[arr[i]] + 1
  }
  return frequency
}

console.log(countingSort([1, 1, 3, 2, 1]))
