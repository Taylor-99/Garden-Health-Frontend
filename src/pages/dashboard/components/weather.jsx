
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import withAuth from '../../components/withAuth';

const weather = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [weatherData, setWeatherData] = useState([]);

        const fetchWeather = async () => {

            try {
                const response = await fetch('http://localhost:4000/dash/getweather', {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                    }
                });

                const data = await response.json()
                setWeatherData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        useEffect(() => {
            fetchWeather();

        }, []);

        if (isLoading) return <p>Loading...</p>
        if (!weatherData) return <p>No weather data</p>

        //convert from Kelvin to Fahrenheit
        let fahrenheit = ((weatherData.main.temp) - 273.15) * 1.8 + 32

        fahrenheit = fahrenheit.toFixed(2)

    return (
        <div className="flex justify-center">
            <div className="bg-slate-50 p-4 rounded-lg shadow-md flex items-center justify-between max-w-xs w-80">
                <div className="">
                    <p className="text-center">{weatherData.weather[0].main}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        className="w-20 h-20 text-center"
                        alt={weatherData.weather[0].description}
                    />
                </div>
                <div className=" border-l border-gray-400 pl-10 text-center p-5">
                    <p className="text-sm text-gray-600 text-center">{weatherData.name}</p>
                    <p className="text-2xl font-bold text-center" >{fahrenheit}°</p>
                </div>
            </div>
        </div>
    )
}

export default withAuth(weather)