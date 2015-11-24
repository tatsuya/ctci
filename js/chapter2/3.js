/**
 * 2.3
 *
 * Implement an algorithm to delete a node in the middle of a single linked
 * list, given only access to that node.
 *
 * EXAMPLE
 * Input: the node ‘c’ from the linked list a->b->c->d->e
 * Result: nothing is returned, but the new linked list looks like a->b->d->e
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
list.remove('c');
assert.deepEqual(list.toArray(), ['a', 'b', 'd', 'e']);
list.remove('a');
assert.deepEqual(list.toArray(), ['b', 'd', 'e']);
list.remove('e');
assert.deepEqual(list.toArray(), ['b', 'd']);
list.remove('d');
assert.deepEqual(list.toArray(), ['b']);
list.remove('b');
assert.deepEqual(list.toArray(), []);