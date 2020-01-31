const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const search = process.argv[2];

if(search){
    geocode(search, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log(error)
        } 
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        });
    });
} else{
    console.log("Nothing to search");
}


