
var simplestore = require('../');

exports['simple key'] = function (test) {
    var store = simplestore.createStore();

    store.put('user', 'adam');
    test.equal(store.get('user'), 'adam');
    store.remove('user');
    test.equal(store.get('user'), null);
}

exports['composed key'] = function (test) {
    var store = simplestore.createStore();

    store.put('user:1:name', 'adam');
    test.equal(store.get('user:1:name'), 'adam');
    store.remove('user:1:name');
    test.equal(store.get('user:1:name'), null);
}




