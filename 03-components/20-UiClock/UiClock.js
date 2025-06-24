import { defineComponent, ref, onBeforeMount, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' }))

    function updateTime() {
      currentTime.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    onBeforeMount(() => {
      setInterval(updateTime, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(updateTime)
    })

    return {
      currentTime
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
