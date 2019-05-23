import Vue from 'vue'
import axios from 'axios'

export default () => {
  console.log('message room index')
  const view = document.getElementById('app')

  const messageRooms = JSON.parse(view.dataset.messageRooms)

  new Vue({
    el: '#app',
    data: {
      messageRooms,
      newRoom: {
        title: '',
      }
    },
    methods: {
      async submit() {
        try {
          const res = await axios.post('/message_rooms', {
            title: this.newRoom.title,
          })
          this.messageRooms.push(res.data)
        } catch (e) {
          console.log(e)
          alert('作成に失敗しました。')
        }
      }
    }
  })
}
