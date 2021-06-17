const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname)
// console.log(__filename)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') // Customized views directory
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // To setup handlebars in express
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath)) 
hbs.registerPartials(partialsPath)

// Setup static directory to serve
// app.com
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Siddharth Santhanakrishnan',
        credits: 'Created by Siddharth Santhanakrishnan'
    })
})

// app.com/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name : 'My name is Siddharth Santhanakrishnan. ',
        description: 'I am an Oracle Certified Java Developer. ',
        credits: 'Created by Siddharth Santhanakrishnan'
    })
})

// app.com/help
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        faq: 'Please refer to our FAQs for more information',
        name: 'Siddharth Santhanakrishnan',
        credits: 'Created by Siddharth Santhanakrishnan'
    })
})

// app.com/weather
app.get('/weather', (req, res) => {
    const address = req.query.address

    if(!address) {
        return res.send({
            error: 'Please provide an address to proceed!'
        })
    }

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
            // console.log(location)
            // console.log(forecastData)

            res.send({
                forecast: forecastData,
                location,
                address
            })
        })
    })
})

// app.com/products
app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'Please provide a search term!'
        })
    }

    // console.log(req.query.search)
    req.query
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Help article not found!',
        credits: 'Created by Siddharth Santhanakrishnan'
    })
})

// Wildcard(*) to print '404 Not found'
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page not found!',
        credits: 'Created by Siddharth Santhanakrishnan'
    })
})

app.listen(3000, () => { // port - 3000
    console.log('Server is up on port 3000.')
}) 