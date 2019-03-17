<template lang="pug">
  .post
    h1 {{ post.title }}
    div(v-html="$md.render(content)")
</template>

<script>
import axios from 'axios'

export default {
  computed: {
    content() {
      return this.post.body.replace(`# ${this.post.title}`, '')
    }
  },
  async asyncData({ params }) {
    const data = await axios.get(
      `https://api.github.com/repos/jijigo/notes/issues/${params.id}`
    )
    return { post: data.data }
  }
}
</script>
