<template lang="pug">
  .banner(v-swiper:myswiper="swiperOption")
    .swiper-wrapper
      .swiper-slide(v-for="item in list" :style="{'backgroundImage': 'url(' + item.bg + ')'}"
        style="height: 300px; background")
        .title {{ item.title }}
        b-link.stretched-link(:to="'/posts/'+ item.number")
    .swiper-button-prev
    .swiper-button-next
</template>

<script>
import Vue from 'vue'

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

<style lang="scss">
.banner {
  .swiper-slide {
    background-size: contain;
  }
}
</style>

<style lang="scss" scoped>
.banner {
  position: relative;
  .title {
    position: absolute;
    padding: 30px;
    background: rgba(255, 255, 255, 0.5);
    margin: auto;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    font-size: 20px;
    color: #000;
  }
  & /deep/ .swiper-slide {
    background-size: cover;
    background-position: center;
  }
}
</style>
