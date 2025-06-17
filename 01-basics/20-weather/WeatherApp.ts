import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons, type WeatherData } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const weatherData: WeatherData[] = getWeatherData()

    function kelvinToCelsius(kelvin: number): string {
      return Number((kelvin - 273.15).toFixed(1)).toLocaleString("en-US", {
        minimumFractionDigits: 1
      })
    }

    function mbarToMmHg(mbar: number): number {
      return Math.round(mbar * 0.750062)
    }

    function isNight(dt:string, sunrise:string, sunset:string): boolean {
      return dt > sunset || dt < sunrise
    }

    return {
      weatherData,
      WeatherConditionIcons,
      kelvinToCelsius,
      mbarToMmHg,
      isNight,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li 
          class="weather-card"
          :class="{ 'weather-card--night': isNight(weather.current.dt, weather.current.sunrise, weather.current.sunset) }"
          v-for="(weather, index) in weatherData"
          :key="index"
        >
          <div class="weather-alert" v-if="weather.alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ weather.alert.sender_name }}: {{ weather.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weather.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weather.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="\`\${weather.current.weather.description}\`">{{ WeatherConditionIcons[weather.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ kelvinToCelsius(weather.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ mbarToMmHg(weather.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
