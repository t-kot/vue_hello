/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

console.log('Hello World from Webpacker')

import messageRoomIndex from '../message-room-index'
import messageRoomShow from '../message-room-show'

window.addEventListener('DOMContentLoaded', () => {
  const elm = document.querySelector('[data-js-action]')
  if (!elm) return

  const key = elm.dataset.jsAction
  if (key === 'message-room-index') {
    messageRoomIndex()
  } else if (key === 'message-room-show') {
    messageRoomShow()
  }
})