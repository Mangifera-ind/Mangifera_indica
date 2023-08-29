import WeatherWidget from '../components/weatherwidget'

function Weather(){
    return(
        <>
        <WeatherWidget query="New York" access_key='44d8dc229d2b321101d29cf5f9e499af'/>
        </>
    )
}


export default Weather;