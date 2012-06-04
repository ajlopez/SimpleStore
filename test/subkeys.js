
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

assert.equal(store.get('user:1:name'), null);
store.put('user:1:name', 'adam');
assert.equal(store.get('user:1:name'), 'adam');



