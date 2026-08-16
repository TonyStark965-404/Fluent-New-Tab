import './style.css';

// 1. Clock
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  const clockEl = document.getElementById('clock-time');
  const dateEl = document.getElementById('clock-date');

  if (clockEl) clockEl.textContent = `${hours}:${minutes}`;
  if (dateEl) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString(undefined, options);
  }
}
setInterval(updateClock, 1000);
updateClock();

// 2. Search
document.getElementById('search-input')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query) {
      if (query.startsWith('http://') || query.startsWith('https://')) {
        window.location.href = query;
      } else {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      }
    }
  }
});

// 3. NASA Wallpaper
const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY';

async function fetchNasaWallpaper() {
  const titleEl = document.getElementById('time-coded');
  const descEl = document.getElementById('coding-project');

  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    if (!response.ok) throw new Error('NASA API error');

    const data = await response.json();
    const imageUrl = data.hdurl || data.url;

    if (data.media_type === 'image' && imageUrl) {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
    }

    if (titleEl) titleEl.textContent = data.title || 'Astronomy Picture of the Day';
    if (descEl) descEl.textContent = data.explanation || 'Daily picture provided by NASA.';

  } catch (err) {
    console.error('NASA Fetch Error:', err);
    if (titleEl) titleEl.textContent = 'Astronomy Picture of the Day';
    if (descEl) descEl.textContent = 'Unable to load NASA wallpaper. Verify your VITE_NASA_API_KEY.';
  }
}
fetchNasaWallpaper();

// 4. Live Weather via Geolocation & Open-Meteo
async function fetchWeather(lat, lon) {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await res.json();
    const temp = Math.round(data.current_weather.temperature);
    const code = data.current_weather.weathercode;

    document.getElementById('weather-temp').textContent = `${temp}°C`;
    document.getElementById('weather-desc').textContent = getWeatherCondition(code);
  } catch (e) {
    document.getElementById('weather-desc').textContent = 'Unavailable';
  }
}

function getWeatherCondition(code) {
  if (code === 0) return 'Clear Sky';
  if (code <= 3) return 'Partly Cloudy';
  if (code <= 48) return 'Foggy';
  if (code <= 67) return 'Rainy';
  if (code <= 77) return 'Snowy';
  return 'Thunderstorm';
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
    () => fetchWeather(28.61, 77.20) // Default fallback coordinates
  );
} else {
  fetchWeather(28.61, 77.20);
}

// 5. Recent Sites Dropdown
const recentBtn = document.getElementById('recent-btn');
const recentMenu = document.getElementById('recent-menu');
const recentList = document.getElementById('recent-list');

recentBtn?.addEventListener('click', () => {
  recentMenu?.classList.toggle('hidden');
});

// Hide dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!recentBtn?.contains(e.target) && !recentMenu?.contains(e.target)) {
    recentMenu?.classList.add('hidden');
  }
});

// Load Chrome Top Sites or render fallback
if (typeof chrome !== 'undefined' && chrome.topSites) {
  chrome.topSites.get((sites) => {
    if (recentList) {
      recentList.innerHTML = sites.slice(0, 5).map(site => `
        <a href="${site.url}" class="flyout-item">
          <span>🌐</span>
          <span>${site.title || site.url}</span>
        </a>
      `).join('');
    }
  });
} else if (recentList) {
  recentList.innerHTML = `
    <a href="https://google.com" class="flyout-item"><span>🌐</span> Google</a>
    <a href="https://github.com" class="flyout-item"><span>🐙</span> GitHub</a>
  `;
}