/**
 * 1.4
 * 
 * Write a method to decide if two strings are anagrams or not.
 */

var assert = require('assert');

function anagram(a, b) {
  return sort(a) === sort(b);
}

function sort(str) {
  var arr = str.split('');
  arr.sort();
  return arr.join('');
}

assert.equal(true, anagram('abcde', 'bcdea'));
assert.equal(false, anagram('abcde', 'aaaaa'));
