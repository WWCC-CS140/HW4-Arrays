const p3 = require('../src/p3');

describe('Problem 03', () => {
    it('should add up all columns', () => {
        let input = [
            [1, 3, 5],
            [7, 9, 1]
        ];
        let output = p3(input);
        expect(output).toEqual([8, 12, 6]);
    });

    it('should add up all columns', () => {
        let input = [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8]
        ];
        let output = p3(input);
        expect(output).toEqual([10, 26]);
    });

    it('should return an empty array for an empty matrix', () => {
        let output = p3([]);
        expect(output).toEqual([]);
    });
});