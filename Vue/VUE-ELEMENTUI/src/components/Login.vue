<template>
  <div class="login">
    <div class="login-wrapper">
        <h4>XXX 管理系统</h4>
        <el-input v-model="user" placeholder="请输入内容" class="user int"></el-input>
        <el-input placeholder="请输入密码" class="psd int" v-model="password" show-password></el-input>
         <el-button type="primary" class="int" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user !== '' && this.password !== '') {
        localStorage.setItem('name', this.user)
        this.$router.push({path: '/main'})
        console.log(this.user)
      } else {
        this.$message.error('账号密码不能为空')
      }
    }
  }
}
</script>

<style>
.login{
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}
.login-wrapper{
    width: 400px;
    height: 350px;
    text-align: center;
    box-shadow: 0 0 10px #aaa;
    border-radius: 10px;
}
.int{
    width: 80%;
    margin: 0 auto;
    display: block;
    margin-bottom: 20px;
}
</style>
