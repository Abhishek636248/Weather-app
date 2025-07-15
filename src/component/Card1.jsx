export default function Card({ name, temperature, weather, humidity, time, wind, emoji }) {
  return (
    <div className="h-[520px] w-[270px] bg-black rounded-[3rem] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-500 rounded-[2.5rem] p-5 flex flex-col items-center justify-between text-white">

       
        <div className="w-full flex flex-col items-center justify-center gap-1">
          <span className="text-xl font-bold">📍 {name}</span>
          <span className="text-base opacity-90">{time}</span>
        </div>

        
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-4xl">{emoji}</div>
          <h3 className="text-5xl font-bold">{temperature}°C</h3>
          <p className="text-lg font-medium">{weather}</p>
        </div>

        
        <div className="w-full flex justify-around text-sm font-medium">
          <div className="flex flex-col items-center">
            <span>💧</span>
            <p>Humidity</p>
            <p className="font-bold">{humidity}%</p>
          </div>
          <div className="flex flex-col items-center">
            <span>🌬️</span>
            <p>Wind</p>
            <p className="font-bold">{wind} km/h</p>
          </div>
          <div className="flex flex-col items-center">
            <span>🔆</span>
            <p>UV Index</p>
            <p className="font-bold">5</p>
          </div>
        </div>

        <div className="text-xs text-center opacity-80">
          ⏱️ Updated just now
        </div>
      </div>
    </div>
  );
}
