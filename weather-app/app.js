// Accessing HTTP requests from web APIs (weatherstack.com)
// Note: Since request has been deprecated since 2020 we can use postman-request as an alternative.
// It works the same way
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if(!address) {
    console.log('Please provide a valid address!')
} else {
    // geocode(address, (error, geoCodeData) => {
    geocode(address, (error, { latitude, longitude, location } = {} ) => { // Object Destructuring syntax
        if(error) {
            return console.log(error)
        }
    
        // forecast(geoCodeData.latitude, geoCodeData.longitude, (error, forecastData) => { // Callback chaining
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
            
            // console.log(geoCodeData.location)
            console.log(location)
            console.log(forecastData)
        })
    })
}