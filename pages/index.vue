<template lang="pug">
  section
    Swiper(:posts="posts")
    PostsList(:posts="posts")
</template>

<script>
import Swiper from '~/components/Swiper'
import PostsList from '~/components/PostsList'
import axios from 'axios'

export default {
  components: {
    Swiper,
    PostsList
  },
  asyncData({ params, error }) {
    return axios
      .get(`https://api.github.com/repos/jijigo/notes/issues`)
      .then(res => {
        console.log(res)
        return {
          posts: res.data.slice(0, 5)
        }
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
