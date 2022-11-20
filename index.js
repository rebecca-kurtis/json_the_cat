const { fetchBreedDescription } = require("./breedFetcher");

let breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) =>{
  if (error) {
    console.log('Error fetch details:', error);
    // console.log(error);
  } else {
    // console.log
    console.log(desc);
  }
 });