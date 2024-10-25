function findMedian(arr) {
  const sorted = arr.sort((a, b) => a - b)
  return sorted[Math.round(arr.length / 2) - 1]
}

console.log(findMedian([5, 3, 1, 2, 4]))
console.log(findMedian([5, 3, 1, 20, 4]))
console.log(findMedian([10, 3, 12, 2, 24]))
console.log(findMedian([5, 14, 15, 33, 4]))
