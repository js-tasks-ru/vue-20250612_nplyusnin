import { defineComponent, createApp } from 'vue'

const app = createApp(defineComponent({
  setup() {
    const message:string = `Сегодня ${new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })}`
    return { message }
  },
  name: 'CreateAppExample',
  template: `<h1>{{message}}</h1>`,
}))

app.mount('#app')