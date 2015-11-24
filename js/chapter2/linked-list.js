'use strict';

/**
 * Create an empty linked list.
 *
 * @constructor
 */
var LinkedList = function() {
  /**
   * First node in the list
   * @type {Node}
   */
  this.head = null;
};

/**
 * Add a node to the end of the list.
 *
 * @param {Object} data
 * @api public
 */
LinkedList.prototype.push = function(data) {
  var newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
  } else {
    var node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = newNode;
  }
};

/**
 * Remove the first occurrence of the given element in this list.
 *
 * @param {Object} data - element to be removed from the list.
 * @return {Boolean} true if the list contained the given element.
 * @api public
 */
LinkedList.prototype.remove = function(data) {
  var node = this.head;
  if (node.data === data) {
    this.head = node.next;
    return true;
  }

  var prev = node;
  var current = node.next;
  while (current !== null) {
    if (current.data == data) {
      prev.next = current.next || null;
      return true;
    }
    prev = current;
    current = current.next;
  }
  return false;
};

/**
 * Remove duplicates from the list.
 *
 * @api public
 */
LinkedList.prototype.removeDuplicates = function() {
  var table = {};
  var prev = null;
  var current = this.head;
  while (current != null) {
    if (table[current.data]) {
      prev.next = current.next;
    } else {
      table[current.data] = true;
      prev = current;
    }
    current = current.next;
  }
};

/**
 * Return an array containing all of the elements in the list.
 *
 * @return {Array} An array containing all of the elements in the list.
 * @api public
 */

/**
 * Return a list of elements.
 *
 * @param  {Node} [head] - A node to start loop from.
 * @return {Node[]} An array containing list of elements.
 */
LinkedList.prototype.toArray = function(head) {
  var array = [];
  var node = head || this.head;
  while (node !== null) {
    array.push(node.data);
    node = node.next;
  }
  return array;
};

/**
 * Execute a provided function once per element.
 *
 * @param  {Function} callback
 */
LinkedList.prototype.forEach = function(callback) {
  var node = this.head;
  while (node !== null) {
    callback(node.data);
    node = node.next;
  }
};

/**
 * Find the nth to last element of a list.
 *
 * Assumption: The minimum number of nodes in list is n.
 * Algorithm:
 *
 *   1. Create two pointers, p1 and p2, that point to the beginning of the node.
 *   2. Increment p2 by n positions, to make it point to the nth node from the
 *      beginning (to make the distance of n between p1 and p2).
 *   3. Check for p2->next == null if yes return value of p1, otherwise
 *      increment p1 and p2. If next of p2 is null it means p1 points to the nth
 *      node from the last as the distance between the two is n.
 *   4. Repeat Step 3.
 *
 * @param  {Integer} n
 * @return {Array}
 * @api public
 */
LinkedList.prototype.nthToLast = function(n) {
  var p1 = this.head;
  var p2 = this.head;
  for (var i = 0; i < n; i++) {
    p2 = p2.next;
  }
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return this.toArray(p1);
}

/**
 * Create a node.
 *
 * @param {Object} data
 * @constructor
 * @private
 */
var Node = function(data) {
  /**
   * A data in this node.
   * @type {Object}
   */
  this.data = data;

  /**
   * The next node.
   * @type {Node}
   */
  this.next = null;
};

/**
 * Export as a node module
 */
module.exports = LinkedList;
