<template>
  <div class="content">
    <swiper
      indicator-dots="true"
      indicator-color="rgba(0, 0, 0, .3)"
      indicator-active-color="rgb(255, 255, 255, .3)"
      autoplay="true"
      interval="5000"
      duration="500"
      circular="true"
    >
      <block v-for="(item, index) in imgUrl" :key="index">
        <swiper-item :src="item"></swiper-item>
      </block>
    </swiper>
    <div class="search">
      <icon type="search"></icon>
      <input class="SearchInput" type="text" value="你要住在哪？" />
      <div class="local" @click="local">
        <p>南昌</p>
      </div>
    </div>
    <div class="menu">
      <div class="MenuItem" v-for="(item, index) in menu" :key="index">
        <img :src="{{item.MimgUrl}}" alt />
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrl: [
        'http://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%B4%9D%E5%A3%B3%E6%89%BE%E6%88%BF&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2907994702,1324778298&os=1844497178,1872536605&simid=0,0&pn=19&rn=1&di=101090&ln=1439&fr=&fmq=1576072975870_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F002859fc560b5bc8fc6b17191a71ea211333e4f8c96f8-xBWzyd_fw658&rpstart=0&rpnum=0&adpicid=0&force=undefined',
        'http://img4.imgtn.bdimg.com/it/u=3900826684,1208019178&fm=26&gp=0.jpg',
        '../../image/swiper/swiper1.jpg'
      ],
      menu: [
        {
          MimgUrl: '../../image/icon/rent_home.png',
          title: '二手房'
        },
        {
          MimgUrl: '../../image/icon/rent_home.png',
          title: '二手房'
        },
        {
          MimgUrl: '../../image/icon/rent_home.png',
          title: '二手房'
        },
        {
          MimgUrl: '../../image/icon/rent_home.png',
          title: '二手房'
        }
      ]
    }
  },
  methods: {
    local () {
      console.log('local click')
    }
  }
}
</script>

<style>
.search {
  padding: 2px;
  position: absolute;
  top: 10px;
  width: 80%;
  border-radius: 20px;
  background-color: #fff;
}
.SearchInput,
.local {
  display: inline-block;
}
</style>