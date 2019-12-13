<template>
  <div class="a-test">
    A
    <testB></testB>
  </div>
</template>

<script>
import B from './B'
export default {
  provide: {
    name:'蜗牛'
  },
  components: {
    'testB': B
  },
  data () {
    return {
      name: '蜗牛2'
    }
  }
}
</script>

<style>

</style>