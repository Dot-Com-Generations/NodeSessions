const weather = require('./functions/weather.js');
const query = process.argv[2]
if (query === undefined) {
    console.log('Please enter the Location')
} else {
    weather(query, (error, { temp, location, des }) => {
        if (error !== undefined) {
            console.log(error)
        } else {
            console.log('Location - ' + location)
            console.log('Temperature is - ' + temp)
            console.log('Description - ' + des)
        }
    })
}