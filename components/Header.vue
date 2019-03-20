<template lang="pug">
  Header
    b-navbar(toggleable="lg" type="light" variant="light")
      router-link(to="/") My Blog
      b-navbar-toggle(target="nav_collapse")
      b-collapse#nav_collapse(is-nav)
        b-navbar-nav.ml-4
          b-nav-item
            router-link(to="/posts") 文章列表
</template>
