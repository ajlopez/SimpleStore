
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

// Simple Key

store.put('user', 'adam');
assert.equal(store.get('user'), 'adam');
store.delete('user');
assert.equal(store.get('user'), null);

// Composed Key

store.put('user:1:name', 'adam');
assert.equal(store.get('user:1:name'), 'adam');
store.delete('user:1:name');
assert.equal(store.get('user:1:name'), null);





