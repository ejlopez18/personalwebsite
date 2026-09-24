// McMurdo Station, Antarctica
const LAT = -77.85;
const LON = 166.67;

// WMO weather interpretation codes → emoji
const WEATHER_EMOJI = {
  0:  '☀️',
  1:  '🌤️',
  2:  '⛅',
  3:  '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌦️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  71: '❄️',
  73: '❄️',
  75: '❄️',
  77: '❄️',
  80: '🌧️',
  81: '🌧️',
  82: '🌧️',
  85: '🌨️',
  86: '🌨️',
  95: '⛈️',
  96: '⛈️',
  99: '⛈️',
};

async function fetchAntarcticaWeather() {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${LAT}&longitude=${LON}` +
    `&current=temperature_2m,weather_code,wind_speed_10m`;

  const emojiEl = document.getElementById('weather-emoji');
  const tempEl  = document.getElementById('weather-temp');
  const windEl  = document.getElementById('weather-wind');

  try {
    const res  = await fetch(url);
    const data = await res.json();
    const { temperature_2m, weather_code, wind_speed_10m } = data.current;

    const emoji = WEATHER_EMOJI[weather_code] ?? '🌡️';
    const temp  = Math.round(temperature_2m);
    const wind  = Math.round(wind_speed_10m);

    emojiEl.textContent = emoji;
    tempEl.textContent  = `${temp}°C`;
    windEl.textContent  = `${wind} km/h`;
  } catch {
    emojiEl.textContent = '🐧';
    tempEl.textContent  = 'very cold';
    windEl.textContent  = 'probably windy';
  }
}

fetchAntarcticaWeather();
