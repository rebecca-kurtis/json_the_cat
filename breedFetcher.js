const request = require('request');

const args = process.argv;
let argRequests = args.slice(2);
let catName = argRequests[0];

const input = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(input, (error, response, body) => {

  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Cat Breed not found, try again.');
    return;
  }
  for (const value of data) {
    console.log(value.description);
  }

  return;

});
