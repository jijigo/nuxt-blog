<template lang="pug">
  section
    Swiper(:posts="posts")
    .container
      h1.mb-4 近期文章
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
      .get(
        `https://api.github.com/repos/jijigo/notes/issues?client_id=69b20c68610effdb3301&client_secret=6c34ebfd3013782746e09734505691b3f311655f`
      )
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
  max-width: 700px;
  margin: 50px auto;
}
</style>
