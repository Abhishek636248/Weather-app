import React from 'react';
import bg from '../../assets/background.png';
import Card from '../Card1';

export default function Home() {
  return (
    <>
      <main
        className="h-screen w-full bg-cover bg-center flex flex-row gap-x-8 items-center justify-center px-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className='h-[500px] w-[400px] flex flex-col gap-y-4 text-black'>
          <h1 className='text-4xl font-extrabold drop-shadow-lg'>SKY-CAST 🌍</h1>
          <h2 className='text-2xl font-semibold'>Your Personalised Weather App</h2>
          <p className='text-base text-xl leading-relaxed'>
            The application presents the weather forecast for today and upcoming days. It shows humidity and temperature of your city.
          </p>
        </div>
        <Card
        name="kanpur"
        temperature="32-C"
        weather="Cloudy"
        time='10:40'
        humidity="30%"
        wind="30Km/h"
        emoji='🌍'
        />
      </main>
    </>
  );
}
