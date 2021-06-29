import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WordScore from './js/dino.js';

$(document).ready(function () {
  let promise = WordScore.getDino();
  promise.then(function (response) {
    const body = JSON.parse(response);
    let dino = new WordScore(body[0][0]);
    $('#dino-name').text(`Your word is ${dino.word}`);
    $('#word-score').text(`Your Scrabble Score is ${dino.getValue()}`);
  } ,
  function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});

