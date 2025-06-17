import { defineComponent, createApp } from 'vue'

const app = createApp(defineComponent({
  name: 'CreateAppExample',
  setup() {
    const message:string = `Сегодня ${new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })}`
    return { message }
  },

  template: `<h1>{{ message }}</h1>`,
}))

app.mount('#app')