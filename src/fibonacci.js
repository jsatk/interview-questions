// Basic
const fibonacci = num => {
  if (num <= 1) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

// Memoized
const fibonacci = (num, memo = {}) => {
  if (memo[num]) return memo[num]
  if (num <= 1) return 1

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)
}
