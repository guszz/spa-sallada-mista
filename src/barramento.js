import Vue from 'vue'
export default new Vue({
  methods: {
    setSelectPage(pages) {
      this.$emit('selectPage', pages)
    },
    onSelectPage(callback) {
      this.$on('selectPage', callback)
    }
  }
})