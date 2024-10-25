function flippingMatrix(matrix) {
  let matrixQs = matrix.length
  let total = 0
  for (let i = 0; i < matrixQs / 2; i++) {
    for (let j = 0; j < matrixQs / 2; j++) {
      total += Math.max(
        matrix[i][j],
        matrix[i][matrixQs - j - 1],
        matrix[matrixQs - i - 1][j],
        matrix[matrixQs - i - 1][matrixQs - j - 1]
      )
    }
  }
  return total
}

console.log(
  flippingMatrix([
    [1, 2],
    [3, 4],
  ])
)
console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
)
console.log(
  flippingMatrix([
    [1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31, 32],
    [33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48],
    [49, 50, 51, 52, 53, 54, 55, 56],
    [57, 58, 59, 60, 61, 62, 63, 64],
  ])
)
