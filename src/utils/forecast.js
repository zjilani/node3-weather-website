const request = require('request')

const forecast = (lati,long,callback) => {
    const url = 'https://api.darksky.net/forecast/372444c5b4ab58433fdb6afc8d901e93/'+encodeURIComponent(lati)+','+encodeURIComponent(long)+'?units=us'

    request( { url , json : true} , (error,{body}={})=>{
        if (error) {
            callback("Unable to connect to weather service!",undefined)
        }
        else if(body.error){
            callback("Unable to find the location!",undefined)
        }
        else {
            console.log(body.daily.data[0])
            callback(undefined,
                body.daily.data[0].summary + " It is currently "+ body.currently.temperature+" dgrees out.The high today is "+body.daily.data[0].temperatureHigh+" and the low today is "+body.daily.data[0].temperatureLow+".There is "+body.currently.precipProbability+" % chance of rain.")
        }

    })

}
module.exports = forecast