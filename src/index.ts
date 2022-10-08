// PascalCase
enum Size {
  Small,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// function
// the best practice is should always properly annotated functions, like parameters and return type. Esp when building API for other people
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

// :void if the function are not going to return a value

calculateTax;
