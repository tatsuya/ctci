/**
 * 1.1
 * 
 * Implement an algorithm to determine if a string has all unique 
 * characters. What if you can not use additional data structures?
 */

var assert = require('assert');

function isUniqueChars(str) {
  var chars = [];
  for (var i = 0; i < str.length; i++) {
    if (chars.indexOf(str[i]) > -1) {
      return false;
    }
    chars.push(str[i]);
  }
  return true;
}

assert.equal(isUniqueChars('abc'), true);
assert.equal(isUniqueChars('aba'), false);
assert.equal(isUniqueChars('aaa'), false);