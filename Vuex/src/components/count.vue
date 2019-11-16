<template>
  <div class="count">
    {{myCount}}
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <!-- {{$store.state.count}} -->
    {{state.count}}
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  // mounted () {
  //   this.myCount = this.$store.state.count
  // },
  // computed: {
  //   myCount () {
  //     return this.$store.state.count
  //   }
  // },
  computed: mapState ({
   count: state => state.count,//与下面写法一致
   myCount (state) {
      return state.count
    }
  }),
  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ])
  }
}
</script>

<style>

</style>