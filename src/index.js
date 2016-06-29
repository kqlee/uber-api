const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

// Uber API Constants
const uberClientId = process.env.UBER_CLIENT_ID;
const uberServerToken = process.env.UBER_SERVER_TOKEN;

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
      if (callback) {
        callback(null, body);
      }
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
      if (callback) {
        callback(null, body);
      }
    });
  }

};

module.exports = Uber;
