
var l = require('../lib/list');

exports['get left/right in empty list'] = function (test) {
    var list = l.createList();
    test.equal(list.removeFromRight(), null);
    test.equal(list.removeFromLeft(), null);
    test.equal(list.count, 0);
    test.equal(list.from, 0);
    test.equal(list.to, 0);
    test.equal(list.elements.hasOwnProperty(0), false);
}

exports['add and remove from right'] = function (test) {
    var list = l.createList();
    list.addToRight(1);
    test.equal(list.removeFromRight(), 1);
    test.equal(list.removeFromRight(), null);
    test.equal(list.removeFromLeft(), null);
    test.equal(list.elements.hasOwnProperty(0), false);
}

exports['add and remove from left'] = function (test) {
    var list = l.createList();
    list.addToLeft(1);
    test.equal(list.removeFromLeft(), 1);
    test.equal(list.removeFromLeft(), null);
    test.equal(list.removeFromRight(), null);
}

exports['add to right, remove from left, 1000 items'] = function (test) {
    var list = l.createList();
    for (var k = 1; k <= 1000; k++)
        list.addToRight(k);
    for (var n = 1; n <= 1000; n++)
        test.equal(list.removeFromLeft(), n);
}
