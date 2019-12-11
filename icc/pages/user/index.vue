<template lang='pug'>
.container
  .user
    .user-header
       .text {{user.avatarUrl}}
       img(:src='user.avatarUrl')
    .user-address
       cell(title='收货地址')
       .user-content {{user.address}}
    .user-phone
       cell(title='电话')
       .user-content {{user.phoneNumber}}
    .user-name
       cell(title='电话')
       .user-content {{user.name}}
    .user-order
       cell(title='我的订单')
       .user-order-items(v-for='i in 10' :key='i')

</template>

<script>
import cell from '@/components/cell.vue'
// import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: '个人账户'
    }
  },
  components: {
    cell
  },
  data() {
    return {
      user: {
        nickname: '尔雅',
        address: '杭州新校区',
        phoneNumber: 12366666666666666666,
        name: 'Scott',
        savatarUrl: 'http://oqncgivnd.bkt.clouddn.com/periphery/jon.jpg'
      },
      productImg: 'http://oqncgivnd.bkt.clouddn.com/periphery/jon.jpg'
    }
  },
//   computed: {
//     ...mapState(['user', 'orders'])
//   },
  methods: {},
  beforeCreate() {
    // this.$route.dispatch('fetchUserAnaOrders')
  }
}
</script>

<style scoped lang='sass' src='@/static/sass/user.sass'>

</style>
