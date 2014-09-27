
var simplestore = require('../');

exports['set/get subkey'] = function (test) {
    var store = simplestore.createStore();

    test.equal(store.get('user:1:name'), null);
    store.put('user:1:name', 'adam');
    test.equal(store.get('user:1:name'), 'adam');
}



