const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=ac3ce2e7c1795433968c3056e0d3c326&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    // The below callback fires when data comes in
    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        // console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()