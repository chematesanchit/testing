import { expect } from 'chai';
import { assert } from 'chai';

import ArithmeticOperations from '../src/app.js';
// // import sinon from 'sinon';

// /// BDD ///



describe('addition', () => {
    it('add (2, 3 should return 5)', () => {
        expect(ArithmeticOperations.add(2, 3)).to.equal(5);
    });
});
describe('subtraction', () => {
    it('sub (2, 3 should return -1)', () => {
        expect(ArithmeticOperations.subtract(2, 3)).to.equal(-1);
    });
});
describe('multiplication', () => {
    it('mul (2, 3 should return 6)', () => {
        expect(ArithmeticOperations.multiply(2, 3)).to.equal(6);
    });
});
describe('divison', () => {
    it('add (2, 3 should return 2/3)', () => {
        expect(ArithmeticOperations.divide(2, 3)).to.equal(2/3);
    });
});
// import { assert } from 'chai'; // or any assertion library you're using
// import ArithmeticOperations from '../path/to/ArithmeticOperations'; // Update the path

// describe('suite 1', () => {
//     it('add (2, 3 should return 5)', () => {
//         // Assuming 'add' is a static method of ArithmeticOperations
//         const result = ArithmeticOperations.add(2, 3);
//         assert.strictEqual(result, 5);
//     });
// });


/// TDD////

const {suite,}