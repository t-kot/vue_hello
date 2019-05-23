<style>
.preview {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
</style>

<template>
  <div>
    <div class="is-editing" v-if='isEditing'>{{ message.body }}</div>
    <div class="preview">
      <div class="row">
        <div class="col-10">
          <p>{{ message.body }}</p>
        </div>
        <div class="col-2">
          <a href="#" class="btn btn-sm btn-warning" @click.prevent='handleDelete(message)'>削除</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    message: Object,
  },
  data() {
    return {
      isEditing: false,
    }
  },
  methods: {
    handleDelete(message) {
      this.$emit('on-delete', message)
    }
  }
}
</script>

