<template>
  <div>
    <home-header />
  </div>
</template>

<script>
import Header from './Header';
import Swiper from './Swiper'
export default {
  data () {
    return {
      swiperList: []
    }
  },
  mounted () {
    axios.get('/Vue/qunar-app/static/mock/index.json')
    .then(res => {
      if (res.data) {
        this.swiperList = red.data.data.swiperList
      }
    })
  },
  components: {
    HomeHeader: Header
  }
}
</script>

<style lang="scss">
@import "../../assets/style/variable.scss" ;
</style>