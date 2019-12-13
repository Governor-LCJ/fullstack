<template>
  <div class="parents">
    <!-- <v-child1></v-child1> -->
    Parents
    <!-- <v-child2></v-child2> -->
    <v-form>Form</v-form>
  </div>
</template>

<script>
import Child1 from '@/components/views/child1'
import Child2 from '@/components/views/child2'
import Form from '@/components/form/form'
export default {
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'v-child1': Child1,
    'v-child2': Child2,
    'v-form': Form
  },
  mounted () {
    this.$on('test', (text) => {
      console.log('派发事件')
    })
  }
}
</script>

<style>

</style>