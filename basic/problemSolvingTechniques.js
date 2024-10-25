// 1. UNDERSTAND THE PROBLEM

// ===========================================
// Write a function which takes two numbers and
// return their sum.
// ===========================================

// 1. Can I restate the problem in my own words?
// - "implement addition"
// 2. What are the inputs that go into the problem?
// - ints?
// - floats?
// - what about string for large numbers?
// 3. what are the outputs that should come from the solution?
// - int?, float?, string?
// 4. Do I have enough information to solve the problem?
// what if there's just one number as argument in the function?
// 5. How should I label important pieces of data that are part of the problem?
// function add, num1, num2, return sum

// 2. EXPLORE CONCRETE EXAMPLES

// ===========================================
// Write a function which takes a string and
// return counts of each character in the string.
// ===========================================

/* 
    charCount("aaaa"); // {a:4}
    charCount("hello"); // {h:1, e:1, l:2, o:1}
    // --- More complex tests ---
    charCount("my phone number is 1234567") // Should we count numbers or spaces?
    charCount("Hello hi") // Should we add case or ignore it?
    charCount("") // What this should return?
    charCount(null) // what should happens if it not a string, like an object, or an array?
*/

// 3. BREAK IT DOWN

// return an object with keys that are lowercase alphanumeric characters in the string
// values should be the counts for each character.

function charCount(str) {
  // make object to return at end
  // loop over string, for each character
  // if char is number/letter AND a key in object, add one to count
  // if char is number/letter AND is not in the object, add char to obj and set value 1
  // if char something else (space, period, etc) don't do anything
  // return object at end
}

// 4. SOLVE / SIMPLIFY
function charCount(str) {
  // make object to return at end
  var result = {}
  // loop over string, for each character
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase()
    // if char something else (space, period, etc) don't do anything
    if (!/[a-z0-9]/.test(char)) {
      continue
    }
    // if char is number/letter AND a key in object, add one to count
    if (result[char]) {
      result[char]++
    }
    // if char is number/letter AND is not in the object, add char to obj and set value 1
    else {
      result[char] = 1
    }
  }

  // return object at end
  return result
}

// 5. LOOK BACK / REFACTOR
function charCountRefactor(str) {
  const result = {}
  for (let char of str) {
    char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      // REgex can become slow, charCodeAt to check alphanumeric could be a best solution
      result[char] = result[char] ? result[char]++ : 1
    }
  }
  return result
}

console.log(charCountRefactor('aaaa')) // {a:4}
console.log(charCountRefactor('hello')) // {h:1, e:1, l:2, o:1}
// --- More complex tests ---
console.log(charCountRefactor('my phone number is 1234567')) // Should we count numbers or spaces?
console.log(charCountRefactor('Hello hi')) // Should we add case or ignore it?
