/**
 * 2.2
 *
 * Implement an algorithm to find the nth to last element of a singly linked
 * list.
 */

var assert = require('assert');
var LinkedList = require('./linked-list');

// Create a list.
var list = new LinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
assert.deepEqual(list.toArray(), ['a', 'b', 'c', 'd', 'e']);

assert.deepEqual(list.nthToLast(1), ['e']);
assert.deepEqual(list.nthToLast(2), ['d', 'e']);
assert.deepEqual(list.nthToLast(3), ['c', 'd', 'e']);
assert.deepEqual(list.nthToLast(4), ['b', 'c', 'd', 'e']);
assert.deepEqual(list.nthToLast(5), ['a', 'b', 'c', 'd', 'e']);
