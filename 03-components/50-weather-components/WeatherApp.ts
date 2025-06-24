import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import WeatherList from './WeatherList.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const weatherData = getWeatherData()

    return {
      weatherData,
    }
  },

  components: {
    WeatherList,
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <WeatherList :weatherData="weatherData" />
    </div>
  `,
})
