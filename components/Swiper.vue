<template lang="pug">
  .banner(v-swiper:myswiper="swiperOption")
    .swiper-wrapper
      .swiper-slide(v-for="item in list" :style="{'backgroundImage': 'url(' + item.bg + ')'}"
        style="height: 300px; background")
        h1 {{ item.title }}
        b-link.stretched-link(:to="'/posts/'+ item.number") 進入文章
    .swiper-button-prev
    .swiper-button-next
</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'

if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}

export default {
  props: {
    posts: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    list() {
      return this.posts.map((post, i) => {
        return {
          ...post,
          bg: `https://picsum.photos/500/300/?image=${i}`
        }
      })
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('GET_POSTS')
  }
}
</script>

<style lang="scss" scoped>
.banner {
  & /deep/ .swiper-slide {
    background-size: cover;
    background-position: center;
  }
}
</style>
