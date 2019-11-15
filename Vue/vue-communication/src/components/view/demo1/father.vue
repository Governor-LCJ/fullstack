<template>
  <div class="container">
      <child v-bind:send-msg="myMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
    data () {
        return {
            myMsg: 'this is father Msg'
        }
    },
    components: {
        child
    }
}
</script>

<style>

</style>