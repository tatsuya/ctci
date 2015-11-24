/**
 * Write code to remove duplicates from an unsorted linked list.
 *
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */

var assert = require('assert');
var LinkedList = require('./linked-list');

// Create a list.
var list1 = new LinkedList();

// Append some elements.
['a', 'a', 'b', 'b', 'c', 'c'].forEach(function(elem) {
  list1.push(elem);
});
assert.deepEqual(list1.toArray(), ['a', 'a', 'b', 'b', 'c', 'c']);

// Remove duplicates from the list.
list1.removeDuplicates();
assert.deepEqual(list1.toArray(), ['a', 'b', 'c']);

var list2 = new LinkedList();
['a', 'b', 'c', 'a', 'b', 'c'].forEach(function(elem) {
  list2.push(elem);
});
assert.deepEqual(list2.toArray(), ['a', 'b', 'c', 'a', 'b', 'c']);

list2.removeDuplicates();
assert.deepEqual(list2.toArray(), ['a', 'b', 'c']);
