<template lang="pug">
.container
  .focus-goods-body
    .focus-goods-swiper(v-swiper='swiperConfig')
      .swiper-wrapper
        .swiper-slide(v-for='item in product.images')
          img(:src="imageCDN + item")
          
      .swiper-pagination.swiper-pagination-bullets
    
    .focus-goods-content
      
      .focus-goods-price
        span.focus-goods-price_main {{ product.price.toFixed(2) - product.price.toFixed(2).substr(-3) }}
        span.focus-goods-price_others {{ product.price.toFixed(2).substr(-3) }}
      
      .focus-goods-name {{ product.title }}

      .focus-goods-intro {{ product.intro }}

      .focus-goods-info
        cell(v-for='(item, index) in product.parameters' :key='index' :title='item.key' :content='item.value')

      .focus-goods-attentions
        .title 购买提示
        ol
          li(v-for='item in attentions') {{ item }}

  .focus-goods-footer
    span(@click='payHandle') 购买
</template>

<script>
import { mapState } from 'vuex'
import cell from '@/components/cell.vue'
export default {
  middleware: 'wechat-auth',
  head() {
    return {
      title: '购买页面'
    }
  },
  data() {
    return {
      swiperConfig: {
        autoplay: 4000,
        direction: 'horizontal',
        loop: true,
        pagination: '.swiper-pagination'
      },
      attentions: [
        '商品和服务的差异',
        '清关服务',
        '物流服务',
        '需要更多帮助，请联系管理员愚忠'
      ]
    }
  },
  components: {
    cell
  },
  computed: {
    ...mapState({
      'product': 'currentProduct'
    })
  },
  methods: {
    buyProduct(item) {
      // 路由跳转到deal，附带查询参数id
      console.log(item)
      console.log('will ')
    //   this.$router.push({ path: '/deal', query: { id: item._id } })
    }
  },
  beforeCreate() {
    const id = this.$route.query.id
    this.$store.dispatch('showProducts', id)
  },
  mounted() {
    // 滚动条滚动至上次离开前的位置
    setTimeout(() => {
      this.$el.scrollTop = this.shoppingScroll
    }, 50)
  },
  beforeDestroy() {
    // 离开前保存滚动条位置
    this.$store.dispatch('shoppingScroll', this.$el.scrollTop)
  }
}
</script>

<style lang="sass" src='@/static/sass/deal.sass'></style>
