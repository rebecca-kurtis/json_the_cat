const request = require('request');

const args = process.argv;
let argRequests = args.slice(2);
let catName = argRequests[0];

// Input - request api function
const input = `https://api.thecatapi.com/v1/breeds/search?q=${catName}`;

request(input, (error, response, body) => {

  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  // If breed is not found
  if (data.length === 0) {
    console.log('Cat Breed not found, try again.');
    return;
  }
  // Print out the description only
  for (const value of data) {
    console.log(value.description);
  }

  return;

});
