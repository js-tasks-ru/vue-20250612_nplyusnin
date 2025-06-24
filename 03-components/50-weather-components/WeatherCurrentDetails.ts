import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',

  props: {
    currentWeather: {
      type: Object,
      required: true
    }
  },

  setup() {
    function mbarToMmHg(mbar: number): number {
      return Math.round(mbar * 0.750062)
    }

    return {
      mbarToMmHg
    }
  },

  template: `
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ mbarToMmHg(currentWeather.pressure) }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ currentWeather.humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ currentWeather.clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ currentWeather.wind_speed }}</div>
      </div>
    </div>
  `
})