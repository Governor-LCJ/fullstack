<template>
  <div class="login">
      <h2>登陆页面</h2>
      <div class="login-wrap">
          <p>
            <span>账号</span>
            <input type="text">
          </p>
          <p>
            <span>密码</span>
            <input type="text">
          </p>
          <div class="btn">{{登录}}</div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            btn:'登录'
        }
    },
    methods:{
        gologin() {
        this.$router.push({path:'./Login'})
        }
    }
}
</script>

<style>
    .login{
        width: 100%;
    }
    .h2{
        font-size: 20px;
    }
    .login-wrap{
        width: 400px;
        height: 40px;
        background: #eeeeee;
        border: 1px solid #000;

    }
</style>