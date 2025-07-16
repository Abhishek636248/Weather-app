import React, { useState } from 'react';
import bg from '../../assets/background.png';
import Card2 from '../Card2';

export default function Forecast() {
  const [city, setcity] = useState('');
  const [forecast, setforecast] = useState(null);

  const getForecast = () => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f4371abefe947b7a02101529252305&q=${city}&days=3`)
      .then((response) => {
        if (!response.ok) {
          alert("Enter a valid city");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setforecast(data);
      });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-4 flex flex-col items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        3-Day Weather Forecast
      </h1>

      {/* Input and Button */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full max-w-screen-sm px-4">
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg shadow-md outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={getForecast}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
        >
          SUBMIT
        </button>
      </div>

      {/* Forecast Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {forecast &&
          forecast.forecast.forecastday.map((day, index) => (
            <Card2
              key={index}
              name={forecast.location.name}
              temperature={day.day.avgtemp_c}
              weather={day.day.condition.text}
              humidity={day.day.avghumidity}
              time={day.date}
              wind={day.day.maxwind_kph}
            />
          ))}
      </div>
    </div>
  );
}
