// 
const code = `<template>
                <div>
                    <input v-model="message">
                    {{ message }}
                </div>
                </template>
                <script>
                export default {
                    data () {
                        return {
                            message: ''
                        }
                    }
                }
                </script>`

export default code;

const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

// 随机生成长度为 len 的字符串
function str (len) {
  let str = ''
  let maxPos = $chars.length
  for(let i = 0; i < len; i++) {
    str.push($chars.charAt(Math.floor(Math.random() * maxPos)))
  }
  return str
}
