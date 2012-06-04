
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

assert.equal(store.get('foo'), null);
store.put('user', 'adam');
assert.equal(store.get('user'), 'adam');



