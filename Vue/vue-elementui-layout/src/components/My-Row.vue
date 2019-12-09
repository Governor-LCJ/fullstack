<template>
  <div class="my-el-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    tag: String
  },
  render (h) {
    const tag = this.tag || 'div';
    return h(tag, {
      class: 'y-el-row'
    }, this.$slots.default)
  }

}
</script>

<style scoped>
.my-el-row{
  width: 100%;
}
</style>