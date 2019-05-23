<style lang='scss' scoped>
.is-editing {
  padding: 10px;
  background: #eee;
}
.preview {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
</style>

<template>
  <div>
    <div class="is-editing" v-if='isEditing'>
      <div class="row">
        <div class="col-10">
          <textarea rows="3" class="form-control" v-model='form.body'></textarea>
        </div>
        <div class="col-2">
          <a href="#" class="btn btn-sm btn-info" @click.prevent='handleUpdate'>更新</a>
          <a href="#" class="btn btn-sm btn-secondary" @click.prevent='isEditing = false'>閉じる</a>
        </div>
      </div>
    </div>
    <div class="preview" v-else>
      <div class="row">
        <div class="col-10">
          <p>{{ message.body }}</p>
        </div>
        <div class="col-2">
          <a href="#" class="btn btn-sm btn-info" @click.prevent='isEditing = true'>編集</a>
          <a href="#" class="btn btn-sm btn-warning" @click.prevent='handleDelete'>削除</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // propsは親から受け取る値で、<message-box :message='message'></message-box>
  // のような形式で渡される。
  // propsを直接書き換えたりすることはできない(あくまでデータが上流から流し込まれているイメージ)
  // propsに関連して編集や削除をしたい場合はイベントを発火させ親で処理させる
  props: {
    message: Object,
  },
  mounted() {
    this.form.body = this.message.body
  },
  data() {
    // componentではdataは関数で用意する必要がある
    // 基本的にはオブジェクトをそのまま返せば良い
    return {
      isEditing: false,
      form: {
        body: '',
      }
    }
  },
  methods: {
    handleDelete() {
      // this.$emit('event-name') で任意のイベント名を発火できる
      // これは親からは <message-box @on-delete='callbackFunc'></message-box>
      // のような形式で購読できる
      this.$emit('on-delete', this.message)
    },
    handleUpdate() {
      this.$emit('on-update', Object.assign(this.message, this.form))
      this.isEditing = false
    }
  }
}
</script>

