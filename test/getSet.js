
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

// Get undefined key

assert.equal(store.get('foo'), null);

// Simple put/get

store.put('user', 'adam');
assert.equal(store.get('user'), 'adam');

// Put null

store.put('user', null);
assert.equal(store.get('user'), null);






