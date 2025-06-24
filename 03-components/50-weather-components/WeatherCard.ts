import { defineComponent } from 'vue'
import WeatherCurrentConditions from './WeatherCurrentConditions.ts'
import WeatherCurrentDetails from './WeatherCurrentDetails.ts'
import WeatherAlert from './WeatherAlert.ts'
import WeatherTitle from './WeatherTitle.ts'

export default defineComponent({
  name: 'WeatherCard',

  components: {
    WeatherCurrentConditions,
    WeatherCurrentDetails,
    WeatherAlert,
    WeatherTitle,
  },

  props: {
    weather: {
      type: Object,
      required: true
    }
  },

  setup() {
    function isNight(dt:string, sunrise:string, sunset:string): boolean {
      return dt > sunset || dt < sunrise
    }

    return {
      isNight,
    }
  },

  template: `
    <li 
      class="weather-card"
      :class="{ 'weather-card--night': isNight(weather.current.dt, weather.current.sunrise, weather.current.sunset) }"
    >
      <WeatherAlert
        :weatherAlert="weather.alert"
        v-if="weather.alert"
      />
      <WeatherTitle
        :geographicName="weather.geographic_name"
        :currentTime="weather.current.dt"
      />
      <WeatherCurrentConditions 
        :currentWeather="weather.current" 
        class="weather-conditions"
      />
      <WeatherCurrentDetails
        :currentWeather="weather.current"
      />
    </li>
  `
})