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
 * Return an array containing all of the elements in the list.
 *
 * @return {Array} An array containing all of the elements in the list.
 * @api public
 */
LinkedList.prototype.toArray = function() {
  var array = [];
  var node = this.head;
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