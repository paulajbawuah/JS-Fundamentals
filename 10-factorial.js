function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = parseInt(process.argv[2]);

const num = isNaN(arg) ? 1 : arg;

console.log(factorial(num));
