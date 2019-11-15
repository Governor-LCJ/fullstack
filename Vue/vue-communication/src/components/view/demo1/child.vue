<template>
  <div class="chlid">
      <h2>组件</h2>
      <p>the msg from father is:</p>
      <strong>{{sendMsg}}</strong>
      <p class="hr"></p>
      <p>the ChangeMsg from child is:</p>
      <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
    props: ['sendMsg'],
    computed: {//计算属性  用来响应式的修饰数据源
        changeMsg () {
            return this.sendMsg.toUpperCase()
        }
    }
}
</script>

<style>
.hr{
margin-top: 50px;
}
</style>