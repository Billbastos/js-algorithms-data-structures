function addTo(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

// examples:
console.log(addTo(6)) // 21
console.log(addTo(10)) // 55
console.log(addTo(100)) // 5050
console.log(addTo(1000)) // 500500
