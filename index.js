/* eslint-disable no-console */
'use strict';

function playRockPaperScissors(num) {
  if (num > 3 || num < 1) {
    throw new Error('Must input number from 1 - 3');
  }

  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(randomNo);

  if (num === randomNo + 1 || num === 1 && randomNo === 3) {
    console.log ('You Win')
  } else if (num === randomNo - 1 || num === 3 && randomNo === 1) {
    console.log('You Lose');
  } else if (num === randomNo) {
    console.log('It\'s a tie');
  }
}

try {
  playRockPaperScissors(3);
} catch (err) {
  console.error(err.message);
}