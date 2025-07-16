import React, { useState } from 'react';
import bg from '../../assets/background.png';
import Card from '../Card1'; // live weather card

export default function Live() {
  const [city, setcity] = useState('');
  const [weather, setweather] = useState(null);

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
    fetch(`https://api.weatherapi.com/v1/current.json?key=9f4371abefe947b7a02101529252305&q=${city}`)
      .then((response) => {
        if (!response.ok) {
          alert("Enter a valid city");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setweather(data);
      });
  };

  const emoji = weather ? getEmoji(weather.current.condition.text) : '';

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-4 flex flex-col items-center gap-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-4 text-center">
        Live Weather
      </h1>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-screen-sm">
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={getweather}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          SEARCH
        </button>
      </div>

      {/* Weather Card */}
      {weather && (
        <Card
          name={weather.location.name}
          temperature={weather.current.temp_c}
          weather={weather.current.condition.text}
          humidity={weather.current.humidity}
          time={weather.location.localtime}
          wind={weather.current.wind_kph}
          emoji={emoji}
        />
      )}
    </div>
  );
}
