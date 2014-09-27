
var simplestore = require('../');

exports['get undefined key'] = function (test) {
    var store = simplestore.createStore();

    test.equal(store.get('foo'), null);
}

exports['simple put/get'] = function (test) {
    var store = simplestore.createStore();

    store.put('user', 'adam');
    test.equal(store.get('user'), 'adam');
}

exports['put null'] = function (test) {
    var store = simplestore.createStore();

    store.put('user', null);
    test.equal(store.get('user'), null);
}






