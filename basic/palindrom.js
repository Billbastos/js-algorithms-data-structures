const isPalindrom = (word) => {
  let isPalindrom = true
  const wordLength = word.length - 1
  for (let i = 0; i < wordLength; i++) {
    if (word.at(i) === word.at(wordLength - i)) continue
    return (isPalindrom = false)
  }
  return isPalindrom
}

console.log(isPalindrom('noon'))
console.log(isPalindrom('kayak'))
console.log(isPalindrom('umbrella'))
