<template lang="pug">
  nav#nav(v-if='navVisble')
    nuxt-link(v-for='(item,index) in navList' :to='item.path' :key='index')
      div(v-if='index === 0')
         img(v-if='activeRoute !== item.name' src='@/static/img/home.png')
         img(v-else src='@/static/img/home-selected.png')
      div(v-if='index === 1')
         img(v-if='activeRoute !== item.name' src='@/static/img/shopping.png')
         img(v-else src='@/static/img/shopping-selected.png')
      div(v-else)
         img(v-if='activeRoute !== item.name' src='@/static/img/user.png')
         img(v-else src='@/static/img/user-selected.png')
      p {{item.text}}
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          path: '/',
          name: 'index',
          text: '脸谱'
        },
        {
          path: '/shopping',
          name: 'shopping',
          text: '手办周边'
        },
        {
          path: '/user',
          name: 'user',
          text: '我的账户'
        }
      ],
      navVisble: true
    }
  }
}
</script>
<style scoped lang='sass' src='@/static/sass/nav.sass'>
</style>
