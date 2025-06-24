import { defineComponent } from "vue";
import { WeatherConditionIcons } from './weather.service.ts'
import { mbarToMmHg } from './mbar_to_mm_hg.ts'

export default defineComponent({
  name: "WeatherCurrentConditions",

  props: {
    currentWeather: {
      type: Object,
      required: true,
    },
  },

  setup() {
    function kelvinToCelsius(kelvin: number): string {
      return Number(kelvin - 273.15).toFixed(1)
    }

    return {
      WeatherConditionIcons,
      kelvinToCelsius,
      mbarToMmHg
    };
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="\`\${currentWeather.weather.description}\`">{{ WeatherConditionIcons[currentWeather.weather.id] }}</div>
      <div class="weather-conditions__temp">{{ kelvinToCelsius(currentWeather.temp) }} °C</div>
    </div>
  `,
});