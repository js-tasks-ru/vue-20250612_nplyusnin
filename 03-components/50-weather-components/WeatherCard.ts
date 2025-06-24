import { defineComponent, computed } from 'vue'
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

  setup(props) {
    const isNight = computed(() => {
      return props.weather.current.dt > props.weather.current.sunset || props.weather.current.dt < props.weather.current.sunrise
    })

    return {
      isNight,
    }
  },

  template: `
    <li 
      class="weather-card"
      :class="{ 'weather-card--night': isNight }"
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