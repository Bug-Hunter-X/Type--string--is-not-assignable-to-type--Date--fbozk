# Type 'string' is not assignable to type 'Date'
This TypeScript code demonstrates a common type error.  The `greet` function expects a `Date` object as its second argument, but a string is passed instead. This results in a type error because TypeScript's type system correctly identifies the type mismatch.

The solution involves correctly passing a `Date` object to the function.