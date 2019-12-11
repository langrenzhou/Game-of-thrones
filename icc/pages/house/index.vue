<template lang='pug'>
   .container
     .house-media
       .desc
         .words {{house.words}}
         .name {{house.name}}
    
     .house-body
       .title {{house.title}}
       .body {{house.intro}}
       .title 主要角色
       .items(v-for='(item,index) in house.swornMembers' :key='index')
          .members
            img(:src='item.cname')
            .desc
              .cname {{item.cname}}
              .intro {{item.text}}

     .house-history(v-for='(item,index) in house.sections' :key='index')
     .title {{item.title}}
     .content(v-for='text in item.content') {{text}}
       
</template>
<script>
import { mapState } from 'vuex'

export default {
  middleware: 'wechat-auth',
  transition: {
    name: 'slide-left'
  },
  head() {
    return {
      title: '家族详情'
    }
  },
  computed: {
    ...mapState({
      imageCDN: 'imageCDN',
      house: 'focusHouse'
    })
  },
  beforeCreate() {
    let id = this.$route.query.id
    this.$store.dispatch('showHouse', id)
  }
}
</script>

<style lang='sass' scoped src='@/static/sass/house.sass'></style>
