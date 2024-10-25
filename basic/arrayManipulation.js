const slicing = (arr, ini, end) => {
  arr.slice(ini, end)
}

const splicing = (arr, ini, end) => {
  arr.splice(ini, end)
}

const arr = [1, 2, 3, 4, 5, 6]
slicing(arr, 1, 4)
console.log(`sliced`, arr)
splicing(arr, 1, 4)
console.log(`spliced`, arr)
