<template lang="pug">
  .relate-posts
    b-row.m-0
      b-col(cols="12" md="4" v-for="post in posts" :key="post.number")
        b-card.mb-2( :title="post.title"
          img-src='https://picsum.photos/600/300/?image=25'
          img-alt='Image' img-top='' tag='article')
          b-card-text
            | {{ post.body.substr(0, 100) }}
          a.stretched-link(:href="'/posts/' + post.number")
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
.relate-posts {
  max-width: 1032px;
  margin: auto;
  flex-wrap: nowrap;

  & /deep/ .card {
    @media screen and (max-width: 767px) {
      width: 100%;
      max-width: none;
    }
  }
  .card-title {
    @include text-ellipsis-2;
  }
  .card-text {
    @include text-ellipsis-2;
  }
}
</style>
