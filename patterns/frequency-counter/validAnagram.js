// Not too much efficient o(n^2)
function validAnagram(str1, str2) {
  const isStr1Nullish = str1 === null || typeof str1 === `undefined`
  const isStr2Nullish = str2 === null || typeof str2 === `undefined`
  if (isStr1Nullish || isStr2Nullish) return false
  if (str1.length !== str2.length) {
    return false
  }
  // loop str1 and find index of str1 on str2
  for (let i = 0; i < str1.length; i++) {
    const str2Idx = str2.indexOf(str1[i])
    // if it finds, remove from str2 and continue
    if (str2Idx >= 0) {
      const strArr = str2.split('')
      strArr.splice(str2Idx, 1)
      str2 = strArr.join('')
      continue
    }
    // if not return false
    return false
  }
  // return true isAnagram, or false itIsNotAnAnagram
  return true
}

// Most efficient
function validAnagram(str1, str2) {
  const isStr1Nullish = str1 === null || typeof str1 === `undefined`
  const isStr2Nullish = str2 === null || typeof str2 === `undefined`
  const isObject = typeof str1 === 'object' || typeof str2 === 'object'
  if (isStr1Nullish || isStr2Nullish || isObject) return false
  if (str1.length !== str2.length) {
    return false
  }
  let strObj1 = {}
  for (let char of str1) {
    strObj1[char] = ++strObj1[char] || 1
  }
  // loop str1 and find index of str1 on str2
  for (let i = 0; i < str2.length; i++) {
    // if str2 has the same key and value as current str1 [key, value] if not return false
    if (!strObj1[str2[i]]) {
      return false
    } else {
      strObj1[str2[i]] -= 1
    }
  }
  // return true isAnagram, or false itIsNotAnAnagram
  return true
}

// Tests
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('qwerty', 'yrtqwe')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('caasas', 'acaasa')) // false
console.log(validAnagram('caasas', 'acaass')) // true

// Edge cases (What should happen) ?
console.log(validAnagram(null, undefined))
console.log(validAnagram(1))
console.log(validAnagram({}, {})) // or arrays
