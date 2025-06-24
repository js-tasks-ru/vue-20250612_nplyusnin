import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },

    count: {
      type: Number,
      default: 0,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    function increment() {
      emit('update:count', props.count + 1)
    }

    function decrement() {
      emit('update:count', props.count - 1)
    }

    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    return {
      increment,
      decrement
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="min >= count" @click="decrement">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="max <= count" @click="increment">➕</UiButton>
    </div>
  `,
})
