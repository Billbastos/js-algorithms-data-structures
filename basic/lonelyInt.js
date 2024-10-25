function lonelyInteger(a) {
  const sorted = a.sort((a, b) => a - b)
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i - 1]) {
      return sorted[i - 1]
    }
    i++
  }
  return sorted[sorted.length - 1]
}

console.log(lonelyInteger([1, 2, 4, 4, 3, 2, 1]))
