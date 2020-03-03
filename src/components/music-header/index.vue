<template>
    <div class="music-header">
      <h1 class="text">高校音乐平台</h1>
      <router-link tag="div" to="/search" class="search">
        <i class="iconfont icon-search"></i>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "music-header"
    }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
  .music-header
    position relative
    height 44px
    width 100%
    text-align center
    background-color $color-theme
    .text
      line-height 44px
      font-size bold
      color $color-text-l
      letter-spacing 3px
    .search
      position absolute
      top 0
      right 2px
      .iconfont
        display block
        padding 12px
        font-size 18px
        color $color-theme-l
</style>
