const p2 = require('../src/p2');

describe('Problem 02', () => {
    it('should remove values in the start of an array', () => {
        let output = p2([1, 2, 3], 0);
        expect(output).toEqual([2, 3]);
    });

    it('should remove values in the middle of an array', () => {
        let output = p2([1, 2, 3, 4], 2);
        expect(output).toEqual([1, 2, 4]);
    });

    it('should remove values in the end of an array', () => {
        let output = p2([1, 2, 3], 2);
        expect(output).toEqual([1, 2]);
    });
});