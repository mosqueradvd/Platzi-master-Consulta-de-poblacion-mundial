'use strict';

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

let countries = [];
const url = 'http://localhost:3000/v1/countries';

fs.readdirSync(path.join(__dirname, './json/countries')).forEach((file) => {
  let country = require(`./json/countries/${file}`);
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(country),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', response));
});

console.log(countries);

fetch(url, {
  method: 'POST',
  body: JSON.stringify(countries),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((response) => console.log('Success:', response));
