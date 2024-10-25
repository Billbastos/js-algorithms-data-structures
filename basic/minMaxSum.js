function miniMaxSum(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const max = sorted.reduce((acc, a, i) => (i === 0 ? acc : acc + a), 0)
  const min = sorted.reduce(
    (acc, a, i) => (i === arr.length - 1 ? acc : acc + a),
    0
  )
  console.log(`${min} ${max}`)
}

miniMaxSum([1, 3, 5, 7, 9])
