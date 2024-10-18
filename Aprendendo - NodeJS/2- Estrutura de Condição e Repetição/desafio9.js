function fibonacci(num) {
  if (num <= 1) return num

  let total = 1
  let previous = 0

  for (let i = 2; i <= num; i++) {
    total += previous
    previous = total - previous
  }

  return total
}

console.log(fibonacci(10))