<template lang="pug">
  .wrapper
    h1 文章列表
    PostsList(:posts="posts")
</template>

<script>
import axios from 'axios'
import PostsList from '~/components/PostsList'

export default {
  components: {
    PostsList
  },
  data() {
    return {
      posts: []
    }
  },
  async asyncData({ params }) {
    const data = await axios.get(
      `https://api.github.com/repos/jijigo/notes/issues`
    )
    return { posts: data.data }
  }
}
</script>
