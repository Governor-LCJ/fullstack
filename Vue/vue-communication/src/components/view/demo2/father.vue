<template>
  <div class="container">
      <!-- <div>
          <ul class="red">
              <li v-for="item in myObj" :key="item"></li>
          </ul>
      </div> -->
      <child :send-msg="myMsg" :send-num="myNum" :send="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
    data () {
        return {
            myObj: [
                {
                    id: 1,
                    name: '张三'
                },
                {
                    id: 2,
                    name: '李四'
                }
            ],
            myMsg: '我是父组件的信息',
            myNum: 123
        }
    }
}
</script>

<style>

</style>