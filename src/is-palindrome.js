// Basic
const isPalindrome = str => {
  const regex = /[\W_]/g // or const re = /[^A-Za-z0-9]/g
  const lowRegStr = str.toLowerCase().replace(regex, '')
  const reverseStr = lowRegStr.split('').reverse().join('')
  return reverseStr === lowRegStr
}

// Advanced.  Good for large strings.
const isPalindrome = str => {
  const regex = /[\W_]/g // or const re = /[^A-Za-z0-9]/g
  const lowRegStr = str.toLowerCase().replace(regex, '')
  const len = str.length

  for (let i = 0 i < len/2 i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }

  return true
}

// Advanced.  Recursive solution.  A bit slow.
const isPalindrome = (str, i = 0) => {
  const regex = /[\W_]/g // or const re = /[^A-Za-z0-9]/g
  const lowRegStr = str.toLowerCase().replace(regex, '')
  const len = str.length

  const loop = (len, str) => {
    return function iterate(i) {
      if (i >= len/2) return true
      if (str[i] !== str[len - 1 - i]) return false
      return iterate(i + 1)
    }
  }

  return loop(len, str)(0)
}
