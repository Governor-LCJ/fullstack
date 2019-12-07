<template>
  <button :class="'i-button-size'+size" @click="handleClick()">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, array) {
  for (let i = 0; i < array.length; i++) {
    if(value === array[i]) {
      return true
    }
  }
  return false
}
export default {
  data () {
    return {
      message: '子组件内容'
    }
  },
  methods: {
    handleClick () {
      this.$emit('on-click')
    },
    osure () {
      // console.log('osure')
      this.$emit('sendmsg', this.message)
    }
  },
  props: {
    size: {
      // type: String,
      // 对传的值进行校验
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  }
}
</script>

<style scoped>
button{
  border: 1px solid orange;
  background-color: yellow;
  color: black;
  border-radius: 10px;
}
.i-button-sizelarge{
  padding: 8px 10px;
}
.i-button-sizedefault{
  padding: 6px 8px;
}.i-button-sizesmall{
  padding: 4px 6px;
}
</style>