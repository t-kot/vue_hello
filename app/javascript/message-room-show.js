import Vue from 'vue'
import axios from 'axios'
import messageBox from './components/message-box'

export default () => {
  const app = document.getElementById('app')
  const messageRoom = JSON.parse(app.dataset.messageRoom)
  const messages = JSON.parse(app.dataset.messages)

  new Vue({
    el: '#app',
    data: {
      messageRoom,
      messages,
      newMessage: {
        body: '',
      },
      showError: false,
    },
    components: {
      'message-box': messageBox,
    },
    methods: {
      async addMessage() {
        if (!this.newMessage.body.length) {
          this.showError = true
          return
        }
        try {
          const res = await axios.post(`/message_rooms/${this.messageRoom.id}/messages`, {
            message: {
              body: this.newMessage.body,
            }
          })
          this.messages.push(res.data)
          this.newMessage.body = ''
        } catch (e) {
          console.log(e)
          alert('メッセージの投稿に失敗しました')
        }
      },
      async updateMessage(message) {
        try {
          const res = await axios.patch(`/message_rooms/${this.messageRoom.id}/messages/${message.id}`, {
            message,
          })
        } catch(e) {
          console.log(e)
          alert('更新に失敗')
        }
      },
      async deleteMessage(message) {
        try {
          const res = await axios.delete(`/message_rooms/${this.messageRoom.id}/messages/${message.id}`)
          const idx = this.messages.findIndex(m => m.id === message.id)
          this.messages.splice(idx, 1) // idxの要素を削除
        } catch(e) {
          console.log(e)
          alert('削除に失敗しました')
        }
      }
    }
  })
}
