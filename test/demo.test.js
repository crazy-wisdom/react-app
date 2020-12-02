require('dotenv').config({
	path: '.env.test'
});

import "regenerator-runtime/runtime";
import https from 'https';

// console.log(process.env.SNOWPACK_PUBLIC_API_URL)

function request(url) {
  return new Promise(resolve => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        // console.log(JSON.parse(data));
        resolve(data);
      });

    }).on("error", (error) => {
      console.log("Error: " + error.message);
    });
  });
}


const url = process.env.SNOWPACK_PUBLIC_API_URL;
let data = null;

beforeEach(async () => {
  await request(url).then(response => function() {
    data = JSON.parse(response);
  }());
});


test('data id', async () => {
  expect.assertions(1);

  // console.log(data);
  expect(data.id).toBe(1);
});
