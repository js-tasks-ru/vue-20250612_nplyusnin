import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherTitle',

  props: {
    geographicName: {
      type: String,
      required: true
    },

    currentTime: {
      type: String,
      required: true
    }
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ geographicName }}
      </h2>
      <div class="weather-card__time">
        {{ currentTime }}
      </div>
    </div>
  `
})