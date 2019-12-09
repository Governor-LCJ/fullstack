<script>
  export default {
    render(h) {
      const tag = this.tag || 'div'
      const classCol = `my-el-col-${this.span}`
      return h(tag, {

      }, this.$slots.default)
    }
  }
</script>
<style lang="scss" scoped>
@for $i from 0 through 24 {
  .my-el-col-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }
}
</style>