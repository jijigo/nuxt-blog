const pkg = require('./package')
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/jijigo/'
        }
      }
    : {}

module.exports = {
  mode: 'universal',
  router: {
    ...routerBase
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/app.scss',
    'bootstrap-vue/dist/bootstrap-vue.css',
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' }
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/bootstrap-vue.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    use: ['markdown-it-highlightjs']
  },
  /**
   * https://github.com/nuxt/nuxt.js/tree/dev/examples/style-resources
   */
  styleResources: {
    // your settings here
    scss: '~/assets/scss/mixin.scss',
    less: [],
    stylus: []
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
