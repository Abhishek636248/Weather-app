export default function Card({ name, temperature, weather, humidity, time, wind, emoji }) {
  return (
    <div className="w-[90%] max-w-[270px] bg-black rounded-[2rem] p-2 shadow-lg flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-500 rounded-[1.8rem] p-5 flex flex-col items-center justify-between text-white gap-4">
        
        <div className="text-center">
          <span className="text-xl font-bold">📍 {name}</span>
          <p className="text-sm opacity-90">{time}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-4xl">{emoji}</div>
          <h3 className="text-5xl font-bold">{temperature}°C</h3>
          <p className="text-lg font-medium">{weather}</p>
        </div>

        <div className="w-full flex justify-around text-sm font-medium text-center">
          <div>
            <span>💧</span>
            <p>Humidity</p>
            <p className="font-bold">{humidity}%</p>
          </div>
          <div>
            <span>🌬️</span>
            <p>Wind</p>
            <p className="font-bold">{wind} km/h</p>
          </div>
          <div>
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
