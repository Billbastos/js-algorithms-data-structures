function isSubsequence(subStr, str) {
  if (!subStr) return true
  let i = 0
  for (let j = 0; j < str.length; j++) {
    if (subStr[i] === str[j]) {
      if (++i === subStr.length) {
        return true
      }
    }
  }
  return false
}

//examples
console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('helle', 'hello world')) // false
console.log(isSubsequence('sing', 'sting')) // true
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
