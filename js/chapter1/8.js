/**
 * 1.8
 *
 * Assume you have a method isSubstring which checks if one word is a substring 
 * of another. Given two strings, s1 and s2, write code to check if s2 is a 
 * rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a 
 * rotation of “erbottlewat”).
 */

var assert = require('assert');

/** 
 * Checks if one word is a substring of another.
 * 
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean}
 */

function isSubstring(str1, str2) {
  return str1.indexOf(str2) > -1;
}

/**
 * Check if str1.length ==  str2.length. If not, return false. Else, concatenate
 * str1 with itself and see whether str2 is substring of the result.
 *
 * Example:
 *
 *   isRotation('apple', 'pleap') => apple is a substring of pleappleap
 *   isRotation('apple', 'ppale') => apple is not a substring of ppaleppale
 * 
 * @param {String} str1
 * @param {String} str2
 * @return {Boolean}
 */

function isRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var tmp = str1 + str1;
  return isSubstring(tmp, str2);
}

assert.equal(isRotation("waterbottle", "erbottlewat"), true);
assert.equal(isRotation("waterbottle", "waterbottle"), true);
assert.equal(isRotation("waterbottle", "elttobretaw"), false);
