/**
 * 1.2
 * 
 * Write code to reverse a C-Style String. (C-String means that “abcd” is 
 * represented as five characters, including the null character.)
 *
 * There are no "char"s in js, so this in not exactly what question wants
 */

var assert = require('assert');

function reverse(str) {
  var tmp = '';
  for (var i = str.length - 2; i >= 0; i--) {
    tmp += str[i];
  }
  return tmp;
}

assert.equal(reverse('abc\0'), 'cba');
