<template lang="pug">
    .cell
      span {{title}}
      span(v-if='content') {{content}}
</template>



<script>
export default {
  props: {
    title: String,
    content: Number
  }
}
</script>

<style lang='sass'>
  .cell
      width: 100%
      font-size: 0
      > *
          vertical-align: middle
          display: lnline-block
      span
         width: 50%
         text-align: left
      
      .material-icon
          width: 50%
          text-align: right
</style>
