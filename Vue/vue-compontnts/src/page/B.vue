<template>
  <div class="b-test">B{{name}}
    <testC></testC>
  </div>
</template>

<script>
import C from './C'
export default {
  inject: ['name'],
  mounted () {
    console.log('this.name')
  },
  components: {
    'testC': C
  },
}
</script>

<style>

</style>