
var l = require('../lib/list'),
	assert = require('assert');

// Get Left/Right in empty list
var list = l.createList();
assert.equal(list.removeFromRight(), null);
assert.equal(list.removeFromLeft(), null);
// internal state
assert.equal(list.count, 0);
assert.equal(list.from, 0);
assert.equal(list.to, 0);
assert.equal(list.elements.hasOwnProperty(0), false);

// add and remove from right
list = l.createList();
list.addToRight(1);
assert.equal(list.removeFromRight(), 1);
assert.equal(list.removeFromRight(), null);
assert.equal(list.removeFromLeft(), null);
// internal state
assert.equal(list.elements.hasOwnProperty(0), false);

// add and remove from left
list = l.createList();
list.addToLeft(1);
assert.equal(list.removeFromLeft(), 1);
assert.equal(list.removeFromLeft(), null);
assert.equal(list.removeFromRight(), null);

// Add to Right, Remove from Left, 1000 items
list = l.createList();
for (var k = 1; k <= 1000; k++)
	list.addToRight(k);
for (var n = 1; n <= 1000; n++)
	assert.equal(list.removeFromLeft(), n);
	
