<template lang="pug">
  .wrapper
    ul
      router-link(v-for="post in posts" :key="post.id" tag="li" :to="'/posts/'+ post.number") {{ post.title }}
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: null
    }
  }
}
</script>
