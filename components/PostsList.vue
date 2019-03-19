<template lang="pug">
  .posts-list
    ul.p-0
      router-link(v-for="post in posts" :key="post.id" tag="li" :to="'/posts/'+ post.number")
        .media.position-relative.d-block
          .media-body
            h4.mt-0 {{ post.title }}
            p
              | {{ post.body.substr(0, 300) }}
            a.stretched-link(href='#')

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

<style lang="scss" scoped>
.posts-list {
  text-align: left;
  ul {
    list-style: none;
    li {
      margin-bottom: 1.5em;
      transition: transform 0.2s;
      &:hover {
        transform: translateX(-30px);
      }
      h4 {
        @include text-ellipsis-2;
        &:before {
          content: '';
          border: 2px solid #000;
          height: 30px;
          position: absolute;
          left: -20px;
        }
      }

      p {
        max-height: 48px !important;
        @include text-ellipsis-2;
      }
    }
  }
}
</style>
