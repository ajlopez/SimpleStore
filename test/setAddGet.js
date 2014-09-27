
var simplestore = require('../');

exports['get undefined entry'] = function (test) {
    var store = simplestore.createStore();

    test.equal(store.setGet(10), null);
}

exports['simple setAdd, setGet'] = function (test) {
    var store = simplestore.createStore();
    
    store.setAdd(10);
    test.ok(store.setGet(10));
}

exports['set and remove'] = function (test) {
    var store = simplestore.createStore();
    
    store.setAdd(20);
    test.ok(store.setGet(20));
    store.setRemove(20);
    test.equal(store.setGet(20), null);
}




