import React, { useState } from 'react';
import bg from '../../assets/background.png';//background import kiya gya hai
import Card from '../Card1';//card import kiya gys hai

export default function Live() {
    const [city, setcity] = useState('');//by default city set ki hai
    const [weather, setweather] = useState(null);//weather updates set krdi hai null

    const getEmoji = (condition) => {
        const conditionLower = condition.toLowerCase();
        if (conditionLower.includes("sunny")) return "☀️";
        if (conditionLower.includes("cloud")) return "☁️";
        if (conditionLower.includes("rain")) return "🌧️";
        if (conditionLower.includes("snow")) return "❄️";
        if (conditionLower.includes("thunder")) return "⛈️";
        if (conditionLower.includes("mist") || conditionLower.includes("fog")) return "🌫️";
        return "🌍"; // default
    };

    const getweather = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=9f4371abefe947b7a02101529252305&q=${city}`) //city ko bhejke uska weather laaayega
            .then((response) => {          //response liya gya
                if (!response.ok) {        //response ok nhi hai toh alert show krdega
                    alert("Enter a valid city");
                } else {
                    return response.json();//vrna response kko json me convert kiya gya hai
                }
            })
            .then((data) => {
                setweather(data); //setweather me data set krdiya gya hai
            });
    };
    // Get emoji from weather condition
    const emoji = weather ? getEmoji(weather.current.condition.text) : '';//weather agya hai toh getemoji me condition ko bheja or usko emoji me store kro

    return (
        <div
            className='h-screen w-full bg-cover bg-center flex flex-col gap-y-6 items-center justify-start pt-12 px-4'
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="flex flex-row gap-2">
                <input
                    type="text"
                    placeholder='Enter your city'
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-60"
                />
                <button
                    onClick={getweather}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                    SEARCH
                </button>
            </div>

            {weather && (
                <Card
                    name={weather.location.name}
                    temperature={weather.current.temp_c}
                    weather={weather.current.condition.text}
                    icon={weather.current.condition.icon}
                    humidity={weather.current.humidity}
                    time={weather.location.localtime}
                    wind={weather.current.wind_kph}
                    emoji={emoji} // ✅ passing emoji as prop
                />
            )}
        </div>
    );
}
