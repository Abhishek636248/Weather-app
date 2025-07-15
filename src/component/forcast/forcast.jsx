import React, { useState } from 'react';
import bg from '../../assets/Background.png'; //background import kiya gya hai
import Card2 from '../Card2'; //second card laaya gya hai

export default function Forcast() {
  const [city, setcity] = useState('');
  const [forcast, setforcast] = useState(null);

  const getForcast = () => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f4371abefe947b7a02101529252305&q=${city}&days=5`)
      .then((response) => {
        if (!response.ok) {
          alert("Enter a valid city");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setforcast(data); //forcast me pura data store krdiya gya hai
      });
  };

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-center p-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-3xl font-bold text-white mb-6">3-Day Weather Forecast</h1>

        <div className="flex gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            className="px-4 py-2 rounded-lg shadow-md outline-none"
          />
          <button
            onClick={getForcast}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md"
          >
            SUBMIT
          </button>
        </div>
        <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {forcast &&
      forcast.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-90 rounded-2xl p-4 shadow-xl text-center"
        >
          <Card2
            name={forcast.location.name}
            temperature={day.day.avgtemp_c}
            weather={day.day.condition.text}
            icon={"https:" + day.day.condition.icon}
            humidity={day.day.avghumidity}
            time={day.date}
            wind={day.day.maxwind_kph}
          />
        </div>
      ))}
  </div>
</div>  
      </div>
    </>
  );
}
