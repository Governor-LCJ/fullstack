<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <i-button size="small" @on-click="btn1"><i slot="icon">**</i>小按钮</i-button>
    <i-button size="large" @on-click="btn2">大按钮</i-button>
    <i-button size="large" ref="sure" @click.native="osure" @sendmsg="getmsg">大按钮2</i-button>
    <div>{{mess}}</div>
    <button @click="showToast">button</button>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mess: ''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    showToast () {
      this.$toast('网络异常')
    },
    btn1 () {
      console.log("我是小按钮")
    },
    btn2 () {
      console.log("我是大按钮")
    },
    osure () {
      this.msg = this.$refs.sure.message
    },
    getmsg (e) {
      this.mess = e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
