const assert  = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
    it('returns [] for input of [1]', () => {
        assert.deepEqual(middle([1]), []);
    });
    it('returns [] for input of [1, 2]', () => {
        assert.deepEqual(middle([1, 2]), []);
    });
    it('returns [2] for input of [1, 2, 3]', () => {
        assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it("returns ['two', 'three'] for input of ['one', 'two', 'three', 'four']", () => {
        assert.deepEqual(middle(['one', 'two', 'three', 'four']), ['two', 'three']);
    });
});

