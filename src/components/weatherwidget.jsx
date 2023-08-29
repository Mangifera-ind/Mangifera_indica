import React,{ useState, useEffect} from "react";
import {ApiGet} from '../help/network';


 function WeatherWidget(props) {

    const [weatherData, setWeatherData] = useState(false)
  
   
        useEffect( () => {

            const apiAsyncGetCall = async () => {

                let response = ApiGet('https://www.boredapi.com/api/activity', {});
                    // setWeatherData(response);
                    response.then(res =>{
                        if(res.status === 200)
                        setWeatherData(res.data)
                    })
            }
            apiAsyncGetCall();
            
          }, []);
    return (
      <div className="weather-widget">
        {weatherData ? (
      <div>
        <h2>activity : {weatherData.activity}</h2>
        <p>Key: {weatherData.key}</p>
        <p>link: {weatherData.link}</p>
        <p>price: {weatherData.price}</p>
        <p>type: {weatherData.type}</p>


      </div>
    ) : (
      <p>Loading weather data...</p>
    )}
      </div>
    );
  }
  
  export default WeatherWidget;
  