module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  scripts: [
   {
     src: 'http://res.wx.qq.com/open/js/jweixin-1.2.0.js'
   },
   {
     src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js'
   }
  ],
  /*
  ** Global CSS
  */
 css: [
  {
    src: 'static/sass/index.sass',
    lang: 'sass?indentedSyntax=true'
  },
  {
    src: 'swiper/dist/css/swiper.css'
  }
],

plugins: [
  {
    src: '@/plugins/swiper.js',
    ssr: false
  }
],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
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
