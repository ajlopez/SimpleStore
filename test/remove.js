
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

// Simple Key

store.put('user', 'adam');
assert.equal(store.get('user'), 'adam');
store.remove('user');
assert.equal(store.get('user'), null);

// Composed Key

store.put('user:1:name', 'adam');
assert.equal(store.get('user:1:name'), 'adam');
store.remove('user:1:name');
assert.equal(store.get('user:1:name'), null);





