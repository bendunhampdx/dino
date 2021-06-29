import {WordScore} from './../src/js/dino.js';

describe('WordScore', () => {

  test('should find the value of a single letter', () => {
let wordTest = new WordScore("Q");
    expect(wordTest.getValue()).toEqual(10);
  });
});