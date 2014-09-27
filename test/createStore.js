
var simplestore = require('../');

exports['create store'] = function (test) {
    var store = simplestore.createStore();

    test.ok(store);
}

