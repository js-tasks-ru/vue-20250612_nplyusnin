import { defineComponent } from "vue";
import { WeatherConditionIcons } from './weather.service.ts'

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

    function mbarToMmHg(mbar: number): number {
      return Math.round(mbar * 0.750062)
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