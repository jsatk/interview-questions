// Handles exact and close matching as well as memoizes for instances where we
// have a large dictionary.
const spellcheck = (dictionary, memo = {}) => {
  const getLooseMatch = (dictWord, s) => {
    if (dictWord.toLowerCase() === s.toLowerCase()) {
      return dictWord
    }
  }

  return function f(str, looseMatch, i = 0) {
    if (memo[str]) {
      return memo[str]
    }

    if (dictionary.length <= i) {
      return memo[str] = looseMatch || 'NONE'
    }

    const currentWord = dictionary[i]

    if (currentWord === str) {
      return memo[str] = currentWord
    }

    // Once we have a looseMatch no need to keep checking.
    const m = looseMatch || getLooseMatch(currentWord, str)
    return memo[str] = f(str, m, i + 1)
  }
}
