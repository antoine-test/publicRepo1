function sum(xs) {
  return xs.reduce((acc, current) => acc + current); // Noncompliant
}
console.log(sum([1, 2, 3, 4, 5])); // Prints 15
console.log(sum([])); // TypeError: Reduce of empty array with no initial value

