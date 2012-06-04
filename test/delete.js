
var simplestore = require('../'),
	assert = require('assert');

var store = simplestore.createStore();

store.put('user', 'adam');
assert.equal(store.get('user'), 'adam');
store.delete('user');
assert.equal(store.get('user'), null);





