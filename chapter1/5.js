/**
 * 1.5
 * 
 * Write a method to replace all spaces in a string with ‘%20’.
 */

var assert = require('assert');

function replace1(str) {
  return str.replace(/\s/g, '%20');
}

function replace2(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/\s/)) {
      str = str.slice(0, i) + '%20' + str.slice(i + 1);
    }
  }
  return str;
}

assert.equal(replace1('ab cd e'), 'ab%20cd%20e');
assert.equal(replace2('ab cd e'), 'ab%20cd%20e');
