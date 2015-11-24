/**
 * 1.6
 *
 * Given an image represented by an NxN matrix, where each pixel in the image is
 * 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
 * place?
 */

var assert = require('assert');

/** 
 * Rotate a NxN matrix by 90 degrees.
 * 
 * @param  {Array} matrix
 * @return {Array} matrix
 */
function rotate(matrix) {
  var n = matrix.length;
  for (var layer = 0; layer < n / 2; layer++) {
    var start = layer;
    var end = n - 1 - layer;

    for (var i = start; i < end; i++) {
      var offset = i - start;
      // save top
      var top = matrix[start][i];
      // left -> top
      matrix[start][i] = matrix[end - offset][start];
      // bottom -> left
      matrix[end - offset][start] = matrix[end][end - offset];
      // right -> bottom
      matrix[end][end - offset] = matrix[i][end];
      // saved top -> right
      matrix[i][end] = top;
    }
  }
  return matrix;
}

assert.deepEqual(
  rotate([
    ['00', '01', '02', '03', '04'],
    ['10', '11', '12', '13', '14'],
    ['20', '21', '22', '23', '24'],
    ['30', '31', '32', '33', '34'],
    ['40', '41', '42', '43', '44']
  ]),
  [
    ['40', '30', '20', '10', '00'],
    ['41', '31', '21', '11', '01'],
    ['42', '32', '22', '12', '02'],
    ['43', '33', '23', '13', '03'],
    ['44', '34', '24', '14', '04']
  ]
);
