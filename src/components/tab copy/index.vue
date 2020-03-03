<template>
    <div class="tab">
      <router-link tag="div" class="item" to="/recommend">
        <span>推荐</span>
      </router-link>
      <router-link tag="div" class="item" to="/rank">
        <span>排行</span>
      </router-link>
      <router-link tag="div" class="item" to="/singer">
        <span>歌手</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
  .tab
    display flex
    height 44px
    line-height 44px
    width 100%
    font-size $font-size-medium
    background $color-theme
    .item
      flex 1
      text-align center
      color $color-text-l
      span
        padding-bottom 3px
      &.router-link-active
        span
          font-weight bold
          color $color-text-l
          border-bottom 2px solid $color-text-l
</style>
