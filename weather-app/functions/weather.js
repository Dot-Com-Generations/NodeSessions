const request = require('postman-request')

const weather = (query, callback) => {
    const access_key = '32e06eaffa8b2eb06f3269752688ab0f'
    const url = 'http://api.weatherstack.com/current?access_key=' + access_key + '&query=' + encodeURI(query)
    request({ url, json: true }, (error, res, data) => {
        if (error) {
            callback('No Connection Available', undefined)
            // console.log('No Connection Available')
        } else if (data.error) {
            callback('Location is Invalid', undefined)
            // console.log('Location is Invalid')
        }
        else {
            callback(undefined, {
                temp: data.current.temperature,
                location: data.location.name,
                des: data.current.weather_descriptions[0]
            })
            // console.log('Location - ' + data.location.name)
            // console.log('Temperature - ' + data.current.temperature)
            // console.log('Description - ' + data.current.weather_descriptions[0])
        }
    })
}

module.exports = weather