## Homework 4 - Arrays

In this homework, you will complete several functions that will require you to
work with arrays (both single and multi-dimensional).

### P1) Insert a number into an array
Write a method that accepts an array, a value, and an index as parameters.
Your method should then insert that provided value into the array at the specified index.
This should not replace the value at the specified index but instead increase the size of the array by 1, shifting values as needed so that the new value can be inserted without losing any existing data.
You are not allowed to use any of the built-in Array methods (i.e. splice).

Example input and output:
```javascript
input:
  ray: [1, 2, 4]
  value: 3
  atIndex: 2

output: [1, 2, 3, 4]
```

### P2) Delete a slot from an array
Write a method that accepts an array and an index as parameters.
Your method should remove the specified slot from the array.
This should not leave an empty slot but instead shorten the array by 1, shifting values as needed so that no data is lost (other than the removed slot).
You are not allowed to use any of the built-in Array methods (i.e. splice)

Example input and output:
```javascript
input:
  ray: [1, 2, 3, 4]
  atIndex: 2

output: [1, 2, 4]
```


### P3) Sum each matrix column
Write a program that reads an a two dimensional array.
The program should sum each column and return a one dimension array with the results.
You can assume the matrix is not jagged.
You cannot assume the matrix is not empty.

Example input and output:
```javascript
input: [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]

output: [3, 6, 9]
```


### P4) Sum two matrices
Write a program that accepts two 2-dimensional array parameters.
Your program should sum these matrices and return a new matrix.
You can assume that both matrices will be the same shape.
You cannot assume the the matrices will not be empty.

Example input and output:
```javascript
input1: [
  [1, 2, 3],
  [4, 5, 6] 
]

input2: [
  [2, 2, 2],
  [1, 1, 1]
]

output: [
  [3, 4, 5],
  [5, 6, 7]
]
```
