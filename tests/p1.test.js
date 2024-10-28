const p1 = require('../src/p1');

describe('Problem 01', () => {
    it('should insert values in the start of an array', () => {
        let output = p1([1, 2], 0, 0);
        expect(output).toEqual([0, 1, 2]);
    });

    it('should insert values in the middle of an array', () => {
        let output = p1([1, 2, 4], 3, 2);
        expect(output).toEqual([1, 2, 3, 4]);
    });

    it('should insert values in the end of an array', () => {
        let output = p1([1, 2], 3, 2);
        expect(output).toEqual([1, 2, 3]);
    });
});