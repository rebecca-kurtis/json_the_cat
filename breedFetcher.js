const request = require('request');

// Input - request api function

const fetchBreedDescription = function(breedName, callback) {

  const input = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(input, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    // If breed is not found
    if (data.length === 0) {
      callback('Cat Breed not found, try again.', null);
      return;
    }
    // Print out the description only
    const desc = data[0].description;
    // console.log(typeof desc);
    callback(null, desc);
    return;

  });

};

module.exports = { fetchBreedDescription };
