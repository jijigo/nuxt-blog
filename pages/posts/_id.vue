<template lang="pug">
  .post
    .container.flex-column.text-left
      h1.post__title {{ post.title }}
      .post__content(v-html="$md.render(content)")
    RelatePosts(:posts="posts")
</template>

<script>
import axios from 'axios'
import RelatePosts from '@/Components/RelatePosts'

export default {
  components: {
    RelatePosts
  },
  data() {
    return {
      posts: []
    }
  },
  computed: {
    content() {
      return this.post.body.replace(`# ${this.post.title}`, '')
    }
  },
  async asyncData({ params }) {
    const post = await axios.get(
      `https://api.github.com/repos/jijigo/notes/issues/${
        params.id
      }?client_id=69b20c68610effdb3301&client_secret=6c34ebfd3013782746e09734505691b3f311655f`
    )
    return { post: post.data }
  },
  created() {
    axios
      .get(
        `https://api.github.com/repos/jijigo/notes/issues?client_id=69b20c68610effdb3301&client_secret=6c34ebfd3013782746e09734505691b3f311655f`
      )
      .then(res => {
        this.getRelatePost(res.data)
      })
  },
  methods: {
    getRelatePost(posts) {
      const random = []
      while (random.length < 3) {
        if (posts.length === 0) {
          break
        }
        const num = Math.floor(Math.random() * posts.length)
        if (random.indexOf(num) === -1 && (num !== 6 || num !== 0)) {
          random.push(num)
        }
      }
      this.posts = posts.filter(post => {
        return random.includes(post.number)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  .container {
    margin-top: 50px;
    margin-bottom: 100px;
    max-width: 700px;
  }
  &__title {
    margin: 30px 0;
    word-break: break-all;
  }
}
</style>
