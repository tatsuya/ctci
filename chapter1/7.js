/**
 * 1.7
 * 
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire 
 * row and column is set to 0.
 */

var assert = require('assert');

/**
 * If an element in an MxN matrix is 0, its entire row and column is set to 0.
 * 
 * @param {Array} matrix
 * @return {Array}
 */

function setZeros(matrix) {
  var rows = [];
  var columns = [];

  // Store the row and column index with value 0
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  // Set arr[i][j] to 0 if either row i or column j has a 0
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (rows[i] || columns[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

assert.deepEqual(
  setZeros([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]),
  [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]
);

assert.deepEqual(
  setZeros([
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]),
  [
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1]
  ]
);

assert.deepEqual(
  setZeros([
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0]
  ]),
  [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]]
);
