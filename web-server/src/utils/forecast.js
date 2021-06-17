const request = require('request')

//
// Goal 5: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ac3ce2e7c1795433968c3056e0d3c326&query=' + latitude + ',' + longitude + '&units=f'

    // request({ url: url, json: true }, (error, response) => {
    request({ url, json: true }, (error, { body } = {}) => {    // Object Property Shorthand Syntax of 'url' and Destructuring reponse
        if(error) { 
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error) { // Bad coordinates
            callback('Unable to find location! Please try again', undefined) 
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity level is currently '
            + body.current.humidity + '%.'
            )
        }
    })
}

module.exports = forecast