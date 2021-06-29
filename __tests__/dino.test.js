import {WordScore} from './../src/js/dino.js';

describe('WordScore', () => {

  test('should find the value of a single letter', () => {
  let wordTest = new WordScore("Q");
    expect(wordTest.getValue()).toEqual(10);
  });

  test('should find the value of an entire word', () => {
  let wordTest = new WordScore("Zalmoxes");
    expect(wordTest.getValue()).toEqual(26);
  });

  // test('should pull a dino word from API', () => {
  //   expect(newDino.toBeDefined()).toBeDefined();
  // });

});