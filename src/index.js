const request = require('request');
const oauth2lib = require('oauth20-provider');
const dotenv = require('dotenv');

// Initializations
dotenv.config();
const oauth2 = new oauth2lib({ log: { level: 2 } });

// Uber API Constants
const uberClientId = process.env.UBER_CLIENT_ID;
const uberClientSecret = process.env.UBER_CLIENT_SECRET;
const uberServerToken = process.env.UBER_SERVER_TOKEN;

// Application name
const App = 'FILL_IN_APPLICATION_NAME';

const Uber = {

  GetPriceEstimate: (queryParams, callback) => {
    request({
      url: 'https://api.uber.com/v1/estimates/price',
      headers: {
        Authorization: 'Token ' + uberServerToken,
      },
      qs: {
        start_latitude: queryParams.start_latitude,
        start_longitude: queryParams.start_longitude,
        end_latitude: queryParams.end_latitude,
        end_longitude: queryParams.end_longitude 
      },
      method: 'GET',
    }, (err, res, body) => {
      if (err) {
        callback(err);
      }
      callback(null, body);
    });
  },

  GetTimeEstimate: (queryParams, callback) => {
    request({
      url: 'https://api.uber.com/v1/estimates/time',
      headers: {
        Authorization: 'Token ' + uberServerToken,
      },
      qs: {
        start_latitude: queryParams.start_latitude,
        start_longitude: queryParams.start_longitude,
        end_latitude: queryParams.end_latitude,
        end_longitude: queryParams.end_longitude 
      },
      method: 'GET',
    }, (err, res, body) => {
      if (err) {
        callback(err);
      }
      callback(null, body);
    });
  },

};

module.exports = Uber;
