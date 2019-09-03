const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/1be069beafa9fd4d557ce923529aee44/${longitude},${latitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ` It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. ` +
          `Todays high will be ${body.daily.data[0].temperatureHigh} degrees and the low will be ${body.daily.data[0].temperatureLow} degrees.`
      );
    }
  });
};

module.exports = forecast;
