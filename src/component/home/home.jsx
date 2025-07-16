import React from 'react';
import bg from '../../assets/background.png';
import Card from '../Card1';

export default function Home() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex flex-col-reverse md:flex-row gap-6 items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Left Text Box */}
      <div className='w-full md:w-[400px] flex flex-col gap-4 text-black text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-extrabold drop-shadow-lg'>SKY-CAST 🌍</h1>
        <h2 className='text-xl md:text-2xl font-semibold'>Your Personalised Weather App</h2>
        <p className='text-base md:text-lg leading-relaxed'>
          The application presents the weather forecast for today and upcoming days. It shows humidity and temperature of your city.
        </p>
      </div>

      {/* Right Card */}
      <div className="w-full sm:w-[80%] md:w-[400px]">
        <Card
          name="kanpur"
          temperature="32-C"
          weather="Cloudy"
          time='10:40'
          humidity="30%"
          wind="30Km/h"
          emoji='🌍'
        />
      </div>
    </main>
  );
}
