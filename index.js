/* eslint-disable no-console */
'use strict';

function jediName(firstName, lastName) {
  return (`${lastName.slice(0,3)}${firstName.slice(0,2)}`);
}

const myJediName = jediName('Beyonce','Knowles');

console.log(myJediName);