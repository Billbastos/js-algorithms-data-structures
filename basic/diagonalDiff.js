function diagonalDiff(arr) {
  leftDownDiagonal = 0
  rightDownDiagonal = 0
  for (let i = 0; i < arr.length; i++) {
    rightDownDiagonal += arr[i][arr[i].length - 1 - i]
    leftDownDiagonal += arr[i][i]
  }
  console.log(`l`, leftDownDiagonal)
  console.log(`r`, rightDownDiagonal)
  return Math.abs(leftDownDiagonal - rightDownDiagonal)
}

console.log(
  diagonalDiff([
    [11, 2, 4, 7],
    [4, 5, 6, 7],
    [10, 8, -12, 7],
    [1, 2, 3, 4],
  ])
)
