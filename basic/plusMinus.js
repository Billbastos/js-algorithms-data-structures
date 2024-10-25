function toFixed(value) {
  return value.toFixed(6)
}

function plusMinus(arr) {
  // Write your code here
  const arrSize = arr.length
  let positives = 0
  let negatives = 0
  let zeros = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++
    } else if (arr[i] < 0) {
      negatives++
    } else {
      zeros++
    }
  }

  console.log(toFixed(positives / arrSize))
  console.log(toFixed(negatives / arrSize))
  console.log(toFixed(zeros / arrSize))
}

plusMinus([-4, 3, -9, 0, 4, 1])
