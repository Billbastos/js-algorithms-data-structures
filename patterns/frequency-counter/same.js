function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  const frq1 = {}
  const frq2 = {}
  arr1.forEach((item, i) => (frq1[item] ? ++frq1[item] : (frq1[item] = 1)))
  arr2.forEach((item, i) => (frq2[item] ? ++frq2[item] : (frq2[item] = 1)))
  for (let key in frq1) {
    if (!(key ** 2 in frq2)) {
      return false
    }
    if (frq2[key ** 2] !== frq1[key]) {
      return false
    }
  }
  return true
}

// examples:
console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
