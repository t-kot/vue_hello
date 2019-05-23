import Vue from 'vue'

export default () => {
  console.log('message room index')
  const view = document.getElementById('app')

  const messageRooms = JSON.parse(view.dataset.messageRooms)

  new Vue({
    el: '#app',
    data: {
      messageRooms,
    }
  })
}
