import { defineComponent, onBeforeMount, ref, watch, watchEffect } from 'vue'
import type { MeetupDTO } from './meetups.types.ts'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetupIds = ["1", "2", "3", "4", "5"]
    const currentMeetupId = ref(meetupIds[0])
    const currentMeetup = ref<MeetupDTO | null>(null)

    onBeforeMount(async () => {
      currentMeetup.value = await getMeetup(1)
      document.title = currentMeetup.value.title
    })

    watch(currentMeetupId, async (newMeetupId) => {
      console.log(newMeetupId)
      currentMeetup.value = await getMeetup(newMeetupId)
      document.title = currentMeetup.value.title
    })

    return {
      currentMeetup,
      currentMeetupId
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button 
          class="button button--secondary" 
          type="button" 
          :disabled="currentMeetupId === '1'"
          @click="currentMeetupId = String(Number(currentMeetupId) - 1)"
        >
          Предыдущий
        </button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="1"
              @change="currentMeetupId = 1"
              v-model="currentMeetupId"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="2"
              v-model="currentMeetupId"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="3"
              v-model="currentMeetupId"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="4"
              v-model="currentMeetupId"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              value="5"
              v-model="currentMeetupId"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button 
          class="button button--secondary" 
          type="button"
          :disabled="currentMeetupId === '5'"
          @click="currentMeetupId = String(Number(currentMeetupId) + 1)"
        >
          Следующий
        </button>
      </div>

      <div class="meetup-selector__cover" v-if="currentMeetup">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ currentMeetup.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
