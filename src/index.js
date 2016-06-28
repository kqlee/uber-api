const fetch = require('isomorphic-fetch');
const dotenv = require('dotenv');
dotenv.config();

// Uber API Constants
const uberClientId = process.env.UBER_CLIENT_ID;
const uberServerToken = process.env.UBER_SERVER_TOKEN;

const Uber = {

  GetPriceEstimate: (queryParams) => {
    return fetch({
      url: "https://api.uber.com/v1/estimates/price",
      method: 'GET',
      headers: {
        Authorization: "Token " + uberServerToken,
      },
      data: {
        start_latitude: queryParams.start_latitude,
        start_longitude: queryParams.start_longitude,
        end_latitude: queryParams.end_latitude,
        end_longitude: queryParams.end_longitude
      },
      success: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.error(err);
      }
    });
  },


};



module.exports = Uber;
