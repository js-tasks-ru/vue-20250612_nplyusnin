import { defineComponent } from 'vue'
import WeatherCard from './WeatherCard.ts'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherCard
  },

  props: {
    weatherData: {
      type: Array,
      required: true
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
      <WeatherCard 
        v-for="(weather, index) in weatherData" 
        :weather="weather"
      />
    </ul>
  `
})