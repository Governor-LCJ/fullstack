<template>
  <div>
    <span @mousedown="start" style="position: fixed;left: 0; top: 0;">这是一个拖拽文本</span>
    <el-button @click="open">open</el-button>
    <el-dialog title="tips" :visible="visible">
      <span @click="close">这是一段信息</span>
    </el-dialog>
  </div>
</template>

<script>
import mixin from './visiable';
import dragAblemix from './drag';
export default {
  mixins: [mixin, dragAblemix],
  // data () {
  //   return {
  //     visible: false
  //   }
  // },
  // methods: {
  //   open () {
  //     this.visible = true
  //   },
  //   close () {
  //     this.visible = false
  //   }
  // },
  components: {

  }
}
</script>

<style>

</style>