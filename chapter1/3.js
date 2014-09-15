/** 
 * 1.3
 *
 * Design an algorithm and write code to remove the duplicate characters in a 
 * string without using any additional buffer. NOTE: One or two additional 
 * variables are fine. An extra copy of the array is not.
 * FOLLOW UP
 * Write the test cases for this method.
 */

var assert = require('assert');

function removeDuplicateChars(str) {
  var tmp = {};
  for (var i = 0; i < str.length; i++) {
    if (!tmp[str[i]]) {
      tmp[str[i]] = true;
    } else {
      str = str.slice(0, i) + str.slice(i + 1);
      i--;
    }
  }
  return str;
}

assert.equal(removeDuplicateChars('abcde'), 'abcde');
assert.equal(removeDuplicateChars('aabbccddee'), 'abcde');
assert.equal(removeDuplicateChars('abcdeabcde'), 'abcde');
assert.equal(removeDuplicateChars('aaaaabbbbb'), 'ab');
assert.equal(removeDuplicateChars('aa'), 'a');
assert.equal(removeDuplicateChars('a'), 'a');
assert.equal(removeDuplicateChars(''), '');