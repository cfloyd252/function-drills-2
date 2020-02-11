/* eslint-disable no-console */
'use strict';

function generateDaysInMonth(month, leapYear = false) {
  let description;

  switch(month.toLowerCase()) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    description = `There are 31 days in ${month.toUpperCase()}`;
    break;
  
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    description = `There are 30 days in ${month.toUpperCase()}`;
    break;

  case 'february':
    if (leapYear) {
      return description = 'There are 29 days in February';
    }

    description = 'There are 28 days in February';
    break;

  default:
    throw new Error('Must provide a valid month.');
  }

  return description;
}

try {
  const description = generateDaysInMonth('june');
  console.log(description);
} catch (err) {
  console.error(err.message);
}