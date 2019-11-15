<template>
  <div class="child">
      <h2>子组件</h2>
      <p>从父组件接收到的数据是：</p>
      <div>
          string: <span class="red">{{sendMsg}}</span>
      </div>
      <div>
          number: <span class="red">{{sendNum}}</span>
      </div>
      <div>
          <ul class="red">
              <li v-for="item in send" :key="item"></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        sendMsg: {
            type: String,
            required: true
        },
        sendNum: {
            type: Number,
            required: false
        },
        send: {
            //声明验证类型
            validator (val) {
                if (
                    Object.prototype.toString.call(val) === "[object Array]" ||
                    Object.prototype.toString.call(val) === "[object object]"
                ) {
                    return val
                }
            }
        } 
    }
}
</script>

<style>
.red{
    color: red;
}
</style>