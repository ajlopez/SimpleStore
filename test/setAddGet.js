
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

// Get undefined entry

assert.equal(store.setGet(10), null);

// Simple setAdd, setGet

store.setAdd(10);
assert.ok(store.setGet(10));

// set and remove

store.setAdd(20);
assert.ok(store.setGet(20));
store.setRemove(20);
assert.equal(store.setGet(20), null);



