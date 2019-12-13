<template>
  <div class="child1">child1
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '我是child1里的数据'
    }
  },
  methods: {
    send () {
      // this.$emit('test',this.message)
      // this.$dispatch('test', this.message)
      this.$broadcast('test', this.message)
    }
  }

}
</script>

<style>

</style>