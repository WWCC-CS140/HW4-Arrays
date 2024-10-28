const p4 = require('../src/p4');

describe('Problem 04', () => {
    it('should sum two matrices', () => {
        let input1 = [
            [1, 1, 1],
            [2, 2, 2]
        ];
        let input2 = [
            [0, 1, 2],
            [2, 1, 0]
        ];
        let output = p4(input1, input2);
        expect(output).toEqual([
            [1, 2, 3],
            [4, 3, 2]
        ]);
    });

    it('should sum two matrices', () => {
        let input1 = [
            [1, 1],
            [2, 2],
            [3, 3]
        ];
        let input2 = [
            [0, 1],
            [2, 1],
            [4, 1]
        ];
        let output = p4(input1, input2);
        expect(output).toEqual([
            [1, 2],
            [4, 3],
            [7, 4]
        ]);
    });

    it('should return an empty array when empty matrices are given', () => {
        let output = p4([], []);
        expect(output).toEqual([]);
    })
});