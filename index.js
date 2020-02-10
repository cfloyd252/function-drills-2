/* eslint-disable no-console */
'use strict';

function decode (encodedWord) {
  const firstLetter = encodedWord.slice(0,1);
  if (firstLetter === 'a') {
    return encodedWord.slice(1, 2);
  } else if (firstLetter === 'b') {
    return encodedWord.slice(2,3);
  } else if (firstLetter === 'c') {
    return encodedWord.slice(3,4);
  } else if (firstLetter === 'd') {
    return encodedWord.slice(4,5);
  } else {
    return ' ';
  }
}

const craft = decode('craft');
const block = decode('block');
const argon = decode('argon');
const meter = decode('meter');
const bells = decode('bells');
const brown = decode('brown');
const croon = decode('croon');
const droop = decode('droop');

console.log(craft,block,argon,meter,bells,brown,croon,droop);
