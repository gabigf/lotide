const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
    it("returns ['b', 'c', 'd'] for input of ['a', 'b', 'c', 'd']", () => {
        assert.deepEqual(tail(['a', 'b', 'c', 'd']), ['b', 'c', 'd']);
    });

    it('returns [2, 3, 4, 5] for input of [1, 2, 3, 4, 5]', () => {
        assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
    });

    it('returns [] for input of []', () => {
        assert.deepEqual(tail([]), []);
    });

});

