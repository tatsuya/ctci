var assert = require('assert');
var LinkedList = require('./linked-list');

/**
 * Tests
 */

// Create an list object.
var list = new LinkedList();

// Append some elements.
list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
assert.deepEqual(list.toArray(), ['a', 'b', 'c', 'd', 'e']);

// Remove an element from the list.
list.remove('c');
assert.deepEqual(list.toArray(), ['a', 'b', 'd', 'e']);

// Remove first element of the list.
list.remove('a');
assert.deepEqual(list.toArray(), ['b', 'd', 'e']);

// Remove last element of the list.
list.remove('e');
assert.deepEqual(list.toArray(), ['b', 'd']);