<template lang="pug">
  Header
    b-navbar(toggleable="lg" type="light" variant="light")
      b-navbar-brand(href="/") My Blog
      b-navbar-toggle(target="nav_collapse")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav
          b-nav-item(href="/posts") 文章列表
</template>
