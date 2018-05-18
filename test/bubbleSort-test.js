import { assert } from 'chai';
import bubbleSort from '../lib/bubbleSort.js';

describe('bubbleSort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort)
  });

  it('should return an array', () => {
    let unsortedArray = [1, 3, 5, 6, 2, 9, 4];
    let sortedArray = bubbleSort(unsortedArray);

    assert.isArray(sortedArray)
  });

  it('should return an array of the same length', () => {
    let unsortedArray = [1, 3, 5, 6, 2, 9, 4];
    let sortedArray = bubbleSort(unsortedArray);

    assert.equal(sortedArray.length, 7);
  });

  it('should sort an array of numbers', () => {
    let unsortedArray = [1, 3, 5, 6, 2, 9, 4];
    let sortedArray = [ 1, 2, 3, 4, 5, 6, 9 ];
    let result = bubbleSort(unsortedArray);

    assert.deepEqual(result, sortedArray)
  });

  it('should sort an array of random letters', () => {
    let unsortedArray = ['d', 'g', 'f', 'a', 'c', 'e', 'b'];
    let sortedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let result = bubbleSort(unsortedArray)

    assert.deepEqual(result, sortedArray)
  });
});