<template>
  <div >
    <h3>
      aaaaaaaaaaaaa
      <i-display :code="code"></i-display>
    </h3>
  </div>
</template>

<script>
import IDisplay from '@/components/display/display.vue'
import defaultCode from '@/components/display/display.js'
export default {
  data() {
    code: defaultCode
  },
  components: {
    iDisplay
  }
}
</script>

<style>

</style>