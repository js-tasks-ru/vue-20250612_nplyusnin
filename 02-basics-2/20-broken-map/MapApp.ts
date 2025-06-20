import type { Ref } from 'vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const x: Ref<number> = ref(0)
    const y: Ref<number> = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event: MouseEvent): void {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    return {
      handleClick,
      x,
      y
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="{ left: \`\${x}px\`, top: \`\${y}px\` }">📍</span>
    </div>
  `,
})
